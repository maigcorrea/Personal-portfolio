import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import CustomCursor from '../components/CustomCursor'
import './globals.css';
import { useRevealer } from '../hooks/useRevealer';
import { initializeWorkSlider } from '../hooks/works';

const Work = () => {
  useRevealer();

  // Estado para detectar si es móvil
  const [isMobile, setIsMobile] = useState(false);

  // Efecto para detectar el tamaño de la pantalla desde react y ajustar el estado isMobile con el fin de evitar el renderizado del cursor en móviles
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    initializeWorkSlider();

    // Al montar la página le añadimos al body una clase para identificarla, y así saber si mostrar el cursor (la flechita) o no, ya que esta página tiene un cursor personalizado
    document.body.classList.add('work-page');
    return () => document.body.classList.remove('work-page');
  }, []);
  
  return (
    <>
    {!isMobile && <CustomCursor />}
    <div className="revealer"></div>
      {/*<div className='bg-purple-200 h-dvh'>
            <div className='flex justify-center h-full relative'>
              <NavBar/>
            </div>
        </div>*/}

      <div className='h-dvh'>
        
        <div className='m-auto w-full flex justify-center '>
          <NavBar className=""/>
        </div>

        <footer>
          <p>All proyects</p>
          <div className="slider-counter">
            <div className="count"><p>1</p></div>
            <p>/</p>
            <p>7</p>
          </div>
        </footer>


        <div className="slider blur-sm">
          <div className="slide" >
            <div className="slide-bg-img">
              <img src="assets/work/img1.png"  alt=""/>
            </div>
          </div>
        </div>


        <div className="slide-main-img">
          <div className="slide-main-img-wrapper">
            <img src="assets/work/img1.png" alt="" />
          </div>
        </div>

        <div className="slide-copy">
          <div className="slide-title">
            <h1>Web de Goiko</h1>
          </div>
          <div className="slide-description">
            <p>Frontend</p>
          </div>
        </div>

        </div> 
    </>
  )
}

export default Work