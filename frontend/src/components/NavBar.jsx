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

const NavBar = ({className = ''}) => {
    const location = useLocation()
    const navigate = useNavigate();
    const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 })
    const containerRef = useRef(null)
    const homeRef = useRef(null)
    const workRef = useRef(null)
    const aboutRef = useRef(null)


    // Animación de recorte sobre todo el documento html, Comienza mostrando una especie de banda horizontal (25% 75%), que parece un rectángulo pequeño o delgado. Luego lo expande visualmente hasta cubrir toda la pantalla con un efecto de “apertura”.
    // Esto se usa para animar la transición entre páginas.
    // PROCEDIMIENTO
    // 1. El usuario navega a una página.

    // 2. Se ejecuta useTriggerPageTransition() (manualmente o desde un efecto).

    // 3. El navegador anima el recorte del <html>, ocultando temporalmente parte de la pantalla.

    // 4. Mientras tanto, el contenido se empieza a montar detrás de esa animación.

    // 5. Luego, cuando ya todo está en pantalla, entra en acción .revealer, que tiene su propia animación en useRevealer.js (como colapsar hacia arriba, por ejemplo).
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
        <div className={`fixed bottom-4 bg-[#c4c7c5] text-black p-4 rounded-full shadow-lg z-3 mx-4 ${className}`}>
            <div ref={containerRef} className='relative flex justify-around items-center z-3'>
                {
                    //Indicador burbúja
                }
                <motion.div
                    className="absolute h-[50px]  md:px-[40px] bg-[#f5f5f5] rounded-full"
                    animate={{
                        left: indicatorStyle.left,
                        width: indicatorStyle.width,
                    }}
                    transition={{
                        type: 'spring',
                        stiffness: 200, // 
                        damping: 150, // 80 por defecto, se puede ajustar la velocidad
                    }}
                />

                <div ref={workRef} className={`z-1 px-[20px] md:px-[40px]`}>
                    <Link to={'/work'} onClick={handleNavigation("/work")}>Work</Link>
                </div>
                <div ref={homeRef} className={`z-1 px-[20px] md:px-[40px]`}>
                    <Link to={'/'} onClick={handleNavigation("/")}>Home</Link>
                </div>
                <div ref={aboutRef} className={`z-1 px-[20px] md:px-[40px]`}>
                    <Link to={'/about'} onClick={handleNavigation("/about")}>About</Link>
                </div>
            </div>
        </div>
    </>
  )
}

export default NavBar