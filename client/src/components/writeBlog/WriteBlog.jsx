import React from 'react'

const WriteBlog = () => {
  return (
    <section>
        <div className="h-32 md:h-64 bg-gray-900 text-gray-100 md:px-32 grid place-items-center md:place-items-start">
            <p className='text-4xl font-extrabold text-center md:text-start md:mt-24'>Write Blog</p>
        </div>
        {/* contact details */}
        <div className="grid md:grid-cols-2 md:px-24">
            {/* left side section  */}
            <div className='pr-6 px-6 md:px-0'>
                <p className='text-gray-700 text-center mt-14 text-2xl font-bold'>We can't wait to <span className='text-orange-500'>hear from <br /> you!</span></p>
                <div className="flex justify-center">
                <div className="w-12 h-1 bg-orange-500 text-center mt-6"></div>
                </div>
                <p className="text-center px-8 mt-6 text-sm">At Improve Digitally, we are always ready for new collaborations and opportunities. Our response team is available 24*7 to answer all your digital marketing and related queries. Get in touch with us as we would be more than happy to help you!!</p>
                <div className='md:ml-8 mt-6 pb-6 border-b-4 border-orange-500 w-fit'>
                    <p className='text-xl text-gray-700 font-bold'>Contact</p>
                </div>
            </div>
            {/* right side section  */}
            <div className='w-full rounded-md shadow-xl md:-mt-20 bg-white'>
                <div className="grid place-items-center mt-6">
                    <p className='text-2xl font-bold text-gray-700 pb-6'>Write a <span className='text-orange-500'>Blog</span></p>
                    <div className='w-10 h-1 bg-orange-500'></div>
                </div>
                {/* form section */}
                <form className='p-6 mt-12'>
                    <div className="grid md:grid-cols-2 gap-4">
                        <input type="text" placeholder='Your Name*' className='border-b-2 focus:outline-none p-2' />
                        <input type="email" placeholder='Your@email.com' className='border-b-2 focus:outline-none p-2' />
                        <input type="number" placeholder='Your phone number' className='border-b-2 focus:outline-none p-2' />
                        <input type="text" placeholder='Location' className='border-b-2 focus:outline-none p-2' />
                    </div>
                    <input type="text" placeholder='Subject*' className='border-b-2 focus:outline-none p-2 w-full mt-4' />
                    <textarea name="query" id="query" cols="30" rows="10" className='w-full mt-4 border-b-2 focus:outline-none p-2' placeholder='write your query...*'></textarea>
                    <button type='submit' className='my-4 px-8 py-4 rounded-3xl bg-gray-700 text-white hover:bg-orange-500 hover:shadow-xl transition-all duration-200 w-full'>Submit</button>
                </form>
            </div>
        </div>
    </section>
  )
}

export default WriteBlog