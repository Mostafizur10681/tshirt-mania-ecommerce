import React from 'react';
import './Cart.css'

const Cart = ({ cart, handleRemove }) => {

    // 4 way to redering condition
    // 1. Element Variable
    // 2. ternary operation condition
    // 3.&& operartor (shorthand)
    // 4. || operator
    let command;

    if (cart.length === 0) {
        command = <p>Please Add at least One item!!</p>
    }
    else if (cart.length === 1) {
        command = <p>Please add more item..</p>
    }
    else {
        command = <p>Thanks for adding item</p>
    }
    return (
        <div className='selected'>
            <h1>Selected Item: {cart.length}</h1>
            <div className='orange'>{command}</div>
            {cart.length === 0 || <p>YaY!! you are buying</p>}
            {
                cart.map(TShirt => <h5>{TShirt.name}
                    <button onClick={() => handleRemove(TShirt)} className='x-button'> X </button>

                </h5>)
            }
            {cart.length !== 4 ? <p>Keep Adding..</p> : <button className='remove-button'>Remove All</button>}
            {cart.length === 5 && <div>
                <h5>Thanks for buying..You are great!!</h5>
            </div>}

        </div>
    );
};

export default Cart;