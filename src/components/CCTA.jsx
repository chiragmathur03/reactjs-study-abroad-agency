import React from 'react'

//icons
import { AtSymbolIcon, PhoneArrowUpRightIcon, BuildingOfficeIcon } from '@heroicons/react/20/solid'

const CCTA = () => {
    return (
        <div className="mx-auto">
            <div className="mx-auto mb-8 lg:mb-16 text-center">

                {/* <h2 className="w-full text-3xl font-bold text-center sm:text-4xl text-primary">About Us
            <p className="w-full py-8 mx-auto -mt-2 text-base text-center text-gray-600 font-medium sm:max-w-3xl"> */}

                <h2 className="mb-4 text-3xl tracking-tight font-bold text-primary sm:text-4xl">Contact Us</h2>
                <p className="text-gray-600 font-medium text-base">Get guidance on country selection, intake, deadlines, tests, and eligibility criteria.</p>
            </div>
            {/* <div className="space-y-8 flex flex-col items-start justify-center sm:grid sm:grid-cols-3 sm:gap-5 lg:gap-12 sm:space-y-0 text-center"> */}
            <div className="mx-auto text-center space-y-10 md:grid md:grid-cols-3 md:space-y-0">
                <div className='flex flex-col items-center'>
                    <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-gray-200 lg:h-12 lg:w-12 shadow-xl">
                        <AtSymbolIcon className='w-6 text-gray-600' />
                    </div>
                    <h3 className="mb-2 font-bold text-gray-800 ">Email</h3>
                    <p className="text-gray-600 w-52 sm:w-fit">info@headstart.co.in</p>
                </div>
                <div className='flex flex-col items-center'>
                    <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-gray-200 lg:h-12 lg:w-12 shadow-xl">
                        <PhoneArrowUpRightIcon className='w-6 text-gray-600' />
                    </div>
                    <h3 className="mb-2 font-bold text-gray-800">Phone</h3>
                    <p className="text-gray-600">+91 72268 12550 / <br /> +91 72268 41550</p>
                </div>
                <div className='flex flex-col items-center'>
                    <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-gray-200 lg:h-12 lg:w-12 shadow-xl">
                        <BuildingOfficeIcon className='w-6 text-gray-600' />
                    </div>
                    <h3 className="mb-2 font-bold text-gray-800">Address</h3>
                    <p className="text-gray-600 w-52 sm:w-fit">608-A, Pinnacle Business Park, Corporate Road, Prahladnagar, Ahmedabad</p>
                </div>
            </div>
        </div>
    )
}

export default CCTA