import React from 'react'

const AboutInfo = () => {
    return (
        <div className="flex flex-col mx-auto space-y-12">
            <div className="relative">
                {/* mt-2 text-3xl font-bold tracking-tight text-primary sm:text-4xl */}
                <h2 className="w-full title text-center">About Us</h2>
                <p className="w-full py-8 mx-auto -mt-2 subdesc text-center sm:max-w-3xl">Add some nice touches to your interface with our latest designs, components, and templates. We've crafted a beautiful user experience that your visitors will love. </p>
            </div>
            <div className="flex flex-col mb-10 animated fadeIn sm:flex-row">
                <div className="flex items-center mb-16 sm:w-1/2 md:w-5/12 sm:order-last">
                    <img className="rounded-lg shadow-xl" src='https://dl.dropboxusercontent.com/scl/fi/2xgwdibh2g91woux2fxe5/commitments.jpg?rlkey=9t77lclo7cvwspq2g41hj8k02&dl=0' alt="Commitments" />
                </div>
                <div className="flex flex-col justify-center mt-5 mb-8 md:mt-0 sm:w-1/2 md:w-7/12 sm:pr-16">
                    {/* <p className="mb-2 text-sm font-semibold leading-none text-left text-indigo-600 uppercase">Drag-n-drop design</p> */}
                    <h3 className="mt-2 text-xl font-semibold sm:text-left sm:text-2xl text-gray-800">Our Commitments</h3>
                    <p className="mt-5 text">We are dedicated to offering affordable study programs that bring value to students who dream of pursuing their academic goals in various countries. Our commitment lies in providing opportunities for education that are accessible and enriching, empowering students to fulfill their aspirations and unlock their potential on an international scale.
                    </p>
                </div>
            </div>
            <div className="flex flex-col mb-10 animated fadeIn sm:flex-row">
                <div className="flex items-center mb-16 sm:w-1/2 md:w-5/12">
                    <img className="rounded-lg shadow-xl" src='https://dl.dropboxusercontent.com/scl/fi/gjye4ck4gsu1h6ykd5yj9/objective.jpg?rlkey=4efckjkjbdx4xrrtjkaudtvb5&dl=0' alt="Objective" />
                </div>
                <div className="flex flex-col justify-center mt-5 mb-8 md:mt-0 sm:w-1/2 md:w-7/12 sm:pl-16">
                    {/* <p className="mb-2 text-sm font-semibold leading-none text-left text-indigo-600 uppercase">know your data</p> */}
                    <h3 className="mt-2 text-xl font-semibold sm:text-left sm:text-2xl text-gray-800">Our Objective</h3>
                    <p className="mt-5 text">All along our objective at HeadStart has been to benefit the Indian student community. “We Work for YOUR benefits only” being our sole motto behind our carefully picked affordable programs along with comprehensive and personalised guidance is to ensure best education with cost-effectiveness to help you make your dream of studying abroad a reality.</p>
                </div>
            </div>
            <div className="flex flex-col mb-10 animated fadeIn sm:flex-row">
                <div className="flex items-center mb-16 sm:w-1/2 md:w-5/12 sm:order-last">
                    <img className="rounded-lg shadow-xl" src='https://dl.dropboxusercontent.com/scl/fi/o7utsbd4uuljdpwq5juu1/benefits.jpg?rlkey=ykxlj2hbqxk7pv711ok1lhzzx&dl=0' alt="Student Benefits" />
                </div>
                <div className="flex flex-col justify-center mt-5 mb-8 md:mt-0 sm:w-1/2 md:w-7/12 sm:pr-16">
                    {/* <p className="mb-2 text-sm font-semibold leading-none text-left text-indigo-600 uppercase">Easy to customize</p> */}
                    <h3 className="mt-2 text-xl font-semibold sm:text-left sm:text-2xl text-gray-800">Work for your Benefit</h3>
                    <p className="mt-5 text">Whether you are looking for ranked university admissions after 12th, or affordable study programs or scholarships or may be internships during bachelors program or after that or a good Masters/ PhD program with excellent job opportunities, look no further, HeadStart has covered you all. HeadStart is an organisation that focuses on helping students succeed in their academic and professional lives. It works diligently for your profitability. At HeadStart, our motto is to give students the advantage of economical study and career pathways, secure the best university admissions, and open doors to excellent job opportunities. In short, we are here only to bring you benefits!</p>
                </div>
            </div>
        </div>
    )
}

export default AboutInfo