import React from 'react'
import NavBar from '../components/NavBar'
import './globals.css';
import { useRevealer } from '../hooks/useRevealer';

const Home = () => {
  useRevealer();
  return (
    <>
    <div className="revealer"></div>
        <div className='bg-red-200 h-dvh'>
          <div className=' h-dvh w-full relative'>
            <h1 className='text-7xl'>Dando forma a tus ideas</h1>
            <div className='flex justify-center'>
              <NavBar/>
            </div>
          </div>
        </div>
    </>
  )
}

export default Home