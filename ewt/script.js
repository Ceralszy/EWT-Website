const products = [
    { id: 1, name: "ASUS ROG Strix G16CH", description: "Aggressive aerodynamic styling with a built-in handle for LAN party portability", price: 5499, oldPrice: 5899, category: "pc", image: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=500", specs: "Intel Core i7-13700F, RTX 4070, 16GB DDR4, 1TB SSD" },
    { id: 2, name: "Acer Predator Orion 3000", description: "Compact 18-liter monolith equipped with FrostBlade fans for excellent thermal management", price: 3999, oldPrice: 4299, category: "pc", image: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?w=500", specs: "Intel Core i5-13400F, RTX 4060, 16GB DDR5, 1TB SSD" },
    { id: 3, name: "ACER ASPIRE 15, A15-51M-74VY", description: "Sleek, everyday productivity laptop", price: 3699, oldPrice: 3900, category: "laptop", image: "https://brightstarcomp.com/cdn/shop/files/d34a3cc2ac55023e820d955283ff63ee.jpg?v=1736160091", specs: "Intel Core 7-150U processor, 16GB LPDDR5X RAM, 512GB NVMe SSD" },
    { id: 4, name: "Poco X6 Pro", description: "Aggressive mid-range gaming performance at an unbeatable value", price: 1499, oldPrice: 1699, category: "phone", image: "https://myworldphone.com/cdn/shop/files/08_ce87cb86-bb9a-4cf9-b8b9-0d01b6539dfb.webp?v=1710876477&width=1445", specs: "MediaTek Dimensity 8300 Ultra, 8GB RAM, 256GB Storage" },
    { id: 5, name: "Realme 12 Pro+ 5G", description: "Luxury watch-inspired design featuring a periscope portrait lens", price: 1899, oldPrice: 2099, category: "phone", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1QEgMMYAIGJd31NrvuO1kgv27cFRQ0lgYcg&s", specs: "Snapdragon 7s Gen 2, 12GB RAM, 256GB Storage" },
    { id: 6, name: "Lian Li PC-O11 Dynamic Mid-Tower", description: "The gold standard for showcasing your custom build with seamless dual-chamber glass panels", price: 699, oldPrice: 849, category: "custom", image: "https://lian-li.com/wp-content/uploads/2021/12/evo-600-000.jpg", specs: "ATX Form Factor, Dual Chamber Design, USB-C Front I/O" },
    { id: 7, name: "ACER ASPIRE 5 A515-58P-570K", description: "Reliable, budget friendly laptop", price: 2699, oldPrice: 2900, category: "laptop", image: "https://www.berdaya2u.com.my/image/berdaya2u/image/cache/data/all_product_images/product-6797/Untitled-1-420x420.jpg", specs: "Intel Core i5-1335U (13th Gen), 8GB LPDDR5 RAM, 512GB PCIe Gen4 NVMe SSD" },
    { id: 8, name: "HP VICTUS 15-fb3228AX MICA SILVER", description: "Entry-to-mid-level gaming and productivity laptop", price: 3499, oldPrice: 3799, category: "laptop", image: "https://www.njuskalo.hr/image-w920x690/hp-prijenosnici/gaming-laptop-hp-victus-15-slika-231358937.jpg", specs: "AMD Ryzen 7 7445HS, 16GB DDR5-5600 MHz RAM, 512GB PCIe Gen4 NVMe M.2 SSD" },
    { id: 9, name: "HP Laptop 15-fd0618TU MOONLIGHT BLUE", description: "Stylish, reliable laptop designed for everyday productivity and study", price: 2500, oldPrice: 2900, category: "laptop", image: "https://www.uboncomputer.co.th/pub/media/catalog/product/cache/566bac40c34e1b79304197de40a22c99/1/6/160027.jpg", specs: "Intel Core 5 120U, 8 GB DDR4-3200 RAM, 512 GB PCIe NVMe M.2 SSD" },
    { id: 10, name: "HP VICTUS 15-FB3255AX PERFORMANCE BLUE", description: "Capable entry-to-mid-tier gaming laptop", price: 4000, oldPrice: 4500, category: "laptop", image: "https://down-my.img.susercontent.com/file/my-11134207-7rasf-mbys2a6ayrpl0e", specs: "AMD Ryzen 7 7445HS, 16GB DDR5-5600 RAM, 512GB PCIe Gen4 NVMe M.2 SSD" },
    { id: 11, name: "HP Laptop 14-em0092AU SILVER", description: "Reliable daily computing for students and home use", price: 2199, oldPrice: 2399, category: "laptop", image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQYx1gJTXnyvqa_VYoqo8ltujKSj_m48nBi5HNRvspkTq-3mrsj-8n9Rj-oOw3pU-Jzl--CvKKDlXGJuCN4NNW752aZeEuHoUQwpVtyhd4erWFbhJ5dNPpVO8y4pX6eV0bvRDk8Ig&usqp=CAc", specs: "AMD Ryzen 5 7520U, 8GB LPDDR5 RAM, 512GB PCIe NVMe SSD" },
    { id: 12, name: "ACER ASPIRE 3 A315-59-51ET LAPTOP", description: "Practical and affordable laptop for everyday office tasks", price: 2399, oldPrice: 2599, category: "laptop", image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcT1kDtQC3pbOT66HwUGJ_HmN8qgtpr8Nx0UFJMpVqy3hZiIUySqsPlf94HIL6kpIOIPmHNEq9ME0-x0qXibl4NeF9o2TqY9lYooOlr_K-DOsLO_zi-ta137Tgxq8G0GoQ3tVem-v0F3cIU&usqp=CAc", specs: "Intel Core i5-1235U, 8GB DDR4 RAM, 512GB PCIe NVMe SSD" },
    { id: 13, name: "Asus A1505Z-AMA083WS", description: "Vibrant OLED display with powerful multi-core processing", price: 2699, oldPrice: 2899, category: "laptop", image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRRTSyOGCklPULQ7r6vAtTMgT7OVeolfw_LzpQuYNzS6QrCL-SYEaEfnr_1tauK-5mG62WzpvUkPiNJaoOAhjRJUkdwnqd8J6g7qSr8y_5hd03ZR5kIJfAlcUTXJDbJsptKUL6oNW7UN9A&usqp=CAc", specs: "Intel Core i5-12500H, 8GB DDR4 RAM, 512GB PCIe NVMe SSD" },
    { id: 14, name: "ACER ASPIRE VERO AV15-522W LAPTOP", description: "Eco-friendly design with solid everyday performance", price: 2799, oldPrice: 2999, category: "laptop", image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRkLDM_0H2pX9JM24uZjoWuYzYJxwIWCTXnPFM8FoykjccCa4-X6jeyz2h7peRQMysyGeJytMj_qkMXUF9EdNR5Yy8bY-L4Z7g3p-NVPGGp2QGz_7MEEn30xPlbpAIu&usqp=CAc", specs: "Intel Core i5-1235U, 8GB DDR4 RAM, 512GB PCIe NVMe SSD" },
    { id: 15, name: "ACER ASPIRE 5 A514-55G-50YL LAPTOP", description: "Versatile work laptop with great thermals and connectivity", price: 2899, oldPrice: 3199, category: "laptop", image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQpzmAEZMbQnRQ7vbIgEr9ROZ80Zwmeq7mgqpItI5f_NuIdUyUwmAkj8iQqrq59jQPXyRIK0tOBRQA78gY4xQxiag0gaVsSZdvE1s1Rq-JK1qMcdfJkeEyoaprNVj11d97IKj1GVORupqqw&usqp=CAc", specs: "Intel Core i5-1235U, 8GB DDR4 RAM, 512GB PCIe NVMe SSD" },
    { id: 16, name: "HP LAPTOP 15-fc0421AU SILVER", description: "Sleek 15-inch laptop with ample memory for heavy multitasking", price: 2399, oldPrice: 2699, category: "laptop", image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSYu5sh-Wu_FZ1z6xBK0LhrnpQcRUjYqBAIeXpKyWAsOSuWtUyROSwFxQMkZWZovNuRddYkYtllFQ7Fdy_kEVo_p935HgtQxI2erbGR4E1_GqtkiC9tCjJ7DXoPwgf073btiaVmCJJ2nQ&usqp=CAc", specs: "AMD Ryzen 5 7520U, 16GB LPDDR5 RAM, 512GB PCIe NVMe SSD" },
    { id: 17, name: "HP Pavilion Aero 13-bg0035AU Silver LAPTOP", description: "Ultra-lightweight premium laptop for on-the-go professionals", price: 3799, oldPrice: 4099, category: "laptop", image: "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/catalog-image/94/MTA-172115607/hp_hp_pavilion_aero_13_ryzen_7_8840u_16gb_1tb_w11_ohs_13-3-_wuxga_ips_-bg0777au_-bg0888au_full12_g4uifubm.jpg", specs: "AMD Ryzen 5 8640U, 16GB LPDDR5 RAM, 512GB PCIe NVMe SSD" },
    { id: 18, name: "HP 245 G8 (450D2PA) Laptop Asteroid Silver", description: "Budget-friendly business laptop for essential administrative tasks", price: 1699, oldPrice: 1899, category: "laptop", image: "https://media.ldlc.com/r1600/ld/products/00/05/85/24/LD0005852474_1_0005852554.jpg", specs: "AMD Ryzen 3 3250U, 8GB DDR4 RAM, 256GB PCIe NVMe SSD" },
    { id: 19, name: "HP ENVY X360 14-fa0058AU Glacier Silver LAPTOP", description: "Premium 2-in-1 convertible touchscreen for creative versatility", price: 4399, oldPrice: 4699, category: "laptop", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQa_uvPyQJfU9Gou0ZYI9Dg0hHoArqwIxRPw&s", specs: "AMD Ryzen 5 8640HS, 16GB LPDDR5 RAM, 512GB PCIe NVMe SSD" },
    { id: 20, name: "HP PAVILION 15-EG2015TU GOLD LAPTOP", description: "Elegant gold finish with strong productivity performance", price: 3199, oldPrice: 3499, category: "laptop", image: "https://hnsgsfp.imgix.net/9/images/detailed/92/hp-laptop-15s-eq2196au-ryzen-3-8gb-512gb-windows-11-15-6-inch-laptop-pale-gold_6.jpg?fit=fill&bg=0FFF&w=2500&h=1463&auto=format,compress", specs: "Intel Core i5-1240P, 8GB DDR4 RAM, 512GB PCIe NVMe SSD" },
    { id: 21, name: "Samsung Galaxy S24 Ultra", description: "Premium flagship with titanium design and advanced Galaxy AI features", price: 6299, oldPrice: 6799, category: "phone", image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQxDwDG5PA1j7AYFr5Io4iG-xAz0iJqJt3yHXAkDnVmMczKw_yiel6fIzEQoDVf4Q0IENbGQvbFlp1XbxSCnV1eE_BkY0XTEME_kXPRGV464IfQxV5COgUcICufnkeeGXHabDl9lMs&usqp=CAc", specs: "Snapdragon 8 Gen 3, 12GB RAM, 256GB Storage" },
    { id: 22, name: "Apple iPhone 15", description: "Vibrant Super Retina XDR display with the dynamic island and USB-C", price: 3999, oldPrice: 4399, category: "phone", image: "https://shop.switch.com.my/cdn/shop/files/iPhone_15_Pink_PDP_Image_Position-1__GBEN_7cf60425-0d5a-4bc9-bfd9-645b9c86e68e.jpg?v=1717694179", specs: "A16 Bionic chip, 6GB RAM, 128GB Storage" },
    { id: 23, name: "Google Pixel 8 Pro", description: "The ultimate Android camera experience with exclusive AI photo editing", price: 4299, oldPrice: 4699, category: "phone", image: "https://www.vopmart.com/media/wysiwyg/Google/google-pixel-8-pro-1.jpg", specs: "Google Tensor G3, 12GB RAM, 128GB Storage" },
    { id: 24, name: "Samsung Galaxy A55 5G", description: "Reliable daily driver with a premium glass back and excellent battery life", price: 1999, oldPrice: 2199, category: "phone", image: "https://my.priceshop.com/imgps/op/307e39bc54e340b78fd3c4b1c92ff771?preset=my-prod-m", specs: "Exynos 1480, 8GB RAM, 256GB Storage" },
    { id: 25, name: "Xiaomi 14", description: "Compact powerhouse co-engineered with Leica for stunning photography", price: 3499, oldPrice: 3799, category: "phone", image: "https://i.ebayimg.com/images/g/NAEAAOSwiJ1lPHAg/s-l1200.jpg", specs: "Snapdragon 8 Gen 3, 12GB RAM, 256GB Storage" },
    { id: 26, name: "OnePlus 12", description: "Ultra-fast charging and buttery smooth performance for heavy users", price: 4599, oldPrice: 4899, category: "phone", image: "https://oasis.opstatics.com/content/dam/oasis/page/2023/cn/12/12-green.png", specs: "Snapdragon 8 Gen 3, 16GB RAM, 512GB Storage" },
    { id: 27, name: "Nothing Phone (2a)", description: "Unique transparent design with the signature Glyph interface", price: 1699, oldPrice: 1899, category: "phone", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNXaxURPEAJIUoBeWD5sPd0vX9WW0FV1fh-g&s", specs: "MediaTek Dimensity 7200 Pro, 8GB RAM, 128GB Storage" },
    { id: 28, name: "Oppo Reno 11 Pro 5G", description: "Sleek portrait expert with a curved display and fast fast-charging", price: 2499, oldPrice: 2799, category: "phone", image: "https://www.oppo.com/content/dam/oppo/common/mkt/v2-2/reno11-pro-5g-en/listpage/reno11-pro-427-600-white.png", specs: "MediaTek Dimensity 8200, 12GB RAM, 512GB Storage" },
    { id: 29, name: "Vivo V30 Pro", description: "Ultra-slim profile featuring Zeiss optics and an Aura Light portrait ring", price: 2599, oldPrice: 2899, category: "phone", image: "https://fdn2.gsmarena.com/vv/bigpic/vivo-v30-pro.jpg", specs: "MediaTek Dimensity 8200, 12GB RAM, 512GB Storage" },
    { id: 30, name: "Honor Magic 6 Pro", description: "Exceptional battery technology and a telephoto camera built for sports", price: 4499, oldPrice: 4899, category: "phone", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAAs9zGjtwPJI25vX0dsUdthqJvQXSJndHsA&s", specs: "Snapdragon 8 Gen 3, 12GB RAM, 512GB Storage" },
    { id: 31, name: "Asus ROG Phone 8", description: "Uncompromised gaming phone with advanced cooling and trigger buttons", price: 4799, oldPrice: 5099, category: "phone", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZp89V4WUEK196dCZxZ06s2ab7kZj_HMG4pA&s", specs: "Snapdragon 8 Gen 3, 16GB RAM, 256GB Storage" },
    { id: 32, name: "Samsung Galaxy Z Flip 5", description: "Stylish foldable design with a large, usable external cover screen", price: 4499, oldPrice: 4999, category: "phone", image: "https://m.media-amazon.com/images/I/61DPZ92rHVL.jpg", specs: "Snapdragon 8 Gen 2, 8GB RAM, 256GB Storage" },
    { id: 33, name: "Apple iPhone 13", description: "The perfect entry point into the Apple ecosystem with solid daily performance", price: 2999, oldPrice: 3299, category: "phone", image: "https://down-my.img.susercontent.com/file/47a4cb7dd90a086d759bbc6ec5c14036", specs: "A15 Bionic chip, 4GB RAM, 128GB Storage" },
    { id: 34, name: "AMD Ryzen 7 7800X3D Processor", description: "The ultimate gaming processor with 3D V-Cache technology for massive frame rate boosts", price: 1999, oldPrice: 2199, category: "custom", image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=500", specs: "8 Cores, 16 Threads, 5.0 GHz Max Boost, AM5 Socket" },
    { id: 35, name: "Intel Core i5-13600K Processor", description: "Exceptional hybrid architecture balancing high-end gaming and heavy productivity tasks", price: 1499, oldPrice: 1699, category: "custom", image: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?w=500", specs: "14 Cores (6P+8E), 20 Threads, 5.1 GHz Max Turbo, LGA 1700" },
    { id: 36, name: "NVIDIA GeForce RTX 4070 Super", description: "Incredible 1440p gaming performance with advanced DLSS 3 frame generation", price: 3199, oldPrice: 3499, category: "custom", image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?w=500", specs: "12GB GDDR6X, 7168 CUDA Cores, PCIe 4.0" },
    { id: 37, name: "AMD Radeon RX 7800 XT", description: "High-end rasterization powerhouse with massive VRAM for future-proof 1440p and 4K gaming", price: 2699, oldPrice: 2999, category: "custom", image: "https://brightstarcomp.com/cdn/shop/files/c796700a6bc04e56364c9fef2c08fc3e.jpg?v=1736159901", specs: "16GB GDDR6, 3840 Stream Processors, PCIe 4.0" },
    { id: 38, name: "MSI MAG B650 TOMAHAWK WIFI", description: "Durable and feature-rich motherboard designed for optimal Ryzen 7000 series performance", price: 1099, oldPrice: 1299, category: "custom", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=500", specs: "AM5, DDR5 Support, Wi-Fi 6E, 3x M.2 Slots" },
    { id: 39, name: "Corsair Vengeance RGB 32GB DDR5", description: "High-speed next-gen memory with dynamic multi-zone RGB lighting", price: 649, oldPrice: 799, category: "custom", image: "https://www.tradeinn.com/f/14090/140906685/corsair-vengeance-rgb-cmh192gx5m4b5200c38-32gb-4x8gb-ddr5-5200mhz-ram.webp", specs: "2x16GB Kit, 6000MHz Speed, CL30 Latency" },
    { id: 40, name: "Samsung 990 PRO 2TB NVMe SSD", description: "Blistering fast storage speeds for near-instant game loading and heavy file transfers", price: 899, oldPrice: 1099, category: "custom", image: "https://brightstarcomp.com/cdn/shop/files/SSD-SAM-PCIE-MZ-V9P1T0BW-1TB_f010fda3-f0e0-46d7-ad40-6a785b4ac9d4.png?v=1769480881&width=360", specs: "PCIe Gen 4.0 x4, Up to 7450 MB/s Read, 6900 MB/s Write" },
    { id: 41, name: "Corsair RM850x 850W Power Supply", description: "Reliable, ultra-quiet, fully modular power to cleanly run high-end components", price: 699, oldPrice: 849, category: "custom", image: "https://brightstarcomp.com/cdn/shop/files/PSU-CS-CP-9020252-UK_ef40c37e-0535-4dfe-bd2d-da2c3db6e4dc.png?v=1769596581&width=360", specs: "850 Watts, 80 PLUS Gold Certified, Zero RPM Fan Mode" },
    { id: 42, name: "NZXT Kraken 240 RGB Liquid Cooler", description: "Premium AIO water cooling featuring a customizable LCD display on the pump block", price: 749, oldPrice: 899, category: "custom", image: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=500", specs: "240mm Radiator, 2x 120mm RGB Fans, 1.54\" LCD Screen" },
    { id: 44, name: "Alienware Aurora R16 Desktop", description: "Redesigned with optimized airflow and stealthy acoustics for premium 4K gaming", price: 8999, oldPrice: 9499, category: "pc", image: "https://images.unsplash.com/photo-1587831990711-23ca6441447b?w=500", specs: "Intel Core i9-14900KF, RTX 4080 Super, 32GB DDR5, 2TB SSD" },
    { id: 45, name: "HP OMEN 45L Gaming Desktop", description: "Patented Cryo Chamber cooling system delivers maximum performance under heavy loads", price: 10999, oldPrice: 11999, category: "pc", image: "https://cdn.cs.1worldsync.com/49/e1/49e1058d-bb3f-44e5-9b63-646f1a877aa4.jpg", specs: "Intel Core i9-13900K, RTX 4090, 64GB RGB DDR5, 2TB Gen4 SSD" },
    { id: 46, name: "Lenovo Legion Tower 5i", description: "Sleek, transparent glass chassis with reliable mid-range 1440p gaming performance", price: 4599, oldPrice: 4999, category: "pc", image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=500", specs: "Intel Core i5-14400F, RTX 4060 Ti, 16GB DDR5, 1TB SSD" },
    { id: 47, name: "Dell XPS Desktop 8960", description: "Minimalist, professional workstation chassis hiding serious creator and gaming power", price: 6299, oldPrice: 6699, category: "pc", image: "https://images.unsplash.com/photo-1542393545-10f5cde2c810?w=500", specs: "Intel Core i7-13700K, RTX 4070, 32GB DDR5, 1TB SSD" }
];

let cart = JSON.parse(localStorage.getItem('cart')) || [];
let currentProducts = [...products];

function renderProducts() {
    const grid = document.getElementById('productsGrid');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    currentProducts.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.onclick = () => showProductDetail(product);
        
        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <div class="product-info">
                <div class="product-name">${product.name}</div>
                <div class="product-price">
                    RM ${product.price.toLocaleString()}
                    <span class="old-price">RM ${product.oldPrice.toLocaleString()}</span>
                </div>
                <button class="add-btn" onclick="event.stopPropagation(); addToCart(${product.id})">Add to Cart</button>
            </div>
        `;
        
        grid.appendChild(card);
    });
}

function filterProducts(category) {
    if (category === 'all') {
        currentProducts = [...products];
    } else {
        currentProducts = products.filter(p => p.category === category);
    }
    renderProducts();
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existing = cart.find(item => item.id === productId);
    
    if (existing) {
        existing.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    displayCartItems(); 
    alert(`${product.name} added to cart!`);
}

function updateCartCount() {
    const total = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartCountElem = document.getElementById('cartCount');
    if (cartCountElem) cartCountElem.textContent = total;
}

function openSidebar() {
    document.getElementById("sidebar").style.width = "280px";
}

function closeSidebar() {
    document.getElementById("sidebar").style.width = "0";
}

function openCart() {
    displayCartItems();
    document.getElementById('cartSidebar').classList.add('open');
}

function closeCart() {
    document.getElementById('cartSidebar').classList.remove('open');
}

function displayCartItems() {
    const cartDiv = document.getElementById('cartItems');
    const totalDiv = document.getElementById('cartTotal');
    const checkoutBtn = document.querySelector('.checkout-btn');
    
    if (cart.length === 0) {
        cartDiv.innerHTML = '<p style="text-align:center; margin-top:20px;">Your cart is empty</p>';
        totalDiv.innerHTML = '';
        if (checkoutBtn) checkoutBtn.style.display = 'none';
        return;
    }
    
    if (checkoutBtn) checkoutBtn.style.display = 'block';
    
    let total = 0;
    cartDiv.innerHTML = cart.map((item, index) => {
        const subtotal = item.price * item.quantity;
        total += subtotal;
        return `
            <div class="cart-item">
                <div>
                    <strong>${item.name}</strong><br>
                    RM ${item.price.toLocaleString()} x ${item.quantity}
                </div>
                <div>
                    RM ${subtotal.toLocaleString()}
                    <button onclick="removeFromCart(${index})" style="background:#e2312b; color:white; border:none; padding:5px 10px; margin-left:10px; cursor:pointer;">×</button>
                </div>
            </div>
        `;
    }).join('');
    
    totalDiv.innerHTML = `Total: RM ${total.toLocaleString()}`;
}

function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    displayCartItems();
}

function checkout() {
    if (cart.length === 0) return;
    window.location.href = 'cart.html';
}

function showProductDetail(product) {
    const modal = document.getElementById('productModal');
    const modalContent = document.getElementById('modalContent');
    
    modalContent.innerHTML = `
        <h2>${product.name}</h2>
        <img src="${product.image}" style="width:100%; border-radius:10px; margin:15px 0;">
        <p class="desc-text">${product.description}</p>
        <div class="specs-container">
            <strong>Specs:</strong> 
            <span>${product.specs}</span>
        </div>
        <div class="product-price" style="margin:15px 0;">
            RM ${product.price.toLocaleString()}
            <span class="old-price">RM ${product.oldPrice.toLocaleString()}</span>
        </div>
        <button class="add-btn" onclick="addToCart(${product.id}); closeModal();">Add to Cart</button>
    `;
    
    modal.classList.add('active');
}

function closeModal() {
    document.getElementById('productModal').classList.remove('active');
}

function showProfile() { alert('Blum Siap :P'); }
function logout() { alert('Logged out'); }
function showLogin() { alert('To be continued^^'); }
function showRegister() { alert('Blum connect lgi :P'); }

renderProducts();
updateCartCount();