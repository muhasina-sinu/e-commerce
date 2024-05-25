function CartProduct(props) {
    const prod = props.data;
    console.log(prod);
    return ( 
        <>
        <hr className="mt-0"></hr>
        <div className="ms-3 pe-3 d-flex justify-content-between" style={{height:"150px",gap:"10px"}}>
            <div style={{backgroundColor:"#f7f7f7",width:"25%"}}> 
            <img src={prod.image} class="card-img-top p-2"style={{width:"90%",height:"90%",objectFit:"contain"}} alt="..."/>
            </div>  
            <h5 className="card-title fw-bolder text-start" style={{width:"60%"}}>{prod.title}</h5>
            <h6 className="fw-bolder text-danger" style={{width:"15%"}}> AED {prod.price}</h6>
        </div>
        
        
        </>
     );
}

export default CartProduct;