import React from 'react'
import blog1 from "../../assets/blogs/blog1.webp"

const LatestPosts = () => {
  return (
    <div className='border rounded-md p-8'>
    <p className='text-gray-700 text-xl font-semibold'>Latest Posts</p>
    <div className="w-12 h-1 bg-orange-500 mt-4 rounded-lg"></div>
    {/* blogs section */}
    <div className="mt-8">
    <MiniBlogPosts/>
    <MiniBlogPosts/>
    <MiniBlogPosts/>
    </div>
</div>
  )
}

export default LatestPosts

const MiniBlogPosts = () => {
    return (
        <div className='grid grid-cols-4 mb-4'>
            {/* blog image */}
            <div className='rounded-md overflow-hidden'>
                <img src={blog1} alt="blog1" className='w-full h-full object-cover' />
            </div>
            {/* blog title */}
            <div className="col-span-3 pl-4 text-gray-700 hover:text-orange-500 transition-all duration-200 cursor-pointer">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            {/* blog post time */}
                <p className='mt-4 text-orange-500 text-sm col-span-4'>October 12, 2022</p>
        </div>
    )
}