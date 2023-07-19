import React from 'react'
import './Categories.scss'
import Image1 from '../images/cat5.jpg'
import Image2 from '../images/cat6.jpg'
import Image3 from '../images/cat7.jpg'
import Image4 from '../images/cat11.jpg'
import Image5 from '../images/cat12.jpg'
import Image6 from '../images/cat13.jpg'
import { Link } from 'react-router-dom'

const Categories = () => {
  return (
    <div className='categories'>
        <div className="col">
            <div className="row">
                <img src={Image1} alt="" />
                <button>
                    <Link className='link' to='/products/1' >
                        Sale
                    </Link>
                </button>
            </div>
            <div className="row">
                <img src={Image2} alt="" />
                <button>
                    <Link className='link' to='/products/1' >
                        Lounging
                    </Link>
                </button>
            </div>
        </div>
        <div className="col">
            <div className="row">
                <img src={Image3} alt="" />
                <button>
                    <Link className='link' to='/products/1' >
                        Accessories
                    </Link>
                </button>
            </div>
        </div>
        <div className="col col-large">
            <div className="row">
                <div className="col">
                    <div className="row">
                        <img src={Image4} alt="" />
                        <button>
                            <Link className='link' to='/products/1' >
                                Dinner Time
                            </Link>
                        </button>
                    </div>
                </div>
                <div className="col">
                    <div className="row">
                        <img src={Image5} alt="" />
                        <button>
                            <Link className='link' to='/products/1' >
                                New Season
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
            <div className="row">
                <img src={Image6} alt="" />
                <button>
                    <Link className='link' to='/products/1' >
                        Limited Edition
                    </Link>
                </button>
            </div>
        </div>

    </div>
  )
}

export default Categories