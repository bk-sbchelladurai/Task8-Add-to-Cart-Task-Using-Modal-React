function Navbar({cartCount, handleCartClick}) {
  return (
    <div className="header">
      <h2>...Welcome to online shopping...</h2>
      <nav className="navbar">
        <button onClick={handleCartClick}><span className="material-symbols-outlined">shopping_cart</span> Cart {cartCount}</button>
      </nav>
    </div>
  )
}

export default Navbar;