
import './App.css';
import { Route,Routes } from 'react-router-dom';
import { useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Cart from './components/Cart';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import ProductContext from './context/ProductContext';

function App() {
  const [searchtext, updateSearch] = useState('');
  const [cartProducts, setCartProducts] = useState([]);
  
  function onSearch(text){
    updateSearch(text);
  }
  function addToCart(product){
    setCartProducts([...cartProducts, product]);
    

  }
  
  return (
    <div className="App">
      <ProductContext.Provider value={{cartProducts,addToCart,onSearch}}>
        <Header onSearch={onSearch}/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/products' element={<ProductList searchtext={searchtext}/>}></Route>
          <Route path='products/:productId' element={<ProductDetail />}></Route>
          <Route path='/cart' element={<Cart/>}></Route>
        </Routes>
      </ProductContext.Provider>
      
    </div>
  );
}

export default App;
