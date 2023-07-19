import React from 'react'
import './Card.scss'
import {Link} from 'react-router-dom' 

const Card = ({item}) => {
  return (
    <Link className='link' to={`/product/${item.id}`} >
        <div className='card'>
            <div className="image">
                {item.attributes.isNew && <span>New Season</span> }
                <img 
                  src={
                    process.env.REACT_APP_UPLOAD_URL + item.attributes?.img?.data?.attributes?.url
                  } 
                  alt='' 
                  className='main-img' 
                />
                <img 
                src={
                  process.env.REACT_APP_UPLOAD_URL + item.attributes?.img2?.data?.attributes?.url
                } 
                alt='' 
                className='second-img' 
                />
            </div>
            <h3>{item.attributes.title}</h3>
            <div className="prices">
                <h4>${item.attributes.oldPrice || item.attributes.price + 20}</h4>
                <h4>${item.attributes.price}</h4>
            </div>
        </div>
    </Link>
  )
}

export default Card