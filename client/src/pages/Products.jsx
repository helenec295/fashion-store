import React, { useState } from 'react'
import './Products.scss'
import Header from '../images/fashion3.jpg'
import List from '../components/List'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'

const Products = () => {
  
  const catId = parseInt(useParams().id);

  const [maxPrice, setMaxPrice] = useState(1000);

  const [sort, setSort] = useState(null);

  const [selectSub, setSelectSub] = useState([]);

  const { data, loading, error } = useFetch(`/sub-categories?[filters][categories][id][$eq]=${catId}`);

  const handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    setSelectSub(isChecked 
      ? [...selectSub, value] 
      : selectSub.filter(item=> item !== value))
  }

  console.log(data)

  return (
    <div className='products'>
      <div className="left">
        <div className="filter-item">
          <h2>Product Categories</h2>
          {data?.map(item=>(
          <div className="input-item" key={item.id}>
            <input 
              type='checkbox' 
              id={item.id} 
              value={item.id} 
              onChange={handleChange}            
            />
            <label htmlFor={item.id} >{item.attributes.title}</label>
          </div>
          ))}
        </div>
        <div className="filter-item">
          <h2>Filter by price</h2>
          <div className="input-item">
            <span>0</span>
            <input 
              type="range" 
              min={0} 
              max={1000} 
              onChange={(e)=>setMaxPrice(e.target.value)}
            />
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="filter-item">
          <h2>Sort by price</h2>
          <div className="input-item">
            <input 
              type="radio" 
              id='asc'
              value='asc' 
              name='price'
              onChange={(e)=>setSort('asc')}
            />
            <label htmlFor="asc">Price (Lowest first)</label>
          </div>
          <div className="input-item">
            <input 
              type="radio" 
              id='desc' 
              value='desc' 
              name='price'  
              onChange={(e)=>setSort('desc')}
            />
            <label htmlFor="desc">Price (Highest first)</label>
          </div>
        </div>
      </div>
      <div className="right">
        <img className='category-img' src={Header} alt="" />
        <List 
          catId={catId} 
          maxPrice={maxPrice} 
          sort={sort}
          subCats={selectSub} 
        />
      </div>
      
    </div>
  )
}

export default Products