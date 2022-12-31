import React, { useState } from 'react'
import { AiOutlineLock } from 'react-icons/ai';
import { toast } from 'react-toastify';

const Login = () => {
    // declare state variables
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const handleSignup = () => {
        toast.warn("This is an demo website so, this functionality is unavailable now.")
        toast.warn("If you want, you can login using sample@email.com(email) & admin(password) as credentials.")
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if(email === 'sample@email.com' && password === 'admin'){
            
        } else{
            toast.error('wrong credetials.')
        }
    }
  return (
    <div className='min-h-[80vh] grid place-items-center'>
        {/* login contaier */}
        <div className="h-full w-full border rounded-md md:w-64 md:h-auto">
            {/* title */}
            <div className="p-4 grid place-items-center">
            <AiOutlineLock className='text-center text-6xl'/>
            <p className="text-lg font-light">
                Login as Admin
            </p>
            </div>
            {/* login form */}
            <form onSubmit={handleSubmit} className='mt-12 px-4'>
                <input value={email} onChange={(e)=> setEmail(e.target.value)} required type="email" className='border-2 w-full rounded-3xl p-2 focus:outline-none' placeholder='Your@email.com*' />
                <input value={password} onChange={(e)=> setPassword(e.target.value)} required type="password" className='border-2 mt-4 w-full rounded-3xl p-2 focus:outline-none' placeholder='Password*' />
                <button type="submit" className='p-3 mt-4 rounded-3xl w-full bg-gray-700 text-white hover:bg-orange-500 transition-all duration-200' >Login</button>
            </form>
            <p onClick={handleSignup} className="py-4 text-xs text-center">don't have an account? <strong className='hover:underline cursor-pointer'>Sign in</strong></p>
        </div>
    </div>
  )
}

export default Login