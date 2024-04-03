import React from 'react';

const Contact = () => {
  return (
    <div className='w-full h-screen flex pt-[90px] bg-gray-200 items-center justify-center px-5 '>
        <form action="https://formspree.io/f/xoqogjgy" method="POST" className=' rounded-2xl p-5 '>
            
            <div className='flex flex-col gap-3 '>
            
            <input className='my-2 p-2 rounded-xl border border-black text-black font-semibold' type='text' placeholder='email' name='email'/>

            <input className='my-2 p-2 rounded-xl font-semibold border border-black text-black' type='password' placeholder='password' name='paswword'/>
            <p className='flex justify-center text-end items-center mx-auto '><button className=' px-3 py-2  bg-gray-100  text-black text-1xl font-semibold rounded-xl'>Login</button>
            </p>
            </div>
        </form>
    </div>
  )
}

export default Contact
