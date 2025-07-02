import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'

// 📝 Nota futura:
// Este menú usa rutas exactas ("/", "/work", "/about").
// Si en el futuro se agregan rutas dinámicas como "/user/:id" o "/project/:projectId":
//   1. Usar location.pathname.startsWith('/user') para mapearlas.
//   2. O simplemente ocultar el indicador si la ruta no está en el menú.
//   3. Alternativa escalable: usar un array navItems[] con path y ref para hacer coincidencia dinámica.
const NavBar = () => {
    const location = useLocation()
    const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 })
    const containerRef = useRef(null)
    const homeRef = useRef(null)
    const workRef = useRef(null)
    const aboutRef = useRef(null)

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

  return (
    <>
        <div ref={containerRef} className='relative flex justify-around items-center'>
            <motion.div
                className="absolute h-[50px] px-[40px] bg-gray-500 rounded-full"
                animate={{
                    left: indicatorStyle.left,
                    width: indicatorStyle.width,
                }}
                transition={{
                    type: 'spring',
                    stiffness: 500,
                    damping: 80,
                }}
            />

            <div ref={workRef} className={`z-1 px-[40px]`}>
                <Link to={'/work'}>Work</Link>
            </div>
            <div ref={homeRef} className={`z-1 px-[40px]`}>
                <Link to={'/'}>Home</Link>
            </div>
            <div ref={aboutRef} className={`z-1 px-[40px]`}>
                <Link to={'/about'}>About</Link>
            </div>
        </div>
    </>
  )
}

export default NavBar