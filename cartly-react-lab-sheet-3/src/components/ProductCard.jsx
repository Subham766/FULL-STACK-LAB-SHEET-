function ProductCard({ product, addToCart, onDetails }) {
  return (
    <article className="product-card">
      <img src={product.image} alt={product.name} />
      <div className="product-content">
        <span className="category">{product.category}</span>
        <h3>{product.name}</h3>
        <p className="price">₹{product.price.toLocaleString("en-IN")}</p>
        <div className="card-actions">
          <button className="secondary-button" onClick={() => onDetails(product)}>
            View Details
          </button>
          <button className="primary-button" onClick={() => addToCart(product)}>
            Add to Cart
          </button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;