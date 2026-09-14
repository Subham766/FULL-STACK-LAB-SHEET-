/* =====================================================
   CARTLY - PRODUCT DATABASE
   ===================================================== */

const products = [

    {
        id: 1,

        name: "iPhone 15",

        category: "Mobiles",

        price: 69999,

        image:
        "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=900&q=90",

        description:
        "The iPhone 15 combines a premium design with powerful performance, an advanced camera system and a bright display. It is suitable for everyday use, photography, entertainment and productivity.",

        specifications: [
            "Display: 6.1-inch",
            "Storage: 128 GB",
            "Camera: Advanced dual camera",
            "Connectivity: 5G",
            "Operating System: iOS"
        ]
    },


    {
        id: 2,

        name: "Samsung Galaxy S24",

        category: "Mobiles",

        price: 64999,

        image:
        "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=900&q=90",

        description:
        "Samsung Galaxy S24 provides a premium smartphone experience with a high-quality display, powerful performance and an advanced camera system.",

        specifications: [
            "Display: 6.2-inch AMOLED",
            "Storage: 256 GB",
            "Camera: Triple camera system",
            "Connectivity: 5G",
            "Operating System: Android"
        ]
    },


    {
        id: 3,

        name: "Dell XPS Laptop",

        category: "Laptops",

        price: 74999,

        image:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=900&q=90",

        description:
        "Dell XPS is a premium laptop suitable for office work, programming, studying and entertainment. Its compact design makes it convenient for everyday mobility.",

        specifications: [
            "Display: 13.4-inch",
            "Memory: 16 GB",
            "Storage: 512 GB SSD",
            "Processor: Intel Core",
            "Operating System: Windows"
        ]
    },


    {
        id: 4,

        name: "Sony WH-1000XM5",

        category: "Audio",

        price: 29999,

        image:
        "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=900&q=90",

        description:
        "Sony wireless headphones provide immersive audio with comfortable ear cushions and advanced noise cancellation.",

        specifications: [
            "Type: Wireless Headphones",
            "Noise Cancellation: Yes",
            "Connectivity: Bluetooth",
            "Microphone: Built-in",
            "Design: Over-ear"
        ]
    },


    {
        id: 5,

        name: "JBL Bluetooth Speaker",

        category: "Audio",

        price: 4999,

        image:
        "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=900&q=90",

        description:
        "JBL Bluetooth Speaker delivers powerful sound in a portable body. It is suitable for home entertainment, travel and outdoor use.",

        specifications: [
            "Type: Bluetooth Speaker",
            "Connectivity: Bluetooth",
            "Design: Portable",
            "Audio: Stereo",
            "Use: Indoor and Outdoor"
        ]
    },


    {
        id: 6,

        name: "Apple Watch",

        category: "Wearables",

        price: 42999,

        image:
        "https://images.unsplash.com/photo-1551816230-ef5deaed4a26?auto=format&fit=crop&w=900&q=90",

        description:
        "Apple Watch is a smart wearable designed for fitness tracking, notifications, time management and everyday connectivity.",

        specifications: [
            "Display: Retina",
            "Connectivity: Bluetooth",
            "Fitness Tracking: Yes",
            "Notifications: Yes",
            "Compatibility: Apple devices"
        ]
    },


    {
        id: 7,

        name: "Galaxy Watch",

        category: "Wearables",

        price: 24999,

        image:
        "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=900&q=90",

        description:
        "Galaxy Watch combines a stylish design with smart features and fitness tracking for everyday activities.",

        specifications: [
            "Display: AMOLED",
            "Connectivity: Bluetooth",
            "Fitness Tracking: Yes",
            "Water Resistance: Yes",
            "Compatibility: Android"
        ]
    },


    {
        id: 8,

        name: "Mechanical Keyboard",

        category: "Accessories",

        price: 3499,

        image:
        "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=900&q=90",

        description:
        "Mechanical Keyboard provides responsive typing and is suitable for programming, gaming, office work and everyday computer use.",

        specifications: [
            "Type: Mechanical",
            "Connection: USB",
            "Keys: Full Size",
            "Backlight: Yes",
            "Use: Gaming and Productivity"
        ]
    },


    {
        id: 9,

        name: "Wireless Mouse",

        category: "Accessories",

        price: 1299,

        image:
        "https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=900&q=90",

        description:
        "Wireless Mouse provides smooth and accurate cursor control with an ergonomic design suitable for work, study and general computer use.",

        specifications: [
            "Type: Wireless Mouse",
            "Connection: Bluetooth/Wireless",
            "Design: Ergonomic",
            "Tracking: Optical",
            "Use: Office and Home"
        ]
    }

];


