import React from 'react';
import { Link } from 'react-router-dom';

//components
import Newsletter from '../components/Newsletter';


const Blogs = () => {
  return (
    <div className="flex justify-center items-center">
      {/* <div className="2xl:mx-auto 2xl:container lg:px-20 lg:py-48 md:px-6 py-44 px-4 w-96 sm:w-auto"> --original */}
      <div className="mt-44 mb-36 p-6 mx-auto max-w-sm sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
        <div role="main" className="flex flex-col items-center justify-center">
          <h1 className="text-4xl font-semibold tracking-tight text-center text-primary sm:text-5xl">News & Blogs</h1>
          <p className="text-sm lg:text-base font-medium text-center text-gray-600 mt-6 lg:w-1/2 md:w-10/12 w-11/12">Stay updated with our news and blog for valuable insights and resources. Join our community and access the latest trends and opportunities in education.</p>
        </div>
        <div className="lg:flex items-stretch md:mt-44 mt-28">
          <div className="lg:w-1/2">
            <div className="sm:flex items-center justify-between xl:gap-x-8 gap-x-6">

              <Link className="sm:w-1/2 relative focus:outline-none" to='/post'>
                <div>
                  <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">12 April 2021</p>
                  <div className="absolute bottom-0 left-0 p-6">
                    <h2 className="text-xl font-semibold 5 text-white">How to finance your studies in Germany?</h2>
                    {/* <p className="text-base leading-4 text-white mt-2">Dive into minimalism</p> */}
                    <div to="/post" className="underline focus:no-underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:no-underline">
                      <p className="pr-2 text-sm font-medium leading-none">Read in 2 minutes</p>
                      <svg className="fill-stroke" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                    </div>
                  </div>
                </div>
                <img src="https://dl.dropboxusercontent.com/scl/fi/x4rhxn0977k6xuloi7b9f/finance.jpg?rlkey=9sidug2lx539gkqw1sy23mxqz&dl=0" className="w-full rounded-2xl shadow-xl" alt="finance" />
              </Link>

              <div className="sm:w-1/2 sm:mt-0 mt-4 relative">
                <div>
                  <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">12 April 2021</p>
                  <div className="absolute bottom-0 left-0 p-6">
                    <h2 className="text-xl font-semibold 5 text-white">Top 10 interesting facts about Germany</h2>
                    {/* <p className="text-base leading-4 text-white mt-2">Dive into minimalism</p> */}
                    <Link to="#" className="underline focus:outline-none focus:no-underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:no-underline">
                      <p className="pr-2 text-sm font-medium leading-none">Read in 2 minutes</p>
                      <svg className="fill-stroke" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                    </Link>
                  </div>
                </div>
                <img src="https://dl.dropboxusercontent.com/scl/fi/cly5402njz0daymi6z2ki/facts.jpg?rlkey=9mxvsnjtpa12y6wzswj1z5qqw&dl=0" className="w-full rounded-2xl shadow-xl" alt="germany ballon" />
              </div>
            </div>

            <div className="relative">
              <div>
                <p className="md:p-10 p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">12 April 2021</p>
                <div className="absolute bottom-0 left-0 md:p-10 p-6">
                  <h2 className="text-xl font-semibold 5 text-white">Masters in Germany: Unlocking Academic Excellence and Career Opportunities</h2>
                  {/* <p className="text-base leading-4 text-white mt-2">Dive into minimalism</p> */}
                  <Link to="#" className="underline focus:outline-none focus:no-underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:no-underline">
                    <p className="pr-2 text-sm font-medium leading-none">Read in 12 minutes</p>
                    <svg className="fill-stroke" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </Link>
                </div>
              </div>
              <img src="https://dl.dropboxusercontent.com/scl/fi/6k9kl4d6ji2pl18b7mgab/masters.jpg?rlkey=jpurh0v7rbzowd07knht27oxi&dl=0" alt="student with germany flag" className="w-full rounded-2xl mt-8 md:mt-6 hidden sm:block shadow-xl" />
              <img className="w-full rounded-2xl mt-4 sm:hidden shadow-xl" src="https://dl.dropboxusercontent.com/scl/fi/6k9kl4d6ji2pl18b7mgab/masters.jpg?rlkey=jpurh0v7rbzowd07knht27oxi&dl=0" alt="student with germany flag" />
            </div>

          </div>

          <div className="lg:w-1/2 xl:ml-8 lg:ml-4 lg:mt-0 md:mt-6 mt-4 lg:flex flex-col justify-between">

            <div className="relative">
              <div>
                <p className="md:p-10 p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">12 April 2021</p>
                <div className="absolute bottom-0 left-0 md:p-10 p-6">
                  <h2 className="text-xl font-semibold 5 text-white">Students of 10th & 12th: Which Board to Choose?</h2>
                  {/* <p className="text-base leading-4 text-white mt-2">Dive into minimalism</p> */}
                  <Link to="#" className="underline  focus:outline-none focus:no-underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:no-underline">
                    <p className="pr-2 text-sm font-medium leading-none">Read in 8 minutes</p>
                    <svg className="fill-stroke" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </Link>
                </div>
              </div>
              <img src="https://dl.dropboxusercontent.com/scl/fi/pwxunw7ni23zommvty2kg/confusion.jpg?rlkey=yp7g8ett73dmh5jiwp5rfq3n6&dl=0" alt="confused" className="w-full rounded-2xl sm:block hidden shadow-xl" />
              <img className="w-full rounded-2xl sm:hidden shadow-xl" src="https://dl.dropboxusercontent.com/scl/fi/pwxunw7ni23zommvty2kg/confusion.jpg?rlkey=yp7g8ett73dmh5jiwp5rfq3n6&dl=0" alt="confused" />
            </div>

            <div className="sm:flex items-center justify-between xl:gap-x-8 gap-x-6 md:mt-6 mt-4">

              <div className="relative w-full">
                <div>
                  <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">12 April 2021</p>
                  <div className="absolute bottom-0 left-0 p-6">
                    <h2 className="text-xl font-semibold 5 text-white">Coaching or No Coaching?</h2>
                    {/* <p className="text-base leading-4 text-white mt-2">Dive into minimalism</p> */}
                    <Link to="#" className="underline focus:outline-none focus:no-underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:no-underline">
                      <p className="pr-2 text-sm font-medium leading-none">Read in 4 minutes</p>
                      <svg className="fill-stroke" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                    </Link>
                  </div>
                </div>
                <img src="https://dl.dropboxusercontent.com/scl/fi/01w0zfb6bq6a5egfjht4l/coaching.jpg?rlkey=52jhkkfps98ba23pb4a3xzf8z&dl=0" className="w-full rounded-2xl shadow-xl" alt="coaching" />
              </div>

              <div className="relative w-full sm:mt-0 mt-4">
                <div>
                  <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">12 April 2021</p>
                  <div className="absolute bottom-0 left-0 p-6">
                    <h2 className="text-xl font-semibold 5 text-white">Top 10 Interesting Facts about Austria</h2>
                    {/* <p className="text-base leading-4 text-white mt-2">Dive into minimalism</p> */}
                    <Link to="#" className="underline focus:outline-none focus:no-underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:no-underline">
                      <p className="pr-2 text-sm font-medium leading-none">Read in 3 minutes</p>
                      <svg className="fill-stroke" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                    </Link>
                  </div>
                </div>
                <img src="https://dl.dropboxusercontent.com/scl/fi/ka9l2692ev5v2qagxmjmx/austriafacts.jpg?rlkey=45jwpm0ospyr1sf9ahn7griaf&dl=0" className="w-full rounded-2xl shadow-xl" alt="girl with books" />
              </div>

            </div>
          </div>
        </div>
        <Newsletter/>
      </div>
    </div>
  )
}

export default Blogs