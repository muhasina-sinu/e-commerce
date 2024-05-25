import '../styles/ProductData.css';
import { NavLink, useNavigate } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import ProductContext from '../context/ProductContext';
import { FaStar } from "react-icons/fa";

function ProductData(props) {
  const product = props.product;
  const navigate = useNavigate();
  const { addToCart } = useContext(ProductContext);



  return (

    <div>

      <div className="container">
        <div className="card">
          <div className="imagediv">
            {/* <img src={product.image} className="image" /> */}
            <NavLink to={"/products/" + product.id} ><img src={product.image} className="image" /> </NavLink>
          </div>
          <div className="cardbody">
            <h5>
              <NavLink className='title' to={"/products/" + product.id} >{product.title}</NavLink></h5>
            <p>{product.category}</p>
            {/* <h5 className="rating">Rating : {product.rating.rate} ( {product.rating.count} )</h5> */}
            {product.rating && product.rating.rate > 1.5 && product.rating.rate < 2.5 && (
              <>
                <FaStar style={{ color: "#F4A340" }} />
                <FaStar style={{ color: "#F4A340" }} />

              </>

            )}
            {product.rating && product.rating.rate >= 2.5 && product.rating.rate < 3.5 && (
              <>
                <FaStar style={{ color: "#F4A340" }} />
                <FaStar style={{ color: "#F4A340" }} />
                <FaStar style={{ color: "#F4A340" }} />

              </>
            )}
            {product.rating && product.rating.rate >= 3.5 && product.rating.rate < 5 && (
              <>
                <FaStar style={{ color: "#F4A340" }} />
                <FaStar style={{ color: "#F4A340" }} />
                <FaStar style={{ color: "#F4A340" }} />
                <FaStar style={{ color: "#F4A340" }} />

              </>
            )}
            <h5>AED {product.price}</h5>
            <Link to="/cart" className="btn btn-dark" onClick={() => { addToCart(product) }}>
              Add to Cart
            </Link>
          </div>
        </div>
      </div>
    </div>

  );
}

export default ProductData;
