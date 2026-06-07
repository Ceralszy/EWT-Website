DROP DATABASE IF EXISTS EWT;
CREATE DATABASE EWT;
USE EWT;

-- ---------------------------------------------------------
-- TABLE CREATIONS
-- ---------------------------------------------------------

CREATE TABLE ADMINS (
    Staff_ID INT AUTO_INCREMENT PRIMARY KEY,
    Username VARCHAR(50) NOT NULL,
    Password VARCHAR(255) NOT NULL,
    Position VARCHAR(50),
    Role VARCHAR(50)
);

CREATE TABLE CATEGORY (
    Category_ID INT AUTO_INCREMENT PRIMARY KEY,
    Category_Name VARCHAR(100) NOT NULL
);

CREATE TABLE CUSTOMER (
    Customer_ID INT AUTO_INCREMENT PRIMARY KEY,
    Username VARCHAR(50) NOT NULL,
    Email VARCHAR(100) NOT NULL UNIQUE,
    ContactNumber VARCHAR(20)
);

CREATE TABLE SHIPPING (
    Shipping_ID INT AUTO_INCREMENT PRIMARY KEY,
    Size_Item VARCHAR(50) NOT NULL, 
    Shipping_Cost DECIMAL(10, 2) NOT NULL
);

CREATE TABLE PAYMENT (
    Payment_ID INT AUTO_INCREMENT PRIMARY KEY,
    Invoice_ID VARCHAR(50) UNIQUE,
    Payment_Date DATETIME DEFAULT CURRENT_TIMESTAMP,
    Total_Amount DECIMAL(10, 2) NOT NULL,
    Payment_Status VARCHAR(20) DEFAULT 'Pending Verification'
);

CREATE TABLE MEMBERS (
    Customer_ID INT PRIMARY KEY,
    Password VARCHAR(255) NOT NULL,
    Address TEXT,
    Sub_Date DATE,
    Exp_Date DATE,
    Point INT DEFAULT 0,
    FOREIGN KEY (Customer_ID) REFERENCES CUSTOMER(Customer_ID) ON DELETE CASCADE
);

CREATE TABLE PRODUCT (
    Product_ID INT AUTO_INCREMENT PRIMARY KEY,
    Category_ID INT,
    Name VARCHAR(150) NOT NULL,
    Brand VARCHAR(50),
    Price DECIMAL(10, 2) NOT NULL,
    Stock_Quantity INT NOT NULL DEFAULT 0,
    Specs TEXT,
    Description TEXT,
    Staff_ID INT,
    FOREIGN KEY (Category_ID) REFERENCES CATEGORY(Category_ID) ON DELETE SET NULL,
    FOREIGN KEY (Staff_ID) REFERENCES ADMINS(Staff_ID) ON DELETE SET NULL
);

CREATE TABLE CUSTOM_BUILD (
    Build_ID INT AUTO_INCREMENT PRIMARY KEY,
    Customer_ID INT,
    Build_Name VARCHAR(100) DEFAULT 'My Custom PC',
    Total_Build_Price DECIMAL(10, 2) DEFAULT 0.00,
    Created_At DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (Customer_ID) REFERENCES CUSTOMER(Customer_ID) ON DELETE CASCADE
);

CREATE TABLE ORDERS (
    Order_ID INT AUTO_INCREMENT PRIMARY KEY,
    Customer_ID INT,
    Payment_ID INT,
    Shipping_ID INT, 
    Fulfillment_Method VARCHAR(50) NOT NULL, 
    Shipping_Address TEXT,
    Order_Date DATETIME DEFAULT CURRENT_TIMESTAMP,
    Total_Price DECIMAL(10, 2) NOT NULL DEFAULT 0.00,
    FOREIGN KEY (Customer_ID) REFERENCES CUSTOMER(Customer_ID) ON DELETE CASCADE,
    FOREIGN KEY (Payment_ID) REFERENCES PAYMENT(Payment_ID) ON DELETE SET NULL,
    FOREIGN KEY (Shipping_ID) REFERENCES SHIPPING(Shipping_ID) ON DELETE SET NULL
);

CREATE TABLE BUILD_PARTS (
    Build_ID INT,
    Product_ID INT,
    PRIMARY KEY (Build_ID, Product_ID),
    FOREIGN KEY (Build_ID) REFERENCES CUSTOM_BUILD(Build_ID) ON DELETE CASCADE,
    FOREIGN KEY (Product_ID) REFERENCES PRODUCT(Product_ID) ON DELETE CASCADE
);

CREATE TABLE ORDER_DETAIL (
    Order_Detail_ID INT AUTO_INCREMENT PRIMARY KEY,
    Order_ID INT,
    Product_ID INT,
    Quantity INT NOT NULL,
    Unit_Price DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (Order_ID) REFERENCES ORDERS(Order_ID) ON DELETE CASCADE,
    FOREIGN KEY (Product_ID) REFERENCES PRODUCT(Product_ID) ON DELETE CASCADE
);

-- ---------------------------------------------------------
-- DATA INITIALIZATION
-- ---------------------------------------------------------

INSERT INTO CATEGORY (Category_Name) VALUES 
('pc'), ('laptop'), ('phone'), ('custom');

INSERT INTO ADMINS (Username, Password, Position, Role) VALUES 
('admin', 'password123', 'Manager', 'SuperAdmin');

