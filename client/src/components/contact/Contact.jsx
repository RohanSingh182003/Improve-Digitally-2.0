import React from 'react'
import { HiLocationMarker } from 'react-icons/hi';
import { BiPhoneCall } from 'react-icons/bi';
import { AiFillMail } from 'react-icons/ai';

const Contact = () => {
  return (
    <section>
        <div className="h-32 md:h-64 bg-gray-900 text-gray-100 md:px-32 grid place-items-center md:place-items-start">
            <p className='text-4xl font-extrabold text-center md:text-start md:mt-24'>Contact</p>
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
                <div className="flex items-center space-x-4 mt-8 cursor-pointer">
                    <HiLocationMarker className='text-xl text-orange-500' />
                    <p className='text-sm'>Jamia Nagar, Okhla, New Delhi, Delhi 110025</p>
                </div>
                <div className="flex items-center space-x-4 mt-2 hover:text-orange-400 transition-all duration-300 cursor-pointer">
                    <BiPhoneCall className='text-xl text-orange-500' />
                    <p className='text-sm'>+91 98712 32887</p>
                </div>
                <div className="flex items-center space-x-4 mt-2 hover:text-orange-400 transition-all duration-300 cursor-pointer">
                    <AiFillMail className='text-xl text-orange-500' />
                    <p className='text-sm'>info@improvedigitally.com</p>
                </div>
            </div>
            {/* right side section  */}
            <div className='w-full rounded-md shadow-xl md:-mt-20 bg-white'>
                <div className="grid place-items-center mt-6">
                    <p className='text-2xl font-bold text-gray-700 pb-6'>Get in <span className='text-orange-500'>Touch</span></p>
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
        {/* contact location */}
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28035.13728702772!2d77.27377946247563!3d28.55798447660449!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce40b2f9e830d%3A0x864d93c20efa1e78!2sJamia%20Nagar%2C%20Okhla%2C%20New%20Delhi%2C%20Delhi%20110025!5e0!3m2!1sen!2sin!4v1672335000667!5m2!1sen!2sin" width="600" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className='w-full h-96 mt-8 md:mt-14 md:px-24' ></iframe>
    </section>
  )
}

export default Contact