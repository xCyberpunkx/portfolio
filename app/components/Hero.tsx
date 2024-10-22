import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/Textgenerateeffect'
import MagicButton from './ui/MagicButton'
import { GiWideArrowDunk } from 'react-icons/gi'

const Hero = () => {
  return (
    <div className='pb-20 pt-36'>
<div>
    <Spotlight className="-top-40 left-10 md:-left-32 md:-top-20 h-screen"fill="white"/>
    <Spotlight className="-top-40 left-full h-[80vh] w-[50vw]" fill="purple"/>
    <Spotlight className="top-28 left-80  h-[80vh] w-[50vw]"fill="blue"/>
    <Spotlight className="top-60 right-40 h-[90vh] w-[60vw]"fill="white"/>
    <div className=" h-screen w-full dark:bg-black-100   bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.2] absolute top-0 left-0 flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
     
      </p>
    </div>
<div className='flex justify-center relative my-20 2-10'>
  <div className='max-w-[89vw] md:max-w-2xl lg:-w-[60vw] flex flex-col items-center justify-center'>
<h2 className='uppercase tracking-widest text-xs text-center text-blue-100 max-w-80'>Dynamic Web Magic With NextJS</h2>
<TextGenerateEffect words={'Building Tailored Software Solutions for Your Needs'} className='text-center text-5xl md:text-5xl lg:text6xl'/>
  <p className='text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl'>
    Hi, I&apos;m <span className=' tracking-widest text-2xl font-bold text-blue-100'>Zine Eddine</span>, a Software Developer based in Algeria.
  </p>
  <a href="#about">
  <MagicButton title='Explore My Work' icon={<GiWideArrowDunk />} position='right'/>
  </a>
  </div>
</div>
</div>
    </div>
  )
}

export default Hero