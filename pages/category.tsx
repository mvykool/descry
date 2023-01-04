import Head from 'next/head'
import React from 'react'
import Categories from '../components/Categories'


const category = () => {
  return (
    <>
      <Head>
        <title>Descry | Categories</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
        <div className='bg-[var(--bg-dark)] w-screen pb-20' > 
          
          {/**title */}
          <div className='pt-24 ml-5'>
             <h2 className='text-white text-lg font-semibold'>Categories</h2>
             <div className='gradient w-[26%] h-[3px]' />
          </div>

          {/**categories */}

          <Categories/>
        </div>
    </>
  )
}

export default category