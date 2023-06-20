import './index.css'
import React from 'react'
import Lottie from 'lottie-react'
import animationData from './assets/numerapib.json'
import Typewriter from 'typewriter-effect';

export default function App() {

  return (
    <div style={{
      backgroundColor: 'white',
    }}>
      <div className="min-h-screen flex flex-col items-center justify-center lg:mx-48 text-black bg-dark">
        
        <div>
          <Lottie animationData={animationData} />
        </div>
        <h1 className='text-2xl font-extrabold'>NumeraPi.AI</h1>
        <span className='text-xl font-extrabold'>
          <Typewriter 
            options={{
              autoStart: true,
              loop: true,
              delay: 50,
              strings: [
                'A Quantum Approach',
                'Coming Soon'
              ]
            }}
          />
        </span>

      </div>
    </div>
  )
}