/* =====================================================
   CART
   ===================================================== */

let cart =
    JSON.parse(
        localStorage.getItem("cartlyCart")
    ) || [];


/* =====================================================
   SAVE CART
   ===================================================== */

function saveCart() {

    localStorage.setItem(
        "cartlyCart",
        JSON.stringify(cart)
    );

}


/* =====================================================
   CART COUNT
   ===================================================== */

function updateCartCount() {

    const element =
        document.getElementById("cart-count");

    if (!element) return;

    const count =
        cart.reduce(
            (total, item) =>
                total + item.quantity,
            0
        );

    element.textContent = count;

}


/* =====================================================
   ADD TO CART
   ===================================================== */

function addToCart(id, quantity = 1) {

    const product =
        products.find(
            item => item.id === id
        );

    if (!product) return;


    const existing =
        cart.find(
            item => item.id === id
        );


    if (existing) {

        existing.quantity += quantity;

    } else {

        cart.push({

            id: product.id,

            name: product.name,

            price: product.price,

            image: product.image,

            quantity: quantity

        });

    }


    saveCart();

    updateCartCount();

    showNotification(
        product.name + " added to cart"
    );

}


/* =====================================================
   NOTIFICATION
   ===================================================== */

function showNotification(message) {

    const notification =
        document.createElement("div");

    notification.className =
        "notification";

    notification.textContent =
        "✓ " + message;

    document.body.appendChild(
        notification
    );

    setTimeout(
        () => notification.remove(),
        1800
    );

}


/* =====================================================
   PRODUCT CARD
   ===================================================== */

function createProductCard(product) {

    return `

        <div
            class="product-card"
            onclick="openProduct(${product.id})">


            <img
                class="product-card-image"
                src="${product.image}"
                alt="${product.name}">


            <div class="product-card-content">

                <p class="product-category">
                    ${product.category}
                </p>


                <h3>
                    ${product.name}
                </h3>


                <p class="product-price">
                    ₹${product.price.toLocaleString("en-IN")}
                </p>


                <div
                    class="product-buttons"
                    onclick="event.stopPropagation()">


                    <button
                        class="details-button"
                        onclick="openProduct(${product.id})">

                        View Details

                    </button>


                    <button
                        class="add-button"
                        onclick="addToCart(${product.id})">

                        Add to Cart

                    </button>

                </div>

            </div>

        </div>

    `;

}


/* =====================================================
   OPEN PRODUCT
   ===================================================== */

function openProduct(id) {

    window.location.href =
        "product-detail.html?id=" + id;

}


/* =====================================================
   DISPLAY PRODUCTS
   ===================================================== */

function displayProducts(list = products) {

    const container =
        document.getElementById(
            "product-list"
        );

    if (!container) return;


    if (list.length === 0) {

        container.innerHTML = `

            <div class="empty-cart">

                <h2>
                    No Products Found
                </h2>

                <p>
                    Try another search or category.
                </p>

            </div>

        `;

        return;

    }


    container.innerHTML =
        list
            .map(createProductCard)
            .join("");

}


/* =====================================================
   FEATURED PRODUCTS
   ===================================================== */

function displayFeaturedProducts() {

    const container =
        document.getElementById(
            "featured-products"
        );

    if (!container) return;


    const featured =
        products.slice(0, 4);


    container.innerHTML =
        featured
            .map(createProductCard)
            .join("");

}


/* =====================================================
   SEARCH
   ===================================================== */

function setupSearch() {

    const input =
        document.getElementById(
            "search-input"
        );

    if (!input) return;


    input.addEventListener(
        "input",
        function() {

            const search =
                this.value
                    .toLowerCase()
                    .trim();


            const filtered =
                products.filter(
                    product =>

                        product.name
                            .toLowerCase()
                            .includes(search)

                        ||

                        product.category
                            .toLowerCase()
                            .includes(search)

                );


            displayProducts(filtered);

        }
    );

}


/* =====================================================
   FILTERS
   ===================================================== */

