import React from 'react'
import blog1 from "../../assets/blogs/blog1.webp"

const BlogPosts = () => {
  return (
    <div className='border w-full rounded-md overflow-hidden'>
        <div className='overflow-hidden'>
            {/* blog image */}
        <img src={blog1} alt="blog1" className="h-full hover:scale-110 transition-all duration-300" />
        </div>
        <div className="p-4">
            {/* blog title */}
            <p className='font-bold text-lg'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            {/* blog description */}
            <p className='mt-4 text-gray-800'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque ratione maiores corrupti excepturi quasi explicabo placeat aperiam libero fuga fugit, fugiat voluptates accusantium soluta odit doloremque eaque quia natus. Magni?</p>
        </div>
    </div>
  )
}

export default BlogPosts