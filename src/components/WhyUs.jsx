import React from 'react'

//Icons
import { SiSemanticscholar } from 'react-icons/si';
import { BiUserVoice } from 'react-icons/bi';
import { RiHandCoinLine } from 'react-icons/ri';
import { LiaUniversitySolid, LiaHandsHelpingSolid } from 'react-icons/lia';
import { MdOutlineAssignment } from 'react-icons/md';
import { TiTickOutline } from 'react-icons/ti';
import { TbProgressCheck } from 'react-icons/tb';
import { AiOutlineSolution } from 'react-icons/ai';


const WhyUs = () => {
    return (
        <div>
            <div className="flex flex-wrap -mx-4">
                <div className="w-full px-4">
                    <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
                        {/* <span className="block mb-2 text-lg font-semibold text-primary">
                                Our Services
                            </span> */}
                        <h2 className="mb-4 title">
                            Why Us?
                        </h2>
                        <p className="mb-10 subdesc">
                            9 Main Reasons to Choose Headstart
                        </p>
                    </div>
                </div>
            </div>
            <div className="grid row-gap-8 sm:row-gap-0 sm:grid-cols-2 lg:grid-cols-3">
                <div className="p-8 border-b sm:border-r">
                    <div className="max-w-md text-center">
                        <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-16 sm:h-16 shadow-md">
                            <TiTickOutline className='w-8 h-8 text-gray-700' />
                        </div>
                        <h6 className="mb-2 font-semibold leading-5 text-gray-800">Expertise</h6>
                        <p className="mb-3 text-sm text-gray-700 leading-5">
                            Our team consists of experienced and qualified professionals with in-depth knowledge of the education systems and admission processes of various countries.
                        </p>
                    </div>
                </div>
                <div className="p-8 border-b lg:border-r">
                    <div className="max-w-md text-center">
                        <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-16 sm:h-16 shadow-md">
                            <AiOutlineSolution className='w-10 h-10 text-gray-700' />
                        </div>
                        <h6 className="mb-2 font-semibold leading-5 text-gray-800">Customized Solutions</h6>
                        <p className="mb-3 text-sm text-gray-700 leading-5">
                            We understand that each student is unique, and we provide personalized solutions based on their individual needs and requirements.
                        </p>
                    </div>
                </div>
                <div className="p-8 border-b sm:border-r lg:border-r-0">
                    <div className="max-w-md text-center">
                        <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-16 sm:h-16 shadow-md">
                            <TbProgressCheck className='w-10 h-10 text-gray-700' />
                        </div>
                        <h6 className="mb-2 font-semibold leading-5 text-gray-800">Transparency</h6>
                        <p className="mb-3 text-sm text-gray-700 leading-5">
                            We maintain complete transparency throughout the process, and our students are regularly updated about the progress of their application.
                        </p>
                    </div>
                </div>
                <div className="p-8 border-b lg:border-r">
                    <div className="max-w-md text-center">
                        <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-16 sm:h-16 shadow-md">
                            <RiHandCoinLine className='w-10 h-10 text-gray-700' />
                        </div>
                        <h6 className="mb-2 font-semibold leading-5">Affordable Services</h6>
                        <p className="mb-3 text-sm text-gray-700 leading-5">
                            We believe that everyone deserves quality education and we offer the lowest fee packages.
                        </p>
                    </div>
                </div>
                <div className="p-8 border-b sm:border-r">
                    <div className="max-w-md text-center">
                        <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-16 sm:h-16 shadow-md">
                            <LiaUniversitySolid className='w-10 h-10 text-gray-700' />
                        </div>
                        <h6 className="mb-2 font-semibold leading-5">University Selection</h6>
                        <p className="mb-3 text-sm text-gray-700 leading-5">
                            We help students select the right course, college or university, and country based on their academic profile, interests, and budget.
                        </p>
                    </div>
                </div>

                <div className="p-8 border-b">
                    <div className="max-w-md text-center">
                        <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-16 sm:h-16 shadow-md">
                            <LiaHandsHelpingSolid className='w-10 h-10 text-gray-700' />
                        </div>
                        <h6 className="mb-2 font-semibold leading-5">Assistance Guidance</h6>
                        <p className="mb-3 text-sm text-gray-700 leading-5">
                            We assist students in the entire application process, including filling out application forms, writing SOPs, essays, and letters of recommendation etc.
                        </p>
                    </div>

                </div>

                <div className="p-8 border-b sm:border-r lg:border-b-0">
                    <div className="max-w-md text-center">
                        <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-16 sm:h-16 shadow-md">
                            <MdOutlineAssignment className='w-10 h-10 text-gray-700' />
                        </div>
                        <h6 className="mb-2 font-semibold leading-5">Visa Assistance</h6>
                        <p className="mb-3 text-sm text-gray-700 leading-5">
                            We guide students through the visa process, including preparing the required documents, scheduling visa workshops, and providing guidance on visa interview preparation.
                        </p>
                    </div>
                </div>

                <div className="p-8 border-b lg:border-b-0 lg:border-r">
                    <div className="max-w-md text-center">
                        <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-16 sm:h-16 shadow-md">
                            <BiUserVoice className='w-10 h-10 text-gray-700' />
                        </div>
                        <h6 className="mb-2 font-semibold leading-5">Pre-Departure Briefing</h6>
                        <p className="mb-3 text-sm text-gray-700 leading-5">
                            We provide students with a comprehensive briefing on what to expect once they reach their destination country, including information on accommodation, travel, and orientation.
                        </p>
                    </div>
                </div>

                <div className="p-8 sm:border-r lg:border-r-0">
                    <div className="max-w-md text-center">
                        <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-16 sm:h-16 shadow-md">
                            <SiSemanticscholar className='w-10 h-10 text-gray-700' />
                        </div>
                        <h6 className="mb-2 font-semibold leading-5">Scholarship Assistance</h6>
                        <p className="mb-3 text-sm text-gray-700 leading-5">
                            We provide information on available scholarships and assist students in applying.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhyUs