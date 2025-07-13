// CONTENIDO DE LA PÁGINA Work.jsx
import React, { use, useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import CustomCursor from '../components/CustomCursor'
import '../pages/globals.css';
import { useRevealer } from '../hooks/useRevealer';
import { initializeWorkSlider } from '../hooks/works';
import { useCursor } from '../context/CursorContext';

const WorkContent = () => {
  useRevealer();

  // Estado para cambiar el texto y tamaño de dentro del cursor al pasar sobre un elemento
  const { setCursorText, setCursorVariant } = useCursor();

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
    //Inicializar el slider con el contenido
    initializeWorkSlider();

    // Al montar la página le añadimos al body una clase para identificarla, y así saber si mostrar el cursor (la flechita) o no, ya que esta página tiene un cursor personalizado
    document.body.classList.add('work-page');
    return () => document.body.classList.remove('work-page');
  }, []);

  // Cambiar el texto y tamaño del cursor al pasar sobre las imagenes interiores del slider para invitar a ver el proyecto
   useEffect(() => {
    const slideMainImg = document.querySelector('.slide-main-img');
    if (!slideMainImg) return;


    const handleMouseEnter = () => {
        setCursorText('Ver 🡭');
        setCursorVariant('hover');
    };

    const handleMouseLeave = () => {
        setCursorText('scroll');
        setCursorVariant('default');
    };

    slideMainImg.addEventListener('mouseenter', handleMouseEnter);
    slideMainImg.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      slideMainImg.removeEventListener('mouseenter', handleMouseEnter);
      slideMainImg.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [setCursorText, setCursorVariant]);
  

  // Cambiar el cursor al pasar por encima de la barra de navegación
  useEffect(() => {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;

    const handleMouseEnterNav = () => {
        setCursorText('');
        setCursorVariant('small'); // Cambia el tamaño del cursor al pasar por encima de la barra de navegación
        console.log('Cursor cambiado a pequeño al pasar por encima de la barra de navegación');
    };

    const handleMouseLeaveNav = () => {
        setCursorText('scroll');
        setCursorVariant('default'); // Vuelve al tamaño normal del cursor al salir de la barra de navegación
        
    };

    navbar.addEventListener('mouseenter', handleMouseEnterNav);
    navbar.addEventListener('mouseleave', handleMouseLeaveNav);

    return () => {
      navbar.removeEventListener('mouseenter', handleMouseEnterNav);
      navbar.removeEventListener('mouseleave', handleMouseLeaveNav);
    };

  },[setCursorText, setCursorVariant]);


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
          <NavBar className="navbar"/>
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
            <a href="www.google.es" className='cursor-none' target='_blank'><img src="assets/work/img1.png" alt="" /></a>
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

export default WorkContent