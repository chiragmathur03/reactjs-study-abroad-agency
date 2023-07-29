import React from 'react'
import { Link } from 'react-router-dom'

//icons
// import { FaArrowRight } from 'react-icons/fa'

const PCTA = () => {
  return (
    // <div className="mt-20 py-16 bg-white">
    <div className="">
      {/* //   <div className="container m-auto px-6 space-y-8 text-gray-500 lg:px-20"> */}
      <div className="p-6 mx-auto max-w-sm sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
        <div className="justify-center text-center gap-6 lg:text-left lg:flex lg:items-center lg:gap-16">
          <div className="order-last mb-6 space-y-6 lg:mb-0 lg:w-6/12">
            <h1 className="text-3xl text-gray-800 font-semibold tracking-tight sm:text-4xl">Get Started with our <span className="text-primary">Program.</span></h1>
            <p className=" text-base text-gray-700 md:text-lg mb-12">Join our program and embark on your international educational journey today.</p>

            <div className="flex flex-wrap justify-center gap-4 lg:justify-start">
              <Link to='/connect' type="button" className="w-max py-3 px-6 text-center rounded-xl bg-primary shadow-xl hover:bg-primary-hover active:bg-primary focus:bg-primary-hover duration-300 transition-colors">
                <span className="block text-white font-semibold">
                  Connect
                </span>
              </Link>
              {/* <button type="button" className="w-max py-3 px-6 text-center justify-center rounded-xl bg-gray-100 transition hover:bg-gray-200 active:bg-gray-300 focus:bg-gray-200">
                <span className="flex items-center gap-1.5 text-gray-600 font-semibold">
                  Our Programs <FaArrowRight />
                </span>
              </button> */}
            </div>
          </div>
          <div className="mt-28 lg:mt-0 grid grid-cols-5 grid-rows-4 gap-4 lg:w-6/12">
            <div className="col-span-2 row-span-4">
              {/* <img src="https://dl.dropboxusercontent.com/scl/fi/3t0d7giyh4chiwmvowl1u/1.jpg?rlkey=zbpqh971s5bu3ic8us913pkb8&dl=0" className="rounded-full" width="640" height="960" alt="shoes" loading="lazy" />    */}
              <img src="https://dl.dropboxusercontent.com/scl/fi/3t0d7giyh4chiwmvowl1u/1.jpg?rlkey=zbpqh971s5bu3ic8us913pkb8&dl=0" className="rounded-full shadow-2xl" width="640" height="960" alt="Student with Books" />
            </div>
            <div className="col-span-2 row-span-2">
              <img src="https://dl.dropboxusercontent.com/scl/fi/ont67gwrw0iyuoveelh5r/3.jpg?rlkey=c0nb31kq4cutd2tebvm6967jk&dl=0" className="w-full h-full object-cover object-top shadow-2xl rounded-2xl sm:rounded-3xl" width="640" height="640" alt="Student Holding Degree" />
            </div>
            <div className="col-span-3 row-span-3">
              <img src="https://dl.dropboxusercontent.com/scl/fi/uu2dzzxsxwd0zgq319727/2.jpg?rlkey=q1kf1th31uq7tdh0bek4q4x6i&dl=0" className="w-full h-full object-cover object-top shadow-2xl rounded-2xl sm:rounded-3xl" width="640" height="427" alt="Student Sitting with Bag" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PCTA