import { useState } from "react";

function CheckoutForm({ cart, onOrderComplete }) {
  const [form, setForm] = useState({
    name: "",
    address: "",
    pincode: "",
    phone: "",
    payment: ""
  });
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((previous) => ({ ...previous, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const nextErrors = {};

    if (!form.name.trim()) nextErrors.name = "Name is required.";
    if (!form.address.trim()) nextErrors.address = "Address is required.";
    if (!/^\d{6}$/.test(form.pincode)) nextErrors.pincode = "Enter a valid 6-digit pincode.";
    if (!/^[6-9]\d{9}$/.test(form.phone)) nextErrors.phone = "Enter a valid 10-digit phone number.";
    if (!form.payment) nextErrors.payment = "Select a payment method.";
    if (cart.length === 0) nextErrors.cart = "Your cart is empty.";

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length === 0) {
      onOrderComplete(form);
      setForm({ name: "", address: "", pincode: "", phone: "", payment: "" });
    }
  };

  return (
    <section className="checkout">
      <div className="section-title">
        <span>CHECKOUT</span>
        <h2>Complete Your Order</h2>
      </div>

      <form onSubmit={handleSubmit} className="checkout-form">
        <div className="form-group">
          <label htmlFor="name">Name *</label>
          <input id="name" name="name" value={form.name} onChange={handleChange} placeholder="Enter your name" />
          {errors.name && <small className="error">{errors.name}</small>}
        </div>

        <div className="form-group">
          <label htmlFor="address">Address *</label>
          <textarea id="address" name="address" value={form.address} onChange={handleChange} placeholder="Enter your complete address" />
          {errors.address && <small className="error">{errors.address}</small>}
        </div>

        <div className="two-column">
          <div className="form-group">
            <label htmlFor="pincode">Pincode *</label>
            <input id="pincode" name="pincode" maxLength="6" inputMode="numeric" value={form.pincode} onChange={handleChange} placeholder="6-digit pincode" />
            {errors.pincode && <small className="error">{errors.pincode}</small>}
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone *</label>
            <input id="phone" name="phone" maxLength="10" inputMode="numeric" value={form.phone} onChange={handleChange} placeholder="10-digit phone number" />
            {errors.phone && <small className="error">{errors.phone}</small>}
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="payment">Payment Method *</label>
          <select id="payment" name="payment" value={form.payment} onChange={handleChange}>
            <option value="">Select payment method</option>
            <option value="Cash on Delivery">Cash on Delivery</option>
            <option value="UPI">UPI</option>
            <option value="Card">Card</option>
          </select>
          {errors.payment && <small className="error">{errors.payment}</small>}
          {errors.cart && <small className="error">{errors.cart}</small>}
        </div>

        <button className="primary-button submit-button" type="submit">
          Place Order
        </button>
      </form>
    </section>
  );
}

export default CheckoutForm;