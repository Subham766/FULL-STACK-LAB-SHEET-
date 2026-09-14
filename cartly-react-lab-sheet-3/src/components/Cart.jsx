function Cart({ cart, removeFromCart, updateQuantity }) {
  if (cart.length === 0) {
    return (
      <div className="empty-cart">
        <div className="empty-icon">🛒</div>
        <h2>Your cart is empty</h2>
        <p>Add a product to your cart to see it here.</p>
      </div>
    );
  }

  const grandTotal = cart.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  return (
    <section className="cart-panel">
      <div className="cart-list">
        {cart.map((item) => (
          <div className="cart-item" key={item.product.id}>
            <img src={item.product.image} alt={item.product.name} />
            <div className="cart-item-info">
              <h3>{item.product.name}</h3>
              <p>₹{item.product.price.toLocaleString("en-IN")} each</p>
              <div className="quantity-row">
                <label>
                  Quantity:
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) =>
                      updateQuantity(item.product.id, Number(e.target.value))
                    }
                  />
                </label>
                <strong>
                  Subtotal: ₹{(item.product.price * item.quantity).toLocaleString("en-IN")}
                </strong>
              </div>
            </div>
            <button className="remove-button" onClick={() => removeFromCart(item.product.id)}>
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="cart-total">
        <span>Grand Total</span>
        <strong>₹{grandTotal.toLocaleString("en-IN")}</strong>
      </div>
    </section>
  );
}

export default Cart;