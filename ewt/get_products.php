<?php
require_once 'db.php';
header('Content-Type: application/json');

try {
    $stmt = $conn->prepare("
        SELECT 
            p.Product_ID as id, 
            p.Name as name, 
            p.Description as description, 
            p.Price as price, 
            c.Category_Name as category, 
            p.Specs as specs 
        FROM PRODUCT p
        JOIN CATEGORY c ON p.Category_ID = c.Category_ID
    ");
    $stmt->execute();
    
    $products = $stmt->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($products);
    
} catch(PDOException $e) {
    echo json_encode(["error" => "Failed to retrieve products: " . $e->getMessage()]);
}
?>