function setupFilters() {

    const buttons =
        document.querySelectorAll(
            ".filter-btn"
        );


    buttons.forEach(button => {

        button.addEventListener(
            "click",
            function() {


                buttons.forEach(btn =>
                    btn.classList.remove(
                        "active"
                    )
                );


                this.classList.add(
                    "active"
                );


                const category =
                    this.dataset.category;


                if (category === "All") {

                    displayProducts(products);

                } else {

                    const filtered =
                        products.filter(
                            product =>
                                product.category ===
                                category
                        );

                    displayProducts(filtered);

                }

            }
        );

    });

}


/* =====================================================
   PRODUCT DETAIL
   ===================================================== */

function displayProductDetails() {

    const container =
        document.getElementById(
            "product-detail"
        );

    if (!container) return;


    const params =
        new URLSearchParams(
            window.location.search
        );


    const id =
        Number(
            params.get("id")
        );


    const product =
        products.find(
            item => item.id === id
        );


    if (!product) {

        container.innerHTML = `

            <div class="empty-cart">

                <h2>
                    Product Not Found
                </h2>

                <br>

                <a
                    href="products.html"
                    class="primary-button">

                    Back to Products

                </a>

            </div>

        `;

        return;

    }


    container.innerHTML = `

        <section class="detail-container">


            <div>

                <img
                    class="detail-image"
                    src="${product.image}"
                    alt="${product.name}">

            </div>


            <div class="detail-info">

                <p class="product-category">
                    ${product.category}
                </p>


                <h1>
                    ${product.name}
                </h1>


                <p class="detail-price">
                    ₹${product.price.toLocaleString("en-IN")}
                </p>


                <p class="detail-description">
                    ${product.description}
                </p>


                <div class="specifications">

                    <h3>
                        Product Specifications
                    </h3>

                    ${product.specifications
                        .map(
                            specification =>
                                `<p>✓ ${specification}</p>`
                        )
                        .join("")}

                </div>


                <label>
                    Quantity
                </label>


                <br>


                <input
                    id="detail-quantity"
                    class="detail-quantity"
                    type="number"
                    value="1"
                    min="1"
                    max="10">


                <button
                    class="detail-add"
                    onclick="addProductFromDetail(${product.id})">

                    Add to Cart

                </button>


                <div
                    id="detail-message">
                </div>

            </div>

        </section>

    `;

}


/* =====================================================
   ADD FROM DETAIL PAGE
   ===================================================== */

function addProductFromDetail(id) {

    const quantity =
        Number(
            document.getElementById(
                "detail-quantity"
            ).value
        );


    addToCart(
        id,
        quantity
    );


    const message =
        document.getElementById(
            "detail-message"
        );


    message.className =
        "success-message";


    message.textContent =
        "✓ Product successfully added to cart.";

}


/* =====================================================
   CART DISPLAY
   ===================================================== */

function renderCart() {

    const container =
        document.getElementById(
            "cart-container"
        );

    if (!container) return;


    if (cart.length === 0) {

        container.innerHTML = `

            <div class="empty-cart">

                <h2>
                    Your Cart is Empty 🛒
                </h2>

                <p>
                    Add products to your cart.
                </p>

                <br>

                <a
                    href="products.html"
                    class="primary-button">

                    Start Shopping

                </a>

            </div>

        `;

        updateCartSummary();

        return;

    }


    container.innerHTML = `

        <div class="cart-table-wrapper">

            <table class="cart-table">

                <thead>

                    <tr>

                        <th>Product</th>

                        <th>Price</th>

                        <th>Quantity</th>

                        <th>Subtotal</th>

                        <th>Action</th>

                    </tr>

                </thead>


                <tbody>

                    ${cart.map(item => `

                        <tr>

                            <td>

                                <div class="cart-product">

                                    <img
                                        src="${item.image}"
                                        alt="${item.name}">

                                    <strong>
                                        ${item.name}
                                    </strong>

                                </div>

                            </td>


                            <td>
                                ₹${item.price.toLocaleString("en-IN")}
                            </td>


                            <td>

                                <input
                                    class="quantity-input"
                                    type="number"
                                    min="1"
                                    value="${item.quantity}"
                                    onchange="changeQuantity(${item.id}, this.value)">

                            </td>


                            <td>
                                ₹${(
                                    item.price *
                                    item.quantity
                                ).toLocaleString("en-IN")}
                            </td>


                            <td>

                                <button
                                    class="remove-button"
                                    onclick="removeFromCart(${item.id})">

                                    Remove

                                </button>

                            </td>

                        </tr>

                    `).join("")}

                </tbody>

            </table>

        </div>

    `;


    updateCartSummary();

}


