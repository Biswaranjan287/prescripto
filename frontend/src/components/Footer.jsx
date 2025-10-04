import React from 'react'
import { assets } from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'

const Footer = () => {

    const navigate = useNavigate()

    return (
        <div className='md:mx-10'>
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

                {/* ----- Left section ----- */}
                <div>
                    <img className='mb-5 w-40' src={assets.logo} alt="" />
                    <p className='w-full md:w-2/3 text-gray-600 leading-6'>Welcome to Prescripto, your trusted partner for hassle-free doctor appointments. Book appointments with top doctors in your area, 24/7. Say goodbye to long queues and missed appointments. Our platform allows you to browse doctor profiles, check availability, and book appointments online. Take control of your health today with Prescripto. Easy, convenient, and reliable - your health, our priority.</p>
                </div>

                {/* ----- Center section ----- */}
                <div>
                    <p className='text-xl font-medium mb-5'>COMPANY</p>
                    <ul className='flex flex-col gap-2 text-gray-600'>
                        <p className='px-1 cursor-pointer hover:bg-black hover:text-white transition-all duration-150 ease-in-out' onClick={()=>{navigate('/'); scrollTo(0,0)}}>Home</p>
                        <p className='px-1 cursor-pointer hover:bg-black hover:text-white transition-all duration-150 ease-in-out' onClick={()=>{navigate('/about'); scrollTo(0,0)}}>About us</p>
                        <p className='px-1 cursor-pointer hover:bg-black hover:text-white transition-all duration-150 ease-in-out' onClick={()=>{navigate('/contact'); scrollTo(0,0)}}>Contact us</p>
                        <p className='px-1 cursor-pointer hover:bg-black hover:text-white transition-all duration-150 ease-in-out'>Privacy policy</p>
                    </ul>
                </div>
                <div>
                    {/* ----- Right section ----- */}
                    <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                    <ul className='flex flex-col gap-2 text-gray-600'>
                        <li>+1-212-456-7890</li>
                        <li>prescripto44@gmail.com</li>
                    </ul>
                </div>
            </div>

            {/* ----- Copyright Text ----- */}
            <div>
                <hr />
                <p className='py-5 text-sm text-center'>© 2025 Prescripto. All rights reserved.</p>
            </div>

        </div>
    )
}

export default Footer