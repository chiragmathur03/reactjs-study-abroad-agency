import React from 'react'

//Icons
import { PiStudent } from 'react-icons/pi';
import { SlBadge } from 'react-icons/sl';
import { LuVerified } from 'react-icons/lu';
import { AiOutlineStar } from 'react-icons/ai';

const Stats = () => {
    return (
        <div className="mx-auto md:max-w-xl lg:max-w-screen-xl grid gap-8 grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-3 rounded-full bg-cyan-50 shadow-md">
                    <PiStudent className="w-8 h-8 sm:w-10 sm:h-10 text-cyan-800" />
                </div>
                <h6 className="text-base sm:text-2xl lg:text-4xl font-bold text-cyan-800">25000+</h6>
                <p className="text-sm mb-2 font-semibold text-gray-700">Student Counselled</p>
            </div>
            <div className="text-center">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-3 rounded-full bg-indigo-50 shadow-md">
                    <SlBadge className="w-8 h-8 sm:w-10 sm:h-10 text-indigo-400" />
                </div>
                <h6 className="text-base sm:text-2xl lg:text-4xl font-bold text-indigo-400">3000+</h6>
                <p className="text-sm mb-2 font-semibold text-gray-700">Placed Successfully</p>
            </div>
            <div className="text-center">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-3 rounded-full bg-green-50 shadow-md">
                    <LuVerified className="w-8 h-8 sm:w-10 sm:h-10 text-green-700" />
                </div>
                <h6 className="text-base sm:text-2xl lg:text-4xl font-bold text-green-700">99%</h6>
                <p className="text-sm mb-2 font-semibold text-gray-700">Visa Success Rate</p>
            </div>
            <div className="text-center">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-3 rounded-full bg-orange-50 shadow-md">
                    <AiOutlineStar className="w-8 h-8 sm:w-10 sm:h-10 text-orange-900" />
                </div>
                <h6 className="text-base sm:text-2xl lg:text-4xl font-bold text-orange-900">20+</h6>
                <p className="text-sm mb-2 font-semibold text-gray-700">Years of Experience</p>
            </div>
        </div>
    )
}

export default Stats