import React from 'react'

//icons
import { AtSymbolIcon, PhoneArrowUpRightIcon, BuildingOfficeIcon } from '@heroicons/react/20/solid'

const CCTA = () => {
    return (
        <div className="grid row-gap-8 sm:row-gap-0 sm:grid-cols-2 lg:grid-cols-3">
            <div className="p-8 sm:border-r">
                <div className="max-w-md text-center">
                    <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-16 sm:h-16 shadow-md">
                        <AtSymbolIcon className='w-8 h-8 text-gray-700' />
                    </div>
                    <h6 className="mb-2 font-semibold leading-5 text-gray-800">Email</h6>
                    <p className="mb-3 text-sm text-gray-600">
                        info@headstart.co.in
                    </p>
                </div>
            </div>
            <div className="p-8 lg:border-r">
                <div className="max-w-md text-center">
                    <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-16 sm:h-16 shadow-md">
                        <PhoneArrowUpRightIcon className='w-8 h-8 text-gray-700' />
                    </div>
                    <h6 className="mb-2 font-semibold leading-5 text-gray-800">Phone</h6>
                    <p className="mb-3 text-sm text-gray-600">
                        +91 72268 12550 / <br /> +91 72268 41550
                    </p>
                </div>
            </div>
            <div className="p-8 border-b sm:border-r lg:border-r-0">
                <div className="max-w-md text-center">
                    <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-16 sm:h-16 shadow-md">
                        <BuildingOfficeIcon className='w-8 h-8 text-gray-700' />
                    </div>
                    <h6 className="mb-2 font-semibold leading-5 text-gray-800">Address</h6>
                    <p className="mb-3 text-sm text-gray-600">
                        608-A, Pinnacle Business Park, Corporate Road, Prahladnagar, Ahmedabad
                    </p>
                </div>
            </div>
        </div>
    )
}

export default CCTA