/* =====================================================
   CHANGE QUANTITY
   ===================================================== */

function changeQuantity(id, quantity) {

    quantity =
        Number(quantity);


    if (quantity < 1) {

        quantity = 1;

    }


    const item =
        cart.find(
            product =>
                product.id === id
        );


    if (item) {

        item.quantity =
            quantity;

    }


    saveCart();

    renderCart();

    updateCartCount();

}


/* =====================================================
   REMOVE FROM CART
   ===================================================== */

function removeFromCart(id) {

    cart =
        cart.filter(
            item =>
                item.id !== id
        );


    saveCart();

    renderCart();

    updateCartCount();

}


/* =====================================================
   TOTAL
   ===================================================== */

function calculateTotal() {

    return cart.reduce(
        (total, item) =>

            total +
            item.price *
            item.quantity,

        0
    );

}


/* =====================================================
   CART SUMMARY
   ===================================================== */

function updateCartSummary() {

    const total =
        document.getElementById(
            "grand-total"
        );


    const items =
        document.getElementById(
            "total-items"
        );


    if (total) {

        total.textContent =
            calculateTotal()
                .toLocaleString("en-IN");

    }


    if (items) {

        items.textContent =
            cart.reduce(
                (sum, item) =>
                    sum + item.quantity,
                0
            );

    }

}


/* =====================================================
   CHECKOUT
   ===================================================== */

function setupCheckout() {

    const form =
        document.getElementById(
            "checkout-form"
        );

    if (!form) return;


    form.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            const name =
                document.getElementById(
                    "name"
                ).value.trim();


            const email =
                document.getElementById(
                    "email"
                ).value.trim();


            const address =
                document.getElementById(
                    "address"
                ).value.trim();


            const city =
                document.getElementById(
                    "city"
                ).value.trim();


            const pincode =
                document.getElementById(
                    "pincode"
                ).value.trim();


            const payment =
                document.querySelector(
                    'input[name="payment"]:checked'
                );


            let valid = true;


            document
                .querySelectorAll(".error")
                .forEach(
                    element =>
                        element.textContent = ""
                );


            if (!name) {

                document.getElementById(
                    "name-error"
                ).textContent =
                    "Please enter your name.";

                valid = false;

            }


            if (
                !email ||
                !email.includes("@")
            ) {

                document.getElementById(
                    "email-error"
                ).textContent =
                    "Please enter a valid email.";

                valid = false;

            }


            if (!address) {

                document.getElementById(
                    "address-error"
                ).textContent =
                    "Please enter your address.";

                valid = false;

            }


            if (!city) {

                document.getElementById(
                    "city-error"
                ).textContent =
                    "Please enter your city.";

                valid = false;

            }


            if (!/^\d{6}$/.test(pincode)) {

                document.getElementById(
                    "pincode-error"
                ).textContent =
                    "Please enter a valid 6-digit pincode.";

                valid = false;

            }


            if (!payment) {

                document.getElementById(
                    "payment-error"
                ).textContent =
                    "Please select a payment method.";

                valid = false;

            }


            if (!valid) return;


            if (cart.length === 0) {

                alert(
                    "Your cart is empty."
                );

                return;

            }


            const orderNumber =
                "CTL" +
                Math.floor(
                    100000 +
                    Math.random() *
                    900000
                );


            const total =
                calculateTotal();


            document.getElementById(
                "confirmation"
            ).innerHTML = `

                <div class="success-message">

                    <h2>
                        🎉 Order Confirmed!
                    </h2>

                    <p>
                        Thank you,
                        <strong>${name}</strong>.
                    </p>

                    <p>
                        Order Number:
                        <strong>#${orderNumber}</strong>
                    </p>

                    <p>
                        Order Total:
                        <strong>
                            ₹${total.toLocaleString("en-IN")}
                        </strong>
                    </p>

                </div>

            `;


            cart = [];

            localStorage.removeItem(
                "cartlyCart"
            );


            updateCartCount();

            form.reset();

        }
    );

}


/* =====================================================
   START WEBSITE
   ===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        updateCartCount();

        displayProducts();

        displayFeaturedProducts();

        setupSearch();

        setupFilters();

        displayProductDetails();

        renderCart();

        setupCheckout();

    }
);