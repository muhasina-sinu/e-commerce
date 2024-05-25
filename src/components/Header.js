import styles from '../styles/Header.css';
import { BsSearch } from 'react-icons/bs';
import {NavLink} from 'react-router-dom';
import ProductContext from '../context/ProductContext';
import { useContext } from 'react';


function Header() {
    const { onSearch } = useContext(ProductContext);
    // function onSearch($value){
    //    props.onSearch($value.target.value);
    // }
    function Search($value){
           onSearch($value.target.value);
        }

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
                <div className="container-fluid d-flex">
                    <NavLink className="navbar-brand" to="/">
                        ShopKart
                    </NavLink>
                    <form className="d-inline-flex" role="search" style={{gap:"0px"}}>
                        <input
                            className="form-control me-2 search"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                            onChange={Search}
                            
                        />
                        <button className="btn btn-outline-secondary bg-warning" type="submit">
                            <BsSearch /> 
                        </button>
                    </form>
                    <ul className="navbar-nav mb-2 mb-lg-0  ">
                        <li className="nav-item ">
                            <NavLink className="nav-link active" aria-current="page" to="/">
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/products">
                                Products
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">
                                About us
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contact">
                                Contact Us
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/cart">
                                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="30" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                                </svg>
                            </NavLink>
                        </li>
                        

                    </ul>
                    

                </div>
            </nav>
        </>
    );
}

export default Header;
