import React, { useContext } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { logoutCall } from '../apiCalls';

export default function Navbar() {
    const { user, dispatch } = useContext(AuthContext);

    const handleLogout = (e) => {
        e.preventDefault();
        logoutCall(dispatch)
    };

    return (
        <nav className='navbar'>
            <div className="navContainer">
                <Link to='/'>
                    <div className='logoContainer'>
                        <img src="./images/logo_whites.png" alt="" />
                    </div>
                </Link>
                <h1>Binix Waste Management</h1>
                <div className='linksContainer'>
                    {user ? (
                        <>
                            <Link to='/admin' style={{ textDecoration: "none", color: "white", marginRight: "1rem" }}>
                                <span className='navItem'>Dashboard</span>
                            </Link>
                            <span className='navItem' onClick={handleLogout}>Logout</span>
                        </>
                    ) : (
                        <Link to='/login' style={{ textDecoration: "none", color: "white" }}>
                            <span className='navItem'>Login</span>
                        </Link>)}
                </div>
            </div>
        </nav>
    )
}
