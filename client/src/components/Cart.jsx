import React from 'react'
import './Cart.scss'
import Product1 from '../images/cat14.jpg'
import Product2 from '../images/cat8.jpg'
import { RiDeleteBin2Line } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, resetCart } from "../redux/cartReducer";

import { makeRequest } from "../axios";
import { loadStripe } from "@stripe/stripe-js";


const Cart = () => {

    const products = useSelector(state => state.cart.products);
    const dispatch = useDispatch();

    const totalPrice = () => {
        let total = 0;
        products.forEach(item => 
            total += item.quantity * item.price)
        return total.toFixed(2);
    }

    const stripePromise = loadStripe('pk_live_KSxrVgAE9kDan5f5BbGmqYXD');

    const handlePayment = async () => {
        try {
          const stripe = await stripePromise;
          const response = await makeRequest.post("/orders", {
            products,
          });
          await stripe.redirectToCheckout({
            sessionId: response.data.stripeSession.id,
          });
    
        } catch (err) {
          console.log(err);
        }
      };

  return (
    <div className='cart'>
        <h1>Products in your cart</h1>
        {products?.map(item=>(
            <div className="item" key={item.id} >
                <img src={process.env.REACT_APP_UPLOAD_URL + item.img} alt="" />
                <div className="details">
                    <h2>{item.title}</h2>
                    <p>{item.desc?.substring(0,50)}</p>
                    <div className="price">
                        {item.quantity} X ${item.price}
                    </div>
                </div>
                <RiDeleteBin2Line 
                    className='delete' 
                    onClick={() => dispatch(removeItem(item.id))}    
                />
            </div>
        ))}
        <div className="total">
            <span>SUBTOTAL</span>
            <span>${totalPrice()}</span>
        </div>
        <button
            onClick={handlePayment}
        >
            PROCEED TO CHECKOUT
        </button>
        <span 
            className='reset'
            onClick={() => dispatch(resetCart())}
        >
        Reset Cart
        </span>
       
    </div>
  )
}

export default Cart