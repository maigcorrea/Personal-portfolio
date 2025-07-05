import React from 'react'
import NavBar from '../components/NavBar'
import './globals.css';
import { useRevealer } from '../hooks/useRevealer';

const Work = () => {
  useRevealer();
  return (
    <>
    <div className="revealer"></div>
      <div className='bg-purple-200 h-screen'>
            <div className='flex justify-center h-full relative'>
                <div className='absolute bottom-4 bg-gray-300 text-white p-4 rounded-full shadow-lg z-3'>
                    <NavBar/>
                </div>
            </div>
        </div>
    </>
  )
}

export default Work