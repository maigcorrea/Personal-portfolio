import React from 'react'
import NavBar from '../components/NavBar'

const Home = () => {
  return (
    <>
        <div className='bg-blue-200 h-screen'>
          <div className=' h-screen w-full relative'>
            <h1 className='text-7xl'>Dando forma a tus ideas</h1>
            <div className='flex justify-center'>
              <div className='absolute bottom-4 w-1/4 bg-gray-300 text-white p-4 rounded-full shadow-lg'>
                    <NavBar/>
                </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Home