import React from 'react'
import { Link } from 'react-router-dom';

//icons
import { FaArrowRight } from 'react-icons/fa';

const Banner = () => {
    return (
        <div className="mx-auto">
            <div className="bg-cover bg-center h-auto text-white py-16 px-6 object-fill shadow-2xl rounded-2xl sm:rounded-3xl sm:px-20 sm:py-20" style={{ backgroundImage: 'url(https://dl.dropboxusercontent.com/scl/fi/1zf4tfj53xpuekmbbmqy4/promise6.png?rlkey=j69dizr3zuyx0der1sd56qjuc&dl=0)' }}>
                <div className="md:w-1/2">
                    <h2 className="title text-white">Our Program Promise a Successful International Career.</h2>
                    <p className="mt-6 text-base leading-7 text-gray-300">Want to unlock your potential? Join Headstart Programs for success, personalized services, and global job opportunnities.</p>
                </div>
                <div className='mt-10 flex items-center justify-start gap-x-6'>
                    <Link
                        to="/connect"
                        className="btn bg-white text-primary hover:bg-gray-300"
                    >
                        Connect
                    </Link>
                    <Link to="/programs" className="text-sm font-semibold flex gap-1.5 items-center leading-6 text-white hover:text-gray-300 duration-300 transition-colors">
                        Our Programs <FaArrowRight />
                    </Link>
                </div>
            </div>
            <br />
        </div>
    )
}

export default Banner