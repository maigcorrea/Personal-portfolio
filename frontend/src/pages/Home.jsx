import React from 'react'
import NavBar from '../components/NavBar'
import './globals.css';
import { useRevealer } from '../hooks/useRevealer';
import SplitText from '../hooks/splitRevealerText';

const Home = () => {
  useRevealer();

  const handleAnimationComplete = () => {
  console.log('All letters have animated!');
};
  return (
    <>
    <div className="revealer"></div>
        <div className='bg-[#131314] h-dvh'>
          <div className=' h-dvh w-full relative text-[#f5f5f5]'>
            <div className='p-[20px] flex flex-col'>
                
                <SplitText
                  text="Bienvenido al mundo del desarrollo de software"
                  className="text-[12px] md:text-[16px] font-family-robotoMonoLight"
                  initialDelay={1450}        // ⏱ La animación empieza después de 4s
                  staggerDelay={100}         // ⏱ 0.1s entre letras
                  duration={1.0}
                  ease="power3.out"
                  splitType="lines"
                  from={{ opacity: 0, y: 40 }}
                  to={{ opacity: 1, y: 0 }}
                  threshold={0.1}
                  rootMargin="-100px"
                  textAlign="left"
                  onLetterAnimationComplete={handleAnimationComplete}
                />
              
              <SplitText
                  text="Dando forma a tus ideas"
                  className="text-7xl font-family-helvetica font-extrabold my-3"
                  initialDelay={1450}        // ⏱ La animación empieza después de 4s
                  staggerDelay={100}         // ⏱ 0.1s entre letras
                  duration={1.0}
                  ease="power3.out"
                  splitType="lines"
                  from={{ opacity: 0, y: 40 }}
                  to={{ opacity: 1, y: 0 }}
                  threshold={0.1}
                  rootMargin="-100px"
                  textAlign="left"
                  onLetterAnimationComplete={handleAnimationComplete}
                />

              <SplitText
                  text="Tecnología especializada para solucionar tus problemas"
                  className="text-lg md:text-3xl font-family-helvetica"
                  initialDelay={1450}        // ⏱ La animación empieza después de 4s
                  staggerDelay={100}         // ⏱ 0.1s entre letras
                  duration={1.0}
                  ease="power3.out"
                  splitType="lines"
                  from={{ opacity: 0, y: 40 }}
                  to={{ opacity: 1, y: 0 }}
                  threshold={0.1}
                  rootMargin="-100px"
                  textAlign="left"
                  onLetterAnimationComplete={handleAnimationComplete}
                />

              
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