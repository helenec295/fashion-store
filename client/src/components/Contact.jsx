import React from 'react'
import './Contact.scss'
import { FaFacebook, FaInstagram, FaTwitter, FaPinterest } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className='contact'>
        <div className="wrapper">
            <span>Keep in touch</span>
            <div className="email">
                <input type ='text' placeholder='enter your email' />
                <button>JOIN US</button>
            </div>
            <div className="icons">
                <FaFacebook />
                <FaInstagram />
                <FaTwitter />
                <FaPinterest />
            </div>


        </div>
        

    </div>
  )
}

export default Contact