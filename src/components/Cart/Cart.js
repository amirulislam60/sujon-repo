import React from 'react';
import './Cart.css';
const Cart = (props) => {
    const { cart } = props;

    let total = 0;
    let Shipping = 0;
    for (const product of cart) {
        total = total + product.price;
        Shipping = Shipping + product.shipping;
    }

    const tax = parseFloat((total * 0.1).toFixed(2));
    const grandTotal = total + Shipping + tax;

    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <p>Selected Items: {cart.length}</p>
            <p>Tatol price:${total}</p>
            <p>Total Shipping:${Shipping}</p>
            <p>Tax:${tax}</p>
            <h5>Grand Total:${grandTotal.toFixed(2)}</h5>
        </div>
    );
};

export default Cart;