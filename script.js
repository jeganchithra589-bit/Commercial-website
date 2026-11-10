
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
