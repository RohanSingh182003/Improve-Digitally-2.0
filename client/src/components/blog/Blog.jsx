import React from 'react'
import BlogPosts from './BlogPosts'
import GrowBusiness from './GrowBusiness'
import LatestPosts from './LatestPosts'
import Pagination from './Pagination'
import Subscribe from './Subscribe'

const Blog = () => {
  return (
    <section>
        <div className="h-32 md:h-64 bg-gray-900 text-gray-100 md:px-32 grid place-items-center md:place-items-start">
            <p className='text-4xl font-extrabold text-center md:text-start md:mt-24'>Blogs</p>
        </div>
        {/* --------------------------------- blogs section --------------------------------- */}
        <div className="grid md:grid-cols-3 md:p-20 md:gap-8">
          {/* ---------------------------- blog posts ---------------------------- */}
          <div className='md:col-span-2 lg:grid lg:grid-cols-2 md:gap-8 p-4 md:p-0'>
            <BlogPosts/>
            <BlogPosts/>
            <BlogPosts/>
            <BlogPosts/>
            {/* pagination */}
            <div className="col-span-2 grid place-items-center mt-24">
              <Pagination/>
            </div>
          </div>
          {/* ---------------------------- blog sidebar ---------------------------- */}
          <div className='flex flex-col space-y-4'>
              <Subscribe/>
              <LatestPosts/>
              <GrowBusiness/>
          </div>
        </div>
    </section>
  )
}

export default Blog