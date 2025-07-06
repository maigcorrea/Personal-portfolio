import React, { useEffect } from 'react'
import NavBar from '../components/NavBar'
import './globals.css';
import { useRevealer } from '../hooks/useRevealer';
import { initializeWorkSlider } from '../hooks/works';

const Work = () => {
  useRevealer();

  useEffect(() => {
    initializeWorkSlider();
  }, []);
  
  return (
    <>
    <div className="revealer"></div>
      {/*<div className='bg-purple-200 h-dvh'>
            <div className='flex justify-center h-full relative'>
              <NavBar/>
            </div>
        </div>*/}



        <footer>
          <p>All proyects</p>
          <div className="slider-counter">
            <div className="count"><p>1</p></div>
            <p>/</p>
            <p>7</p>
          </div>
        </footer>


        <div className="slider">
          <div className="slide">
            <div className="slide-bg-img">
              <img src="assets/work/img1.jpg" alt=""/>
            </div>
          </div>
        </div>


        <div className="slide-main-img">
          <div className="slide-main-img-wrapper">
            <img src="assets/work/img1.jpg" alt="" />
          </div>
        </div>

        <div className="slide-copy">
          <div className="slide-title">
            <h1>Field Unit</h1>
          </div>
          <div className="slide-description">
            <p>Concept art</p>
          </div>
        </div>
    </>
  )
}

export default Work