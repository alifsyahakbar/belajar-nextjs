import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Register() {
  return (
        <div className='bg-[url("/assets/login.jpg")] bg-cover bg-no-repeat w-full h-screen p-28'>
          <div className=''>
            <motion.h1 className='font-bold text-5xl' initial={{opacity: 0.1}} animate={{opacity: 1}} transition={{ duration: 0.4}}>Belajar <span className='text-blue-600'>NextJS</span></motion.h1>
            <h2 className='font-bold text-3xl mt-6'>Sign Up</h2>
            <motion.form className='flex flex-col w-1/3 my-6'
             initial={{x: "-30%", opacity: 0.5}}
             animate={{ x: 0, opacity: 1}}
             transition={{ duration: 0.5}}
             >
              <input className='mb-6 flex px-4 py-3 rounded-full shadow-lg focus:outline-indigo-400 focus:shadow-xl' type="text" placeholder='Username'/>
              <input className='mb-6 flex px-4 py-3 rounded-full shadow-lg focus:outline-indigo-400 focus:shadow-xl' type="email" placeholder='Email'/>
              <input className='mb-6 flex px-4 py-3 rounded-full shadow-lg focus:outline-indigo-400 focus:shadow-xl' type="text" placeholder='Password'/>
              <Link href="/" className='bg-indigo-600 text-center text-white p-2 rounded-full shadow-md hover:bg-indigo-700 transition duration-150 focus:outline-indigo-200'>Register</Link>
            </motion.form>
            <span className='flex w-1/3 text-center'> Already have an account?<Link href="/login" className='text-indigo-400 mx-1 hover:underline underline-offset-1'> Log In</Link></span>
          </div>
          <div className='absolute bottom-0 my-4'>
            <p className='text-md font-normal text-slate-400'>&copy;Copyright 2022 Belajar NextJS</p>
          </div>
        </div>  
  )
}