import React from 'react'


type Props = {}

const HeroSection = (props: Props) => {
  return (
    <section className='grid grid-cols-1 mt-6'>
        <div className='cols-span-7 w-full place-self-center text-center sm:text-left justify-self-start'>
            <h1 className='text-2xl sm:text-4xl md:text-6xl md:leading-normal'>所有秘密的終點</h1>
            <button className='text-white bg-indigo-500 w-full px-4 py-2 border-2 rounded shadow-[0.25rem_0.25rem_0px_0px_rgba(0,0,0,1)] '>Browse Article</button>
        </div>
    </section>
  )
}

export default HeroSection