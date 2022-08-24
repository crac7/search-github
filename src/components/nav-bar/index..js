import React from 'react';
import { useLocation } from "react-router-dom";
import Search from '../search';
const NavBar = () => {
    //assigning location variable
    const location = useLocation();

    //destructuring pathname from location
    const { pathname } = location;

    //Javascript split method to get the name of the path in array
    const splitLocation = pathname.split("/");
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className={`nav-link${splitLocation[1] === 'user' ? ' active' : ''}`} href="user">User</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link${splitLocation[1] === 'respositories' ? ' active' : ''}`} href="respositories">Respositories</a>
                        </li>
                    </ul>
                </div>
                <Search />
            </div>
        </nav>
    )
}

export default NavBar;