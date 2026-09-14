import products from "../products";
import ProductCard from "./ProductCard";

function ProductList({ addToCart, onDetails }) {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          addToCart={addToCart}
          onDetails={onDetails}
        />
      ))}
    </div>
  );
}

export default ProductList;