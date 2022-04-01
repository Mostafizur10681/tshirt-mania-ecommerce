import React from 'react';
import './TShirts.css'

const TShirts = (props) => {
    const { handleAddToCart, tShirt } = props
    const { picture, name, price } = tShirt
    return (
        <div className='t-shirt'>
            <img src={picture} alt="" />
            <h4>{name}</h4>
            <p>Price: ${price}</p>
            <button onClick={() => handleAddToCart(tShirt)} className='add-to-cart-button'>Add to cart</button>
        </div>
    );
};

export default TShirts;