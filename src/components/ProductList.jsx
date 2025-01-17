function ProductList({products, handleAddToCart}) {
  return (
    <div className="product-list">
        {products.map((product)=> (
          <div className="product" key={product.id}>
            <div className="product-image">
              <img src={product.image} alt={product.title} />
            </div>
            <div className="product-details">
              <div className="product-title">
                <h2>{product.title}</h2>
              </div>
              <div>
                <p>Price: ₹ {product.price*50}</p>
                <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default ProductList;

