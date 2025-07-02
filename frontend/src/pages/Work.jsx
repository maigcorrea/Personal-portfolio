import React from 'react'
import NavBar from '../components/NavBar'

const Work = () => {
  return (
    <>
      <div className='bg-purple-200 h-screen'>
            <div className='flex justify-center h-full relative'>
                <div className='absolute bottom-4 w-1/4 bg-gray-300 text-white p-4 rounded-full shadow-lg'>
                    <NavBar/>
                </div>
            </div>
        </div>
    </>
  )
}

export default Work