import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css'

const Header = () => {
    return (
        <div>
            <h1 className='header-title'>Welcome to Our Tshirt Mania Website!!!</h1>

            <div className='manubar-container'>
                <div >
                    <Link className='menu-name' to='/'>Tshirt Mania</Link>
                </div>
                <nav className='menu-item'>
                    <CustomLink className='menu-item-link' to='/'>Home</CustomLink>
                    <CustomLink className='menu-item-link' to='/order'>Order</CustomLink>
                    <CustomLink className='menu-item-link' to='/review'>Review</CustomLink>
                </nav>
            </div>
        </div>
    );
};

export default Header;