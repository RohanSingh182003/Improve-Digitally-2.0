import React from 'react'

const Subscribe = () => {
  return (
    <div className='border rounded-md p-8'>
        <p className='text-gray-700 text-xl font-semibold'>Learn and Grow!</p>
        <div className="w-12 h-1 bg-orange-500 mt-4 rounded-lg"></div>
        {/* form section */}
        <form className="px-4 mt-8">
            <input type="email" placeholder='Your@email.com' className='p-2 rounded-3xl border-2 focus:outline-none w-full' />
            <button type='submit' className="p-3 mt-8 w-full bg-gray-700 hover:bg-orange-500 shadow-lg hover:shadow-xl text-white rounded-3xl transition-all duration-300">Subscribe</button>
        </form>
    </div>
  )
}

export default Subscribe