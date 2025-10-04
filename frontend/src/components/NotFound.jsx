import React from 'react'
import { NavLink } from 'react-router-dom'

const NotFound = () => {
    return (
        <div className='flex justify-center'>
            <div className='flex items-center justify-center flex-col w-96'>
                <img className='flex justify-center mb-4' src="/pagenotfound.jpg" alt="" />
                <NavLink to='/'>
                    <button className="border px-4 py-1 rounded-full border-gray-400 text-gray-600 hover:bg-gray-600 hover:text-white transition-all duration-400">Back to Home</button>
                </NavLink>
            </div>
        </div>
    )
}

export default NotFound