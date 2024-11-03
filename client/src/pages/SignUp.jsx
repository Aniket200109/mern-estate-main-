import React from 'react'
import { Link } from 'react-router-dom'

export default function signup() {
  return (
    <div className='p-3 max-w-lg mx-auto'>
        <h1 className='text-center font-semibold text-3xl my-7'>
            Sign Up
        </h1>
        
        <form className='flex flex-col gap-4 '>
            <input type='text' placeholder='username'
            className='border p-3 rounded-lg' id='username'/>


            <input type='email' placeholder='email' 
            className='border p-3 rounded-lg'/>
            <input type='password' placeholder='password'
            className='border p-3 rounded-lg'/>

            <button className='bg-slate-700 p-3 text-slate-200 rounded-lg
             hover:opacity-95 disabled:opacity-85 uppercase'>Sign Up</button>
        </form>
        <div className='flex gap-2'>
            <p>Have an account?</p>
            <Link to={'/sign-in'}>
            <span className='text-blue-700'>sign-in</span>
            </Link>
        </div>
    </div>
  )
}
