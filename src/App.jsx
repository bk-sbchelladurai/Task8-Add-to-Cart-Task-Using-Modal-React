import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import ProductList from './components/ProductList'
import CartModal from './components/CartModal'
import './App.css'

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response)=> response.json())
      .then((data)=>{
        setProducts(data);
      })
      .catch((error)=>{
        console.error(error);
      })
  }, []);

  function handleAddToCart(product) {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      alert('Item already added to the cart');
    } else {
    setCart([...cart, product]);
    setCartCount(cartCount+1);
    }
  };

  function handleRemoveFromCart(product){
    setCart(cart.filter((item) => item.id !== product.id));
    setCartCount(cartCount-1);
  };

  const handleCartClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <Navbar cartCount={cartCount} handleCartClick={handleCartClick} />
      <ProductList products={products} handleAddToCart={handleAddToCart} />
      {modalOpen && (
        <CartModal 
        cart={cart} 
        handleRemoveFromCart={handleRemoveFromCart} 
        handleCloseModal={handleCloseModal} 
        />
      )}
    </div>
  );
}

export default App;