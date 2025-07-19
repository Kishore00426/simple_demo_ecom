function ProductCard({ product }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', margin: '0.5rem' }}>
      
      <h4>{product.name}</h4>
      <p>₹{product.price}</p>
      <button>Add to Cart</button>
    </div>
  );
}

export default ProductCard;