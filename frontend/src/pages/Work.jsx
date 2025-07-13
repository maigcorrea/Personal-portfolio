import React from 'react'
import { CursorProvider } from '../context/CursorContext'
import WorkContent from '../components/WorkContent'

const Work = () => {
  return (
    <>
      <CursorProvider>
        <WorkContent></WorkContent>
      </CursorProvider>
    
    </>
  )
}

export default Work