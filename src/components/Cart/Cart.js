import React from 'react';
import './Cart.css'

const Cart = ({ cart, handleRemove }) => {
    return (
        <div className='selected'>
            <h1>Selected Item: {cart.length}</h1>
            <div>
                {
                    cart.map(TShirt => <h5>{TShirt.name}
                        <button onClick={() => handleRemove(TShirt)} className='x-button'> X </button>

                    </h5>)
                }
            </div>

        </div>
    );
};

export default Cart;