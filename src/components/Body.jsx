import React from 'react'

//Icons
import { PiStudent } from 'react-icons/pi';
import { SlBadge } from 'react-icons/sl';
import { SiSemanticscholar } from 'react-icons/si';
import { LuVerified } from 'react-icons/lu';
import { AiOutlineStar, AiOutlineSolution } from 'react-icons/ai';
import { BiUserVoice } from 'react-icons/bi';
import { RiHandCoinLine } from 'react-icons/ri';
import { LiaUniversitySolid, LiaHandsHelpingSolid } from 'react-icons/lia';
import { MdOutlineAssignment } from 'react-icons/md';
import { TiTickOutline } from 'react-icons/ti';
import { TbProgressCheck } from 'react-icons/tb';

//Components
import Features from './Features';
import { Link } from 'react-router-dom';

const Body = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">

            {/* Stats */}
            <div className=" pb-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                <div className="text-center">
                    <div className="flex items-center justify-center w-16 h-16 mx-auto mb-3 rounded-full bg-cyan-50">
                        <PiStudent className="w-8 h-8  sm:w-10 sm:h-10 text-cyan-800" />
                    </div>
                    <h6 className="text-2xl lg:text-4xl font-bold text-cyan-800">25000+</h6>
                    <p className="mb-2 font-bold text-md text-gray-600">Student Counselled</p>
                </div>
                <div className="text-center">
                    <div className="flex items-center justify-center w-16 h-16 mx-auto mb-3 rounded-full bg-indigo-50">
                        <SlBadge className="w-8 h-8  sm:w-10 sm:h-10 text-indigo-400" />
                    </div>
                    <h6 className="text-2xl lg:text-4xl font-bold text-indigo-400">3000+</h6>
                    <p className="mb-2 font-bold text-md text-gray-600">Placed Successfully</p>
                </div>
                <div className="text-center">
                    <div className="flex items-center justify-center w-16 h-16 mx-auto mb-3 rounded-full bg-green-50">
                        <LuVerified className="w-8 h-8  sm:w-10 sm:h-10 text-green-700" />
                    </div>
                    <h6 className="text-2xl lg:text-4xl font-bold text-green-700">99%</h6>
                    <p className="mb-2 font-bold text-md text-gray-600">Visa Success Rate</p>
                </div>
                <div className="text-center">
                    <div className="flex items-center justify-center w-16 h-16 mx-auto mb-3 rounded-full bg-orange-50">
                        <AiOutlineStar className="w-8 h-8  sm:w-10 sm:h-10 text-orange-900" />
                    </div>
                    <h6 className="text-2xl lg:text-4xl font-bold text-orange-900">20+</h6>
                    <p className="mb-2 font-bold text-md text-gray-600">Years of Experience</p>
                </div>
            </div>

            <Features />

            {/* Why Us */}
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="flex flex-wrap -mx-4">
                    <div className="w-full px-4">
                        <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
                            {/* <span className="block mb-2 text-lg font-semibold text-primary">
                                Our Services
                            </span> */}
                            <h2 className="mb-4 text-3xl font-bold text-primary sm:text-4xl md:text-[40px]">
                                Why Us?
                            </h2>
                            <p className="text-xl text-gray-600 font-semibold">
                                9 Main Reasons to Choose HeadStart
                            </p>
                        </div>
                    </div>
                </div>
                <div className="grid row-gap-8 sm:row-gap-0 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="p-8 border-b sm:border-r">
                        <div className="max-w-md text-center">
                            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-16 sm:h-16">
                                <TiTickOutline className='w-8 h-8 text-gray-700' />
                            </div>
                            <h6 className="mb-2 font-semibold leading-5 text-gray-800">Expertise</h6>
                            <p className="mb-3 text-sm text-gray-600">
                                Our team consists of experienced and qualified professionals with in-depth knowledge of the education systems and admission processes of various countries.
                            </p>
                        </div>
                    </div>
                    <div className="p-8 border-b lg:border-r">
                        <div className="max-w-md text-center">
                            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-16 sm:h-16">
                                <AiOutlineSolution className='w-10 h-10 text-gray-700' />
                            </div>
                            <h6 className="mb-2 font-semibold leading-5 text-gray-800">Customized Solutions</h6>
                            <p className="mb-3 text-sm text-gray-600">
                                We understand that each student is unique, and we provide personalized solutions based on their individual needs and requirements.
                            </p>
                        </div>
                    </div>
                    <div className="p-8 border-b sm:border-r lg:border-r-0">
                        <div className="max-w-md text-center">
                            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-16 sm:h-16">
                                <TbProgressCheck className='w-10 h-10 text-gray-700' />
                            </div>
                            <h6 className="mb-2 font-semibold leading-5 text-gray-800">Transparency</h6>
                            <p className="mb-3 text-sm text-gray-600">
                                We maintain complete transparency throughout the process, and our students are regularly updated about the progress of their application.
                            </p>
                        </div>
                    </div>
                    <div className="p-8 border-b lg:border-r">
                        <div className="max-w-md text-center">
                            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-16 sm:h-16">
                                <RiHandCoinLine className='w-10 h-10 text-gray-700' />
                            </div>
                            <h6 className="mb-2 font-semibold leading-5">Affordable Services</h6>
                            <p className="mb-3 text-sm text-gray-600">
                                We believe that everyone deserves quality education and we offer the lowest fee packages.
                            </p>
                        </div>
                    </div>
                    <div className="p-8 border-b sm:border-r">
                        <div className="max-w-md text-center">
                            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-16 sm:h-16">
                                <LiaUniversitySolid className='w-10 h-10 text-gray-700' />
                            </div>
                            <h6 className="mb-2 font-semibold leading-5">University Selection</h6>
                            <p className="mb-3 text-sm text-gray-900">
                                We help students select the right course, college or university, and country based on their academic profile, interests, and budget.
                            </p>
                        </div>
                    </div>

                    <div className="p-8 border-b">
                        <div className="max-w-md text-center">
                            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-16 sm:h-16">
                                <LiaHandsHelpingSolid className='w-10 h-10 text-gray-700' />
                            </div>
                            <h6 className="mb-2 font-semibold leading-5">Assistance Guidance</h6>
                            <p className="mb-3 text-sm text-gray-900">
                                We assist students in the entire application process, including filling out application forms, writing SOPs, essays, and letters of recommendation etc.
                            </p>
                        </div>

                    </div>

                    <div className="p-8 border-b sm:border-r lg:border-b-0">
                        <div className="max-w-md text-center">
                            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-16 sm:h-16">
                                <MdOutlineAssignment className='w-10 h-10 text-gray-700' />
                            </div>
                            <h6 className="mb-2 font-semibold leading-5">Visa Assistance</h6>
                            <p className="mb-3 text-sm text-gray-900">
                                We guide students through the visa process, including preparing the required documents, scheduling visa workshops, and providing guidance on visa interview preparation.
                            </p>
                        </div>
                    </div>

                    <div className="p-8 border-b lg:border-b-0 lg:border-r">
                        <div className="max-w-md text-center">
                            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-16 sm:h-16">
                                <BiUserVoice className='w-10 h-10 text-gray-700' />
                            </div>
                            <h6 className="mb-2 font-semibold leading-5">Pre-Departure Briefing</h6>
                            <p className="mb-3 text-sm text-gray-900">
                                We provide students with a comprehensive briefing on what to expect once they reach their destination country, including information on accommodation, travel, and orientation.
                            </p>
                        </div>
                    </div>

                    <div className="p-8 sm:border-r lg:border-r-0">
                        <div className="max-w-md text-center">
                            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-16 sm:h-16">
                                <SiSemanticscholar className='w-10 h-10 text-gray-700' />
                            </div>
                            <h6 className="mb-2 font-semibold leading-5">Scholarship Assistance</h6>
                            <p className="mb-3 text-sm text-gray-900">
                                We provide information on available scholarships and assist students in applying.
                            </p>
                        </div>
                    </div>
                </div>
            </div>


            {/* Program Promise Banner */}
            <div className="bg-white">
                <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
                    <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl rounded-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
                        <svg
                            viewBox="0 0 1024 1024"
                            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
                            aria-hidden="true"
                        >
                            <circle cx={512} cy={512} r={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
                            <defs>
                                <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                                    <stop stopColor="#7775D6" />
                                    <stop offset={1} stopColor="#E935C1" />
                                </radialGradient>
                            </defs>
                        </svg>
                        <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
                            <h2 className="text-3xl font-bold text-white sm:text-4xl">
                                Our Programs Promise a
                                <br />
                                Successful International Career.
                            </h2>
                            <p className="mt-6 text-lg leading-8 text-gray-300">
                                Unlock your potential, join HeadStart Programs for success, personalized services, and global job opportunities.
                            </p>
                            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                                <Link
                                    to="/connect"
                                    className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                                >
                                    Let's Connect
                                </Link>
                                <Link to="/programs" className="text-sm font-semibold leading-6 text-white">
                                    Learn more <span aria-hidden="true">→</span>
                                </Link>
                            </div>
                        </div>
                        <div className="relative mt-16 h-80 lg:mt-8">
                            <img
                                className="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
                                src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
                                alt="App screenshot"
                                width={1824}
                                height={1080}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Body