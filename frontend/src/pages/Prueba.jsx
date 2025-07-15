import React from 'react'
import './globals.css';
import { useRevealer } from '../hooks/useRevealer';

const Prueba = () => {
    useRevealer();
  return (
    <>
        <div className="revealer"></div>
        <div className="home">
            <div className="header">
                <h1>Nuvoro</h1>
            </div>
        </div>
    </>
  )
}

export default Prueba