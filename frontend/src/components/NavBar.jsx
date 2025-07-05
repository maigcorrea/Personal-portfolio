import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useLocation, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useTriggerPageTransition } from './PageTransitionWrapper'
// 📝 Nota futura:
// Este menú usa rutas exactas ("/", "/work", "/about").
// Si en el futuro se agregan rutas dinámicas como "/user/:id" o "/project/:projectId":
//   1. Usar location.pathname.startsWith('/user') para mapearlas.
//   2. O simplemente ocultar el indicador si la ruta no está en el menú.
//   3. Alternativa escalable: usar un array navItems[] con path y ref para hacer coincidencia dinámica.

const NavBar = () => {
    const location = useLocation()
    const navigate = useNavigate();
    const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 })
    const containerRef = useRef(null)
    const homeRef = useRef(null)
    const workRef = useRef(null)
    const aboutRef = useRef(null)


    const triggerPageTransition = useTriggerPageTransition();

    // Efecto de desplazamiento del idicador (motion.div) en el menú al cambiar de ruta
    useEffect(() => {
        const map = {
            '/': homeRef,
            '/work': workRef,
            '/about': aboutRef,
        }

        const activeRef = map[location.pathname]
        console.log('Ruta activa:', location.pathname)
        if (activeRef?.current && containerRef.current) {

            // Esperar al próximo frame para asegurar que DOM esté listo
            requestAnimationFrame(() => {
                const rect = activeRef.current.getBoundingClientRect()
                const containerRect = containerRef.current.getBoundingClientRect()

                const left = rect.left - containerRect.left
                const width = rect.width

                setIndicatorStyle({ left, width })
                console.log('Indicador:', { left, width })
            })
        }
    }, [location.pathname])


    // Maneja la navegación y la animación de transición entre páginas (animación cúbica de PageTransitionWrapper.jsx)
    const handleNavigation = (path) => (e) => {
         e.preventDefault();
        if (path === location.pathname) return;

        triggerPageTransition();

        // Espera un poco antes de navegar para que se vea la animación
        setTimeout(() => {
        navigate(path);
        }, 1000); // puedes ajustar esto para que coincida con tu animación
    }

  return (
    <>
        <div className='absolute bottom-4 bg-gray-300 text-white p-4 rounded-full shadow-lg z-3'>
            <div ref={containerRef} className='relative flex justify-around items-center z-3'>
                {
                    //Indicador burbúja
                }
                <motion.div
                    className="absolute h-[50px] px-[40px] bg-gray-500 rounded-full"
                    animate={{
                        left: indicatorStyle.left,
                        width: indicatorStyle.width,
                    }}
                    transition={{
                        type: 'spring',
                        stiffness: 200,
                        damping: 80,
                    }}
                />

                <div ref={workRef} className={`z-1 px-[40px]`}>
                    <Link to={'/work'} onClick={handleNavigation("/work")}>Work</Link>
                </div>
                <div ref={homeRef} className={`z-1 px-[40px]`}>
                    <Link to={'/'} onClick={handleNavigation("/")}>Home</Link>
                </div>
                <div ref={aboutRef} className={`z-1 px-[40px]`}>
                    <Link to={'/about'} onClick={handleNavigation("/about")}>About</Link>
                </div>
            </div>
        </div>
    </>
  )
}

export default NavBar