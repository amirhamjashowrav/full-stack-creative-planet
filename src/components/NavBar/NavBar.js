import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/icons/Logo.png';


const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid" >
                    <Link to="/home">
                        <img className="me-5 ms-5" style={{ width: "180px" }} src={logo} alt='logo' />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item li-item me-5 fw-bolder">
                                <Link style={{ textDecoration: 'none', color: 'black' }} to="/home">Home</Link>
                            </li>
                            <li className="nav-item li-item me-5 fw-bolder">
                                <Link style={{ textDecoration: 'none', color: 'black' }} to="/orders">Orders</Link>
                            </li>
                            <li className="nav-item li-item me-5 fw-bolder">
                                <Link style={{ textDecoration: 'none', color: 'black' }} to="/admin">Admin</Link>
                            </li>
                            <li className="nav-item li-item me-5 fw-bolder">
                                <Link style={{ textDecoration: 'none', color: 'black' }} to="/deals">Deals</Link>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <Link to="/login"><button className="btn btn-primary me-5" type="submit">Log in</button></Link>
                        </form>
                    </div>
                </div>
        </nav>
    );
};

export default Header;