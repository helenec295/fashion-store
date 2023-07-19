import React, { useState } from 'react'
import Slide1 from '../images/fashion4.jpg'
import Slide2 from '../images/fashion6.jpg'
import Slide3 from '../images/fashion5.jpg'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import './Slider.scss'

const SliderNew = () => {

    const [currentSlide, setCurrentSlide] = useState(0);

    const data = [
        Slide1,
        Slide2,
        Slide3
    ]

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);

    }

    const nextSlide = () => {
        setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
    }


  return (
    <div className='slider'>
        <div className="container" 
            style={{transform: `translateX(-${currentSlide * 100}vw)`}} >
           <img src={data[0]} />
           <img src={data[1]} />
           <img src={data[2]} />
        </div>
        <div className="icons">
            <div className="icon" onClick={prevSlide} >
                <AiOutlineArrowLeft />
            </div>
            <div className="icon" onClick={nextSlide} >
                <AiOutlineArrowRight />
            </div>
        </div>

    </div>
  )
}

export default SliderNew