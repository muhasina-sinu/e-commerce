import { useContext } from "react";
import ProductContext from "../context/ProductContext";
import CartProduct from "./CartProduct";

function Cart() {
  const { cartProducts } = useContext(ProductContext);
  
  return (
    
    <div className="p-3 d-flex"style={{backgroundColor:"#EAEDED",gap:"20px"}} >
      <div className="w-75" style={{backgroundColor:"white",height:"auto"}}>
        <h2 className="p-3 text-start">Shopping Cart</h2>
        <div className="d-flex flex-column" style={{gap:"20px"}}>
          {cartProducts.map((product) => {
            return <CartProduct data={product}/>
        }
          )}
        </div>
        
      </div>
      <div className="w-25 p-3 h-100" style={{backgroundColor:"white"}}>
          <a className="btn btn-warning">Proceed to buy</a>
        </div>
      
    </div>
    
  );
}

export default Cart;
