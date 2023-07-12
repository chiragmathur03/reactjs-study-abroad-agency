import React from 'react'
import { Link } from 'react-router-dom'

// Onemore - https://tailwindcomponents.com/component/tailwind-css-sigup-form
const Blogs = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="2xl:mx-auto 2xl:container lg:px-20 lg:py-48  md:px-6 py-44 px-4 w-96 sm:w-auto">
        <div role="main" className="flex flex-col items-center justify-center">
          <h1 className="text-4xl font-semibold leading-9 text-center text-primary dark:text-gray-50">News & Blogs</h1>
          <p className="text-base leading-normal text-center text-gray-600 dark:text-white mt-4 lg:w-1/2 md:w-10/12 w-11/12">Stay updated with our news and blog for valuable insights and resources. Join our community and access the latest trends and opportunities in education.</p>
        </div>
        <div className="lg:flex items-stretch md:mt-44 mt-28">
          <div className="lg:w-1/2">
            <div className="sm:flex items-center justify-between xl:gap-x-8 gap-x-6">
              <div className="sm:w-1/2 relative">
                <div>
                  <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">12 April 2021</p>
                  <div className="absolute bottom-0 left-0 p-6">
                    <h2 className="text-xl font-semibold 5 text-white">How to Finance your Studies in Germany</h2>
                    {/* <p className="text-base leading-4 text-white mt-2">Dive into minimalism</p> */}
                    <Link to="#" className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                      <p className="pr-2 text-sm font-medium leading-none">Read More</p>
                      <svg className="fill-stroke" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                    </Link>
                  </div>
                </div>
                <img src="https://i.ibb.co/DYxtCJq/img-1.png" className="w-full rounded-2xl" alt="chair" />
              </div>
              <div className="sm:w-1/2 sm:mt-0 mt-4 relative">
                <div>
                  <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">12 April 2021</p>
                  <div className="absolute bottom-0 left-0 p-6">
                    <h2 className="text-xl font-semibold 5 text-white">Top 10 Interesting Facts about Germany</h2>
                    {/* <p className="text-base leading-4 text-white mt-2">Dive into minimalism</p> */}
                    <Link to="#" className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                      <p className="pr-2 text-sm font-medium leading-none">Read More</p>
                      <svg className="fill-stroke" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                    </Link>
                  </div>
                </div>
                <img src="https://i.ibb.co/3C5HvxC/img-2.png" className="w-full rounded-2xl" alt="wall design" />
              </div>
            </div>
            <div className="relative">
              <div>
                <p className="md:p-10 p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">12 April 2021</p>
                <div className="absolute bottom-0 left-0 md:p-10 p-6">
                  <h2 className="text-xl font-semibold 5 text-white">Masters in Germany: Unlocking Academic Excellence and Career Opportunities</h2>
                  {/* <p className="text-base leading-4 text-white mt-2">Dive into minimalism</p> */}
                  <Link to="#" className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                    <p className="pr-2 text-sm font-medium leading-none">Read More</p>
                    <svg className="fill-stroke" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </Link>
                </div>
              </div>
              <img src="https://i.ibb.co/Ms4qyXp/img-3.png" alt="sitting place" className="w-full rounded-2xl mt-8 md:mt-6 hidden sm:block" />
              <img className="w-full rounded-2xl mt-4 sm:hidden" src="https://i.ibb.co/6XYbN7f/Rectangle-29.png" alt="sitting place" />
            </div>
          </div>
          <div className="lg:w-1/2 xl:ml-8 lg:ml-4 lg:mt-0 md:mt-6 mt-4 lg:flex flex-col justify-between">
            <div className="relative">
              <div>
                <p className="md:p-10 p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">12 April 2021</p>
                <div className="absolute bottom-0 left-0 md:p-10 p-6">
                  <h2 className="text-xl font-semibold 5 text-white">Students of 10th & 12th: Which Board to Choose?</h2>
                  {/* <p className="text-base leading-4 text-white mt-2">Dive into minimalism</p> */}
                  <Link to="#" className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                    <p className="pr-2 text-sm font-medium leading-none">Read More</p>
                    <svg className="fill-stroke" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </Link>
                </div>
              </div>
              <img src="https://i.ibb.co/6Wfjf2w/img-4.png" alt="sitting place" className="w-full rounded-2xl sm:block hidden" />
              <img className="w-full rounded-2xl sm:hidden" src="https://i.ibb.co/dpXStJk/Rectangle-29.png" alt="sitting place" />
            </div>
            <div className="sm:flex items-center justify-between xl:gap-x-8 gap-x-6 md:mt-6 mt-4">
              <div className="relative w-full">
                <div>
                  <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">12 April 2021</p>
                  <div className="absolute bottom-0 left-0 p-6">
                    <h2 className="text-xl font-semibold 5 text-white">Coaching or No Coaching?</h2>
                    {/* <p className="text-base leading-4 text-white mt-2">Dive into minimalism</p> */}
                    <Link to="#" className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                      <p className="pr-2 text-sm font-medium leading-none">Read More</p>
                      <svg className="fill-stroke" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                    </Link>
                  </div>
                </div>
                <img src="https://i.ibb.co/3yvZBpm/img-5.png" className="w-full rounded-2xl" alt="chair" />
              </div>
              <div className="relative w-full sm:mt-0 mt-4">
                <div>
                  <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">12 April 2021</p>
                  <div className="absolute bottom-0 left-0 p-6">
                    <h2 className="text-xl font-semibold 5 text-white">Top 10 Interesting Facts about Austria</h2>
                    {/* <p className="text-base leading-4 text-white mt-2">Dive into minimalism</p> */}
                    <Link to="#" className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                      <p className="pr-2 text-sm font-medium leading-none">Read More</p>
                      <svg className="fill-stroke" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                    </Link>
                  </div>
                </div>
                <img src="https://i.ibb.co/gDdnJb5/img-6.png" className="w-full rounded-2xl" alt="wall design" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blogs