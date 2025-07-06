import React from 'react'
import NavBar from '../components/NavBar'
import './globals.css';
import { useRevealer } from '../hooks/useRevealer';

const Home = () => {
  useRevealer();
  return (
    <>
    <div className="revealer"></div>
        <div className='bg-[#131314] h-dvh'>
          <div className=' h-dvh w-full relative text-[#f5f5f5]'>
            <div className='p-[20px]'>
              <p className='text-[12px] md:text-[16px] font-family-robotoMonoLight'>Bienvenido al mundo del desarrollo de software</p>
              <h1 className='text-7xl font-family-helvetica font-extrabold my-3'>Dando forma a tus ideas</h1>
              <h2 className='text-lg md:text-3xl font-family-helvetica'>Tecnología especializada para solucionar tus problemas</h2>
            </div>
            <div className='flex justify-center'>
              <NavBar/>
            </div>
          </div>
        </div>
    </>
  )
}

export default Home