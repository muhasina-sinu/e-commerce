import { useState,useEffect } from "react";
import ProductData from "./ProductData";


function ProductList(props) {
    const searchtext = props.searchtext;
    const [productlist,setProductList] = useState([]);
    
    console.log(searchtext);
    function loadProducts(){
        fetch('https://fakestoreapi.com/products').then(response => {
            response.json().then(data => {
            setProductList(data);
            })
        })
    }
    
    useEffect( () => {
        loadProducts();
    },[searchtext])

    const filtered = productlist.filter( p => {
        
        return p.title.toLowerCase().includes(searchtext.toLowerCase())||
        p.category.toLowerCase().includes(searchtext.toLowerCase());
        
    })
    return ( <>
        
        <div style={{display:"flex",flexWrap:"wrap",justifyContent:"center"}}>
       {
       
        filtered.map(x => {
            return <ProductData product = {x}/>
        })
       }
       </div>
      
        
    
    </> );
}

export default ProductList;