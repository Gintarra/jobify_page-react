import React from 'react';
import {Link} from "react-router-dom";

const NavBar = () => {
    return (
        <div className="navBar d-flex space-ev align-center">
            <Link to="/">
                <img className="logo" src="https://pngimage.net/wp-content/uploads/2018/06/jobs-logo-png-7.png" alt=""/>
            </Link>
            <Link to="/jobs-list" style={{color: "black", textDecoration: "none"}}>Find a Job</Link>
            <Link to="/post-a-job" style={{color: "black", textDecoration: "none"}}>Post a Job</Link>
        </div>
    );
};

export default NavBar;