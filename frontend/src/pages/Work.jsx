import React from 'react'
import NavBar from '../components/NavBar'
import './globals.css';
import { useRevealer } from '../hooks/useRevealer';

const Work = () => {
  useRevealer();
  return (
    <>
    <div className="revealer"></div>
      <div className='bg-purple-200 h-dvh'>
            <div className='flex justify-center h-full relative'>
              <NavBar/>
            </div>
        </div>
    </>
  )
}

export default Work