INSERT INTO SHIPPING (Size_Item, Shipping_Cost) VALUES 
('Small', 10.00),
('Medium', 20.00),
('Large', 40.00);

-- ---------------------------------------------------------
-- MODULE 1 Membership Points Automation
-- ---------------------------------------------------------

DELIMITER //
CREATE PROCEDURE Award_Points(IN p_OrderID INT)
BEGIN
    DECLARE v_TotalSpent DECIMAL(10,2);
    DECLARE v_CustomerID INT;
    DECLARE v_PointsEarned INT;

    -- Grab the Order Total and the Customer ID
    SELECT COALESCE(Total_Price, 0), Customer_ID INTO v_TotalSpent, v_CustomerID
    FROM ORDERS
    WHERE Order_ID = p_OrderID;

    -- Calculate the points (RM 10 = 1 Point)
    SET v_PointsEarned = FLOOR(v_TotalSpent / 10);

    -- Add the points to the MEMBERS table using exact column names!
    UPDATE MEMBERS 
    SET Point = COALESCE(Point, 0) + v_PointsEarned
    WHERE Customer_ID = v_CustomerID;
END; //
DELIMITER ;

-- ---------------------------------------------------------
-- MODULE 2 Inventory Deduction
-- ---------------------------------------------------------
DELIMITER //
CREATE TRIGGER Deduct_Inventory_After_Order
AFTER INSERT ON ORDER_DETAIL
FOR EACH ROW
BEGIN
    UPDATE PRODUCT 
    SET Stock_Quantity = Stock_Quantity - NEW.Quantity
    WHERE Product_ID = NEW.Product_ID;
END; //
DELIMITER ;

DROP TRIGGER IF EXISTS Deduct_Inventory_After_Order;
DELIMITER //
CREATE TRIGGER Safe_Deduct_Inventory
BEFORE INSERT ON ORDER_DETAIL
FOR EACH ROW
BEGIN
    DECLARE v_AvailableStock INT;

    -- Look up how many items are left in stock
    SELECT Stock_Quantity INTO v_AvailableStock
    FROM PRODUCT
    WHERE Product_ID = NEW.Product_ID;

    -- If the customer wants more than we have, crash the query on purpose!
    IF NEW.Quantity > v_AvailableStock THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Transaction cancelled: Insufficient stock available.';
    ELSE
        -- Otherwise, proceed with the deduction safely
        UPDATE PRODUCT 
        SET Stock_Quantity = Stock_Quantity - NEW.Quantity
        WHERE Product_ID = NEW.Product_ID;
    END IF;
END; //
DELIMITER ;

-- ---------------------------------------------------------
-- MODULE 3 Custom PC Builder Logic
-- ---------------------------------------------------------

DELIMITER //
CREATE PROCEDURE AddPartToBuild(IN p_BuildID INT, IN p_ProductID INT)
BEGIN
    INSERT INTO BUILD_PARTS (Build_ID, Product_ID) 
    VALUES (p_BuildID, p_ProductID);

    UPDATE CUSTOM_BUILD cb
    SET Total_Build_Price = (
        SELECT COALESCE(SUM(p.Price), 0.00)
        FROM BUILD_PARTS bp
        JOIN PRODUCT p ON bp.Product_ID = p.Product_ID
        WHERE bp.Build_ID = p_BuildID
    )
    WHERE cb.Build_ID = p_BuildID;
END; //
DELIMITER ;

-- ---------------------------------------------------------
-- MODULE 4 Order & Payment
-- ---------------------------------------------------------

DELIMITER //
CREATE PROCEDURE FinalizeCheckout(IN p_OrderID INT)
BEGIN
    DECLARE v_Subtotal DECIMAL(10,2);
    DECLARE v_ShippingCost DECIMAL(10,2) DEFAULT 0.00;
    DECLARE v_GrandTotal DECIMAL(10,2);
    DECLARE v_PaymentID INT;
    DECLARE v_InvoiceStr VARCHAR(50);

    -- Calculate item subtotal
    SELECT COALESCE(SUM(Quantity * Unit_Price), 0) INTO v_Subtotal
    FROM ORDER_DETAIL 
    WHERE Order_ID = p_OrderID;

    -- Add Shipping if applicable
    SELECT COALESCE(s.Shipping_Cost, 0.00) INTO v_ShippingCost
    FROM ORDERS o
    LEFT JOIN SHIPPING s ON o.Shipping_ID = s.Shipping_ID
    WHERE o.Order_ID = p_OrderID;

    SET v_GrandTotal = v_Subtotal + v_ShippingCost;
    
    -- Generate Invoice String
    SET v_InvoiceStr = CONCAT('INV-', YEAR(CURDATE()), '-', p_OrderID);

    -- Create Pending Payment
    INSERT INTO PAYMENT (Invoice_ID, Total_Amount, Payment_Status)
    VALUES (v_InvoiceStr, v_GrandTotal, 'Pending Verification');
    
    SET v_PaymentID = LAST_INSERT_ID(); 

    -- Link back to Order
    UPDATE ORDERS
    SET Total_Price = v_GrandTotal,
        Payment_ID = v_PaymentID
    WHERE Order_ID = p_OrderID;
END; //
DELIMITER ;

SELECT * FROM product
