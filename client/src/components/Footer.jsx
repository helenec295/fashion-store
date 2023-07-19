import React from 'react'
import PaymentOptions from '../images/payment2.jpg'
import './Footer.scss'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="top">
        <div className="item">
          <h3>Categories</h3>
          <span>Dinner Time</span>
          <span>Accessories</span>
          <span>Lounging</span>
        </div>
        <div className="item">
          <h3>Useful Links</h3>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h3>About</h3>
          <span>
            Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
            </span>
        </div>
        <div className="item">
         <h3>Contact</h3>
          <span>
            Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
            </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">OGGY</span>
          <span className="copyright">© 2023 Helen Evenchen</span>
        </div>
        <div className="right">
          <img src={PaymentOptions} alt='' />
        </div>
      </div>

    </div>
  )
}

export default Footer