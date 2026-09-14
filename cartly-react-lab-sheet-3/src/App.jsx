import { useState } from "react";
import products from "./products";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import CheckoutForm from "./components/CheckoutForm";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [orderMessage, setOrderMessage] = useState("");

  const addToCart = (product) => {
    setCart((previousCart) => {
      const existing = previousCart.find((item) => item.product.id === product.id);

      if (existing) {
        return previousCart.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...previousCart, { product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCart((previousCart) =>
      previousCart.filter((item) => item.product.id !== productId)
    );
  };

  const updateQuantity = (productId, quantity) => {
    if (!Number.isFinite(quantity) || quantity < 1) return;

    setCart((previousCart) =>
      previousCart.map((item) =>
        item.product.id === productId
          ? { ...item, quantity }
          : item
      )
    );
  };

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const handleOrderComplete = (form) => {
    const orderNumber = `CTL${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderMessage(
      `Order #${orderNumber} confirmed for ${form.name}. Payment: ${form.payment}.`
    );
    setCart([]);
    setShowCart(false);
  };

  return (
    <div>
      <Navbar
        cartCount={cartCount}
        onCartClick={() => setShowCart((value) => !value)}
      />

      <main>
        <section className="hero" id="home">
          <div>
            <span className="eyebrow">WELCOME TO CARTLY</span>
            <h1>Everything You Need, <span>In One Place.</span></h1>
            <p>
              A React-powered mini e-commerce store with reusable components,
              props, state management and a controlled checkout form.
            </p>
            <a className="primary-button" href="#products">Shop Products</a>
          </div>
          <img
            src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1100&q=85"
            alt="Cartly online shopping"
          />
        </section>

        <section className="section" id="products">
          <div className="section-title">
            <span>CARTLY COLLECTION</span>
            <h2>All Products</h2>
            <p>Click View Details for complete product information.</p>
          </div>

          <ProductList
            addToCart={addToCart}
            onDetails={setSelectedProduct}
          />
        </section>

        {selectedProduct && (
          <div className="modal-backdrop" onClick={() => setSelectedProduct(null)}>
            <div className="product-modal" onClick={(event) => event.stopPropagation()}>
              <button className="close-button" onClick={() => setSelectedProduct(null)}>×</button>
              <img src={selectedProduct.image} alt={selectedProduct.name} />
              <div>
                <span className="category">{selectedProduct.category}</span>
                <h2>{selectedProduct.name}</h2>
                <p className="modal-price">₹{selectedProduct.price.toLocaleString("en-IN")}</p>
                <p>{selectedProduct.description}</p>
                <h3>Specifications</h3>
                <ul>
                  {selectedProduct.specifications.map((specification) => (
                    <li key={specification}>{specification}</li>
                  ))}
                </ul>
                <button
                  className="primary-button"
                  onClick={() => {
                    addToCart(selectedProduct);
                    setSelectedProduct(null);
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        )}

        {showCart && (
          <section className="section cart-section">
            <div className="section-title">
              <span>YOUR CART</span>
              <h2>Shopping Cart</h2>
            </div>
            <Cart
              cart={cart}
              removeFromCart={removeFromCart}
              updateQuantity={updateQuantity}
            />
          </section>
        )}

        <CheckoutForm
          cart={cart}
          onOrderComplete={handleOrderComplete}
        />

        {orderMessage && (
          <div className="order-success">
            <strong>🎉 {orderMessage}</strong>
          </div>
        )}
      </main>

      <footer>
        <strong>🛒 Cartly</strong>
        <span>React Mini E-Commerce Project • 2026</span>
      </footer>
    </div>
  );
}

export default App;