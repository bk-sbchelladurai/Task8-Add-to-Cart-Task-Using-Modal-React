function CartModal ({cart, handleRemoveFromCart, handleCloseModal}) {      
  if (cart.length===0) {
    return (
      <div className="cart-modal">
        <div className="close-button">
          <button onClick={handleCloseModal}>Close <span className="material-symbols-outlined">close</span></button>
        </div>
        <div className="noCart-details">
          <h2>Cart List:</h2>
          <p>No item in the cart</p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="cart-modal">
        <div className="close-button">
          <button onClick={handleCloseModal}>Close <span className="material-symbols-outlined">close</span></button>
        </div>
        <div className="cart-details">
          <h2>Cart List:</h2>
          <ul>
            {cart.map((product) => (
              <li className="cart-item" key={product.id}>
                <div className="cart-item-details">
                  <img src={product.image} alt={product.title} />
                  <h2>{product.title}</h2>
                </div>
                <div className="cart-item-price-remove-button">
                  <p>Price: ₹ {product.price*50}</p>
                  <button onClick={() => handleRemoveFromCart(product)}>Remove from Cart</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default CartModal;