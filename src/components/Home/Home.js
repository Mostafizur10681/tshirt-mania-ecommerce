import React, { useState } from 'react';
import useTShirt from '../../hook/useTShirt';
import TShirts from '../TShirts/TShirts';
import './Home.css'
import '../Cart/Cart'
import Cart from '../Cart/Cart';

const Home = () => {
    const [tShirts, setTShirts] = useTShirt()

    const [cart, setCart] = useState([]);

    const handleAddToCart = (selectedItem) => {
        const exists = cart.find(tShirt => tShirt._id === selectedItem._id);
        if (!exists) {
            const newCart = [...cart, selectedItem]
            setCart(newCart)
        }
        else {
            alert('Item Already Added!!');
        }

    }

    const handleRemove = (selectedItem) => {
        const rest = cart.filter(tShirt => tShirt._id !== selectedItem._id);
        setCart(rest)
    }
    return (
        <div className='home-container'>
            <div className="tshirts-container">
                {
                    tShirts.map(tShirt => <TShirts
                        key={tShirt._id}
                        tShirt={tShirt}
                        handleAddToCart={handleAddToCart}
                    ></TShirts>)
                }
            </div>
            <div className="cart-container">
                <Cart
                    cart={cart}
                    handleRemove={handleRemove}
                ></Cart>
            </div>
        </div>
    );
};

export default Home;