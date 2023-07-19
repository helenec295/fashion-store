import React from 'react'
import './FeaturedProducts.scss'
import Card from './Card'
import useFetch from '../hooks/useFetch'

const FeaturedProducts = ({type}) => {

   const { data, loading, error } = useFetch(`/products?populate=*&[filters][type][$eq]=${type}`);

   


  return (
    <div className='featured-products'>
        <div className="top">
            <h2>{type} products </h2>
            <p>
                Lorem ipsum is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements over content. It's also called placeholder (or filler) text. It's a convenient tool for mock-ups. It helps to outline the visual elements of a document or presentation, eg typography, font, or layout. Lorem ipsum is mostly a part of a Latin text by the classical author and philosopher Cicero.
            </p>
        </div>
        <div className="bottom">
            {error 
                ? 'Something went wrong' 
                : (loading 
                     ? 'loading' 
                     : data.map(item=>(
                        <Card item={item} key={item.id} />
            )))}
        </div>
    </div>
  )
}

export default FeaturedProducts