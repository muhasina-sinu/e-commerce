import { useEffect, useState,useContext } from "react";
import { useParams,useNavigate,Link } from "react-router-dom";
import ProductContext from "../context/ProductContext";
import styles from '../styles/ProductDetail.module.css';
import { FaStar } from "react-icons/fa";

function ProductDetail() {
    const params = useParams();
    const id = params.productId;
    const {addToCart} = useContext(ProductContext);
    const navigate = useNavigate();
    const [product, setProduct] = useState({});
    
    

    function loadProductsById() {
        fetch('https://fakestoreapi.com/products/' + id ).then(response => {
            response.json().then(data => {
                setProduct(data);
            }).catch(error => {
                console.log(error);
            })
        }).catch(error => {
            console.log(error);
        })
    }
    console.log(product);
    useEffect(() => {
        loadProductsById();
    }, [])
    return (
        <>
            <div className={styles.container}>
                <img src={product.image}></img>
                <div style={{textAlign:"left"}}>
                    <h3>{product.title}</h3>
                    <h5>{product.category}</h5>
                    {/* {product.rating &&  <h5 className={styles.rating}> Rating : {product.rating.rate} ( {product.rating.count} )</h5> } */}
                    
                    {product.rating && product.rating.rate > 1.5 && product.rating.rate < 2.5 && (
                        <>
                            <FaStar style={{ color: "#F4A340" }} />
                            <FaStar style={{ color: "#F4A340" }} />
                             
                        </>
                        
                    ) }
                    {product.rating && product.rating.rate >= 2.5 && product.rating.rate < 3.5 &&(
                        <>
                            <FaStar style={{ color: "#F4A340" }} />
                            <FaStar style={{ color: "#F4A340" }} />
                            <FaStar style={{ color: "#F4A340" }} />
                             
                        </>
                    )}
                    {product.rating && product.rating.rate >= 3.5 && product.rating.rate < 5 &&(
                        <>
                            <FaStar style={{ color: "#F4A340" }} />
                            <FaStar style={{ color: "#F4A340" }} />
                            <FaStar style={{ color: "#F4A340" }} />
                            <FaStar style={{ color: "#F4A340" }} />
                             
                        </>
                    )}
                    <hr/>
                    <h5>AED {product.price}</h5>
                    <p>All prices include VAT.</p>
                    <hr/>
                    <h4>About this item</h4>
                    <p>{product.description}</p>
                    <br/>
                    <Link to="/cart" className="btn btn-warning m-2" onClick={() => {addToCart(product)}}>
                         Add to Cart
                    </Link>
                    <a href="#" className="btn btn-warning m-2" onClick={()=>{navigate(-1);} }>Back to products</a>

                </div>
                
            </div>


        </>
    );
}

export default ProductDetail;