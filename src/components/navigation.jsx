import React from 'react'
import image from '../images/logo.png'

const Navigation = () =>{
    return (
        <nav className="navbar navbar-inverse">
            <div className="container-fluid mx-8">
                <div className="navbar-header">
                    <a href="/#" className="navbar-brand text-light fw-bold fs-4">
                    <img src={image} alt="logo" />Kigali
                    </a>
                </div>
                
            <ul className="nav justify-content-end fs-5">
                <li className="nav-item">
                    <a className='nav-link text-uppercase -p-8 text-light fw-bold bg-danger' href="/#">Home</a>
                </li>
                <li className="nav-item">
                    <a className='nav-link text-uppercase -p-8 text-light' href="/#">How it works</a>
                </li>
                <li className="nav-item">
                    <a className='nav-link text-uppercase -p-8 text-light' href="/#">Listings</a>
                </li>
                <li className="nav-item">
                    <a className='nav-link text-uppercase -p-8 text-light' href="/#">Listings</a>
                </li>
            </ul>
            </div>
        </nav>
    )
}

export default Navigation