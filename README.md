# Commercial-website
# Ex02 Commercial Website
Date: 10/11/2026
# AIM
To create a commercial website using CSS Flexbox.

# ALGORITHM
STEP 1
Create an HTML file (index.html)

STEP 2
Create a CSS file (style.css)

STEP 3
Include a navigation bar with links to different sections.

STEP 4
Add structured sections for Homepage, Products / Services, About Us, Contact Details and User Account.

STEP 5
Include social media links at the footer with copyright information.

STEP 6
Define global styles for fonts, colors, and layout.

STEP 7
Style the header, navigation bar, and sections.

STEP 8
Use Flexbox for layout design.

STEP 9
Add hover effects and transitions for interactivity.

STEP 10
Add Images and Media.

STEP 11
Use optimized images for a professional look.

STEP 12
Open the HTML file in a browser to check layout and functionality.

STEP 13
Fix styling issues and refine content placement.

STEP 14
Deploy the website.

STEP 15
Upload to GitHub Pages for free hosting.

# PROGRAM

```
.html


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MODERN - Furniture Store</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

<!-- Navigation -->
<header class="navbar">
    <div class="logo">ModFur.</div>

    <nav>
        <a href="#home">Living Room</a>
        <a href="#products">Bedroom</a>
        <a href="#products">Kitchen & Dining</a>
        <a href="#contact">Contact Us</a>
    </nav>

    <div class="nav-actions">
        <button class="icon-btn" onclick="toggleSearch()">
            🔍
        </button>
        <button class="nav-btn" onclick="openAccount()">Log In</button>
        <button class="signup-btn" onclick="openAccount('register')">
            Sign Up
        </button>
        <button class="icon-btn" onclick="showWishlist()">
            ♡ <span id="wishCount">0</span>
        </button>
        <button class="icon-btn" onclick="showCart()">
            🛒 <span id="cartCount">0</span>
        </button>
    </div>
</header>

<!-- Search Bar -->
<div class="search-area" id="searchArea">
    <input type="text" id="searchInput"
           placeholder="Search furniture..."
           oninput="searchProducts()">
</div>

<!-- Hero Section -->
<section class="hero" id="home">
    <div class="hero-content">
        <h1>
            Style your home <span>just like</span><br>
            you'd want it
        </h1>

        <p>
            Discover beautiful furniture designed
            to make your home special.
        </p>

        <a href="#products" class="shop-btn">
            SHOP CATEGORIES
        </a>
    </div>
</section>

<!-- Products -->
<section class="products-section" id="products">

    <div class="section-heading">
        <h2>New In Store</h2>
        <p>Explore our latest collection</p>
    </div>

    <div class="product-container" id="productContainer">

        <div class="product-card" data-name="white chair">
            <img src="https://images.unsplash.com/photo-1503602642458-232111445657?w=600"
                 alt="White Chair">
            <div class="product-info">
                <h3>Maynooth White Armless Chair</h3>
                <div class="product-bottom">
                    <span class="price">$79</span>
                    <button onclick="addToCart('White Chair',79)">
                        Add to Bag
                    </button>
                </div>
                <button class="wish-btn"
                    onclick="addToWishlist('White Chair')">
                    ♡ Add to Wishlist
                </button>
            </div>
        </div>

        <div class="product-card" data-name="yellow armchair">
            <img src="https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=600"
                 alt="Yellow Chair">
            <div class="product-info">
                <h3>Maynooth Yellow Armchair</h3>
                <div class="product-bottom">
                    <span class="price">$79</span>
                    <button onclick="addToCart('Yellow Armchair',79)">
                        Add to Bag
                    </button>
                </div>
                <button class="wish-btn"
                    onclick="addToWishlist('Yellow Armchair')">
                    ♡ Add to Wishlist
                </button>
            </div>
        </div>

        <div class="product-card" data-name="black chair">
            <img src="https://images.unsplash.com/photo-1598300056393-4aac492f4344?w=600"
                 alt="Black Chair">
            <div class="product-info">
                <h3>Maynooth Black Armless Chair</h3>
                <div class="product-bottom">
                    <span class="price">$79</span>
                    <button onclick="addToCart('Black Chair',79)">
                        Add to Bag
                    </button>
                </div>
                <button class="wish-btn"
                    onclick="addToWishlist('Black Chair')">
                    ♡ Add to Wishlist
                </button>
            </div>
        </div>

        <div class="product-card" data-name="standing lamp">
            <img src="https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=600"
                 alt="Standing Lamp">
            <div class="product-info">
                <h3>Maynooth Standing Lamp</h3>
                <div class="product-bottom">
                    <span class="price">$79</span>
                    <button onclick="addToCart('Standing Lamp',79)">
                        Add to Bag
                    </button>
                </div>
                <button class="wish-btn"
                    onclick="addToWishlist('Standing Lamp')">
                    ♡ Add to Wishlist
                </button>
            </div>
        </div>

        <div class="product-card" data-name="standing lamp">
            <img src="https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=600"
                 alt="Standing Lamp">
            <div class="product-info">
                <h3>Maynooth Standing Lamp</h3>
                <div class="product-bottom">
                    <span class="price">$79</span>
                    <button onclick="addToCart('Standing Lamp',79)">
                        Add to Bag
                    </button>
                </div>
                <button class="wish-btn"
                    onclick="addToWishlist('Standing Lamp')">
                    ♡ Add to Wishlist
                </button>
            </div>
        </div>

        <div class="product-card" data-name="standing lamp">
            <img src="https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=600"
                 alt="Standing Lamp">
            <div class="product-info">
                <h3>Maynooth Standing Lamp</h3>
                <div class="product-bottom">
                    <span class="price">$79</span>
                    <button onclick="addToCart('Standing Lamp',79)">
                        Add to Bag
                    </button>
                </div>
                <button class="wish-btn"
                    onclick="addToWishlist('Standing Lamp')">
                    ♡ Add to Wishlist
                </button>
            </div>
        </div>

        <div class="product-card" data-name="standing lamp">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlqpcsr5-t9iXveNLNzQVI-OKLFJxD85JCk0v4DHXd8Q&s=10"
                 alt="Standing Lamp">
            <div class="product-info">
                <h3>Luxury sofa</h3>
                <div class="product-bottom">
                    <span class="price">$79</span>
                    <button onclick="addToCart('Standing Lamp',79)">
                        Add to Bag
                    </button>
                </div>
                <button class="wish-btn"
                    onclick="addToWishlist('Standing Lamp')">
                    ♡ Add to Wishlist
                </button>
            </div>
        </div>

        <div class="product-card" data-name="standing lamp">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxuiEc5lQxDxE55fqCS_BJonQ8sI2myT4twSM6jhHGoQ&shttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxuiEc5lQxDxE55fqCS_BJonQ8sI2myT4twSM6jhHGoQ&s"
                 alt="Standing Lamp">
            <div class="product-info">
                <h3>Maynooth Standing Lamp</h3>
                <div class="product-bottom">
                    <span class="price">$90</span>
                    <button onclick="addToCart('Standing Lamp',79)">
                        Add to Bag
                    </button>
                </div>
                <button class="wish-btn"
                    onclick="addToWishlist('Standing Lamp')">
                    ♡ Add to Wishlist
                </button>
            </div>
        </div>

    </div>
</section>

<!-- Account Modal -->
<div class="modal" id="accountModal">
    <div class="modal-content">
        <button class="close-btn" onclick="closeModal()">×</button>

        <h2 id="accountTitle">Welcome Back!</h2>
        <p>Login to your furniture account</p>

        <input type="text" id="username"
               placeholder="Your Name">

        <input type="email" id="email"
               placeholder="Email Address">

        <input type="password" id="password"
               placeholder="Password">

        <button class="submit-btn" onclick="loginUser()">
            Login
        </button>

        <p id="accountMessage"></p>

        <p class="switch-text">
            New user?
            <a href="#" onclick="openAccount('register')">
                Create Account
            </a>
        </p>
    </div>
</div>

<!-- Cart Modal -->
<div class="modal" id="cartModal">
    <div class="modal-content">
        <button class="close-btn" onclick="closeModal()">×</button>
        <h2>Your Shopping Cart 🛒</h2>
        <div id="cartItems"></div>
        <h3 id="cartTotal">Total: $0</h3>
        <button class="submit-btn" onclick="checkout()">
            Proceed to Checkout
        </button>
    </div>
</div>

<!-- Wishlist Modal -->
<div class="modal" id="wishlistModal">
    <div class="modal-content">
        <button class="close-btn" onclick="closeModal()">×</button>
        <h2>My Wishlist ♡</h2>
        <div id="wishlistItems"></div>
    </div>
</div>

<!-- Contact -->
<footer id="contact">
    <h2>MODERN Furniture</h2>
    <p>Make your home beautiful with MODERN.</p>
    <p>Instagram | Facebook | Pinterest</p>
    <p>© 2026 MODERN Furniture. All Rights Reserved.</p>
</footer>

<script src="script.js"></script>

</body>
</html>


.css


* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, sans-serif;
}

html {
    scroll-behavior: smooth;
}

body {
    background: #f8f8fa;
    color: #202b3e;
}

/* Navigation */
.navbar {
    background: #19283f;
    color: white;
    padding: 20px 7%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
}

.logo {
    font-size: 35px;
    font-weight: bold;
}

.logo span {
    color: #e9b76b;
}

nav {
    display: flex;
    gap: 25px;
}

nav a {
    color: white;
    text-decoration: none;
    font-size: 14px;
    transition: 0.3s;
}

nav a:hover {
    color: #e9b76b;
}

.nav-actions {
    display: flex;
    align-items: center;
    gap: 10px;
}

.nav-actions button {
    cursor: pointer;
    border-radius: 7px;
    padding: 10px 14px;
}

.icon-btn {
    background: transparent;
    color: white;
    border: none;
    font-size: 17px;
}

.nav-btn {
    background: transparent;
    border: 1px solid white;
    color: white;
}

.signup-btn {
    background: white;
    border: none;
    color: #19283f;
    font-weight: bold;
}

/* Search */
.search-area {
    display: none;
    background: #19283f;
    padding: 15px 7%;
    text-align: center;
}

.search-area.active {
    display: block;
}

.search-area input {
    width: 70%;
    padding: 14px;
    border-radius: 8px;
    border: none;
    outline: none;
}

/* Hero */
.hero {
    min-height: 530px;
    background:
        linear-gradient(90deg, rgba(16,29,48,.8),
        rgba(16,29,48,.25)),
        url("https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1600")
        center/cover no-repeat;
    display: flex;
    align-items: flex-start;
    padding: 100px 10%;
    color: white;
}

.hero-content h1 {
    font-size: 45px;
    font-weight: 300;
    line-height: 1.3;
}

.hero-content h1 span {
    color: #e9b76b;
}

.hero-content p {
    margin: 20px 0 30px;
    line-height: 1.6;
}

.shop-btn {
    display: inline-block;
    background: white;
    color: #19283f;
    padding: 15px 25px;
    border-radius: 8px;
    text-decoration: none;
    font-weight: bold;
    transition: 0.3s;
}

.shop-btn:hover {
    background: #e9b76b;
    transform: translateY(-3px);
}

/* Products */
.products-section {
    padding: 55px 7%;
}

.section-heading {
    margin-bottom: 30px;
}

.section-heading h2 {
    font-size: 28px;
}

.section-heading p {
    color: #777;
    margin-top: 8px;
}

.product-container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
}

.product-card {
    background: white;
    width: 250px;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 15px rgba(0,0,0,.07);
    transition: .3s;
}

.product-card:hover {
    transform: translateY(-7px);
    box-shadow: 0 10px 25px rgba(0,0,0,.13);
}

.product-card img {
    width: 100%;
    height: 230px;
    object-fit: cover;
}

.product-info {
    padding: 15px;
}

.product-info h3 {
    font-size: 16px;
    min-height: 40px;
}

.product-bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 15px;
}

.price {
    font-size: 20px;
    font-weight: bold;
    color: #19283f;
}

.product-bottom button {
    background: #19283f;
    color: white;
    padding: 10px;
    border: none;
    border-radius: 6px;
    cursor: pointer;
}

.product-bottom button:hover {
    background: #c38d46;
}

.wish-btn {
    width: 100%;
    margin-top: 12px;
    padding: 9px;
    background: #fff2f3;
    color: #d64d69;
    border: none;
    border-radius: 6px;
    cursor: pointer;
}

.wish-btn:hover {
    background: #fbdce2;
}

/* Modals */
.modal {
    display: none;
    position: fixed;
    z-index: 100;
    inset: 0;
    background: rgba(0,0,0,.65);
    justify-content: center;
    align-items: center;
    padding: 15px;
}

.modal-content {
    background: #ffffff;
    padding: 35px;
    width: 400px;
    max-width: 100%;
    border-radius: 15px;
    position: relative;
    max-height: 85vh;
    overflow-y: auto;
    box-shadow: 0 10px 35px rgba(0,0,0,.2);
}

.modal-content h2 {
    color: #19283f;
    margin-bottom: 12px;
}

.modal-content p {
    color: #777;
    margin-bottom: 15px;
}

.modal-content input {
    display: block;
    width: 100%;
    padding: 13px;
    margin: 12px 0;
    border: 1px solid #ddd;
    border-radius: 7px;
}

.close-btn {
    position: absolute;
    right: 15px;
    top: 10px;
    font-size: 25px;
    border: none;
    background: none;
    cursor: pointer;
}

.submit-btn {
    width: 100%;
    background: #19283f;
    color: white;
    padding: 13px;
    border: none;
    border-radius: 7px;
    cursor: pointer;
    margin-top: 10px;
}

.submit-btn:hover {
    background: #c38d46;
}

.switch-text {
    text-align: center;
    margin-top: 15px;
}

.switch-text a {
    color: #c38d46;
    font-weight: bold;
}

/* Cart and Wishlist */
.cart-row, .wish-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 0;
    border-bottom: 1px solid #ddd;
    gap: 10px;
}

.cart-row button, .wish-row button {
    background: #f3e4e4;
    border: none;
    padding: 7px;
    border-radius: 5px;
    cursor: pointer;
}

#cartTotal {
    margin-top: 20px;
}

/* Footer */
footer {
    background: #19283f;
    color: white;
    text-align: center;
    padding: 35px 15px;
    line-height: 2;
}

footer p {
    color: #ddd;
}

/* Mobile responsive */
@media(max-width: 850px) {
    .navbar {
        flex-direction: column;
    }

    nav {
        flex-wrap: wrap;
        justify-content: center;
    }

    .nav-actions {
        flex-wrap: wrap;
        justify-content: center;
    }

    .hero {
        padding: 70px 7%;
    }

    .hero-content h1 {
        font-size: 32px;
    }

    .product-card {
        width: 45%;
    }
}

@media(max-width: 500px) {
    .product-card {
        width: 100%;
    }

    .search-area input {
        width: 100%;
    }
}


.js


// Shopping Cart
let cart = [];

// Wishlist
let wishlist = [];

// User Account
let registeredUser = null;


// 1. SEARCH PRODUCTS
function toggleSearch() {
    document.getElementById("searchArea")
        .classList.toggle("active");

    document.getElementById("searchInput").focus();
}

function searchProducts() {
    let input = document.getElementById("searchInput")
        .value.toLowerCase();

    let products = document.querySelectorAll(".product-card");

    products.forEach(product => {
        let name = product.dataset.name.toLowerCase();

        product.style.display =
            name.includes(input) ? "block" : "none";
    });
}


// 2. ADD TO CART
function addToCart(name, price) {
    let existing = cart.find(item => item.name === name);

    if (existing) {
        existing.quantity++;
    } else {
        cart.push({
            name: name,
            price: price,
            quantity: 1
        });
    }

    updateCartCount();

    alert(name + " added to your cart!");
}

function updateCartCount() {
    let count = cart.reduce(
        (total, item) => total + item.quantity, 0
    );

    document.getElementById("cartCount").innerText = count;
}

function showCart() {
    let cartItems = document.getElementById("cartItems");

    cartItems.innerHTML = "";

    let total = 0;

    if (cart.length === 0) {
        cartItems.innerHTML = "<p>Your cart is empty!</p>";
    }

    cart.forEach((item, index) => {
        total += item.price * item.quantity;

        cartItems.innerHTML += `
            <div class="cart-row">
                <div>
                    <strong>${item.name}</strong>
                    <p>$${item.price} × ${item.quantity}</p>
                </div>

                <div>
                    <button onclick="changeQuantity(${index}, -1)">−</button>
                    <button onclick="changeQuantity(${index}, 1)">+</button>
                    <button onclick="removeCartItem(${index})">Remove</button>
                </div>
            </div>
        `;
    });

    document.getElementById("cartTotal").innerText =
        "Total: $" + total;

    openModal("cartModal");
}

function changeQuantity(index, amount) {
    cart[index].quantity += amount;

    if (cart[index].quantity <= 0) {
        cart.splice(index, 1);
    }

    updateCartCount();
    showCart();
}

function removeCartItem(index) {
    cart.splice(index, 1);

    updateCartCount();
    showCart();
}


// 3. WISHLIST
function addToWishlist(name) {
    if (wishlist.includes(name)) {
        alert("Already added to your wishlist!");
        return;
    }

    wishlist.push(name);

    document.getElementById("wishCount").innerText =
        wishlist.length;

    alert(name + " added to wishlist!");
}

function showWishlist() {
    let wishlistItems =
        document.getElementById("wishlistItems");

    wishlistItems.innerHTML = "";

    if (wishlist.length === 0) {
        wishlistItems.innerHTML =
            "<p>Your wishlist is empty!</p>";
    }

    wishlist.forEach((name, index) => {
        wishlistItems.innerHTML += `
            <div class="wish-row">
                <span>${name}</span>
                <button onclick="removeWishlist(${index})">
                    Remove
                </button>
            </div>
        `;
    });

    openModal("wishlistModal");
}

function removeWishlist(index) {
    wishlist.splice(index, 1);

    document.getElementById("wishCount").innerText =
        wishlist.length;

    showWishlist();
}


// 4. USER ACCOUNT / LOGIN / REGISTER
function openAccount(type = "login") {
    let title = document.getElementById("accountTitle");
    let submit = document.querySelector("#accountModal .submit-btn");
    let switchText = document.querySelector(".switch-text");
    let username = document.getElementById("username");

    document.getElementById("accountMessage").innerText = "";

    if (type === "register") {
        title.innerText = "Create Account";
        username.style.display = "block";
        submit.innerText = "Register";

        switchText.innerHTML =
            'Already have an account? <a href="#" onclick="openAccount(\'login\')">Login</a>';

    } else {
        title.innerText = "Welcome Back!";
        username.style.display = "none";
        submit.innerText = "Login";

        switchText.innerHTML =
            'New user? <a href="#" onclick="openAccount(\'register\')">Create Account</a>';
    }

    document.getElementById("accountModal").dataset.mode = type;

    openModal("accountModal");
}

function loginUser() {
    let mode = document.getElementById("accountModal").dataset.mode;

    let username = document.getElementById("username").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;

    let message = document.getElementById("accountMessage");

    if (!email || !password ||
        (mode === "register" && !username)) {
        message.innerText = "Please fill in all required fields.";
        return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        message.innerText = "Please enter a valid email.";
        return;
    }

    if (password.length < 6) {
        message.innerText = "Password must contain at least 6 characters.";
        return;
    }

    if (mode === "register") {
        registeredUser = {
            name: username,
            email: email
        };

        message.innerText =
            "Registration successful! Welcome " + username + "!";

    } else {
        if (!registeredUser ||
            registeredUser.email !== email) {
            message.innerText =
                "Account not found. Please register first.";
            return;
        }

        message.innerText =
            "Login successful! Welcome " + registeredUser.name + "!";
    }

    document.getElementById("accountModal").querySelector(".submit-btn")
        .innerText = "Success";
}


// 5. CHECKOUT
function checkout() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    alert("Order placed successfully! Thank you for shopping.");

    cart = [];

    updateCartCount();
    closeModal();
}


// 6. MODAL CONTROLS
function openModal(id) {
    document.getElementById(id).style.display = "flex";
}

function closeModal() {
    document.querySelectorAll(".modal").forEach(modal => {
        modal.style.display = "none";
    });
}

// Close modal when clicking outside
window.onclick = function(event) {
    if (event.target.classList.contains("modal")) {
        closeModal();
    }
};

```
# OUTPUT

<img width="1917" height="1015" alt="Screenshot 2026-11-10 132515" src="https://github.com/user-attachments/assets/1855e4af-919a-4dd1-98a4-e40260376ca0" />

<img width="1917" height="1010" alt="Screenshot 2026-11-10 132552" src="https://github.com/user-attachments/assets/bc3280ee-15ef-478d-8386-202ebca44fb4" />

<img width="1908" height="952" alt="Screenshot 2026-11-10 132536" src="https://github.com/user-attachments/assets/fdf8d21b-2eca-407c-aae6-6679be81b4bc" />


# RESULT
The program for creating commercial website using CSS Flexbox is executed successfully.# Commercial-website
