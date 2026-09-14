function Navbar({ cartCount, onCartClick }) {
  return (
    <header className="navbar">
      <div className="brand">🛒 Cartly</div>
      <nav>
        <a href="#home">Home</a>
        <a href="#products">Products</a>
        <button className="cart-button" onClick={onCartClick}>
          🛒 Cart <span className="badge">{cartCount}</span>
        </button>
      </nav>
    </header>
  );
}

export default Navbar;