import React from 'react'
import NavBar from '../components/NavBar'
import './globals.css';
import { useRevealer } from '../hooks/useRevealer';
import SplitText from '../hooks/splitRevealerText';
import CurvedLoop from '../components/CurvedLoop';
import Dither from '../components/DitherBg';

const Home = () => {
  useRevealer();

  const handleAnimationComplete = () => {
  console.log('All letters have animated!');
};
  return (
    <>
    <div className="revealer"></div>

    <section>

    
        <div className='h-dvh'>
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


            <div style={{ width: '100%', height: '600px', position: 'relative' }}>
              <Dither
                waveColor={[0.5, 0.5, 0.5]}
                disableAnimation={false}
                enableMouseInteraction={true}
                mouseRadius={0.3}
                colorNum={4}
                waveAmplitude={0.3}
                waveFrequency={3}
                waveSpeed={0.05}
              />
            </div>


            <div className='flex justify-center'>
              <NavBar/>
            </div>
          </div>
        </div>
        </section>

        <section className='curved_text'>
          <CurvedLoop 
            marqueeText="Desarrollo ✦ Creatividad ✦ Innovación ✦ Rendimiento ✦ Potencia ✦"
            speed={3}
            curveAmount={300}
            direction="right"
            interactive={true}
            className="custom-text-style"
          />
        </section>
    </>
  )
}

export default Home