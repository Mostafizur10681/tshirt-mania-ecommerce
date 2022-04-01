import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div>
            <h1>welcome to Our Tshirt Mania Website</h1>

            <nav>
                <CustomLink to='/'>Home</CustomLink>
                <CustomLink to='/order'>Order</CustomLink>
                <CustomLink to='/review'>Review</CustomLink>
            </nav>
        </div>
    );
};

export default Header;