import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'

//images
import join1 from '../../src/assets/programs/j1.jpg';
import join2 from '../../src/assets/programs/j2.png';
import join3 from '../../src/assets/programs/j3.png';
import hero from '../../src/assets/programs/hero.jpg';

const ProgramHero = () => {

    const [text] = useTypewriter({
        words: ['budget-friendly.', 'for student benefits.', 'designed to assure best university & degree qualification.'],
        loop: {},
        typeSpeed: 120,
        deleteSpeed: 80,
    });

    return (
        <section className="overflow-hidden">
            <div className="bg-purple-50 overflow-hidden">
                {/* <div className="pt-20 pb-14 bg-purple-50 overflow-hidden"> */}
                <div className="px-10 mx-auto py-44 sm:px-20">
                    {/* <div className="px-10 mx-auto py-36 sm:px-20 sm:py-16 lg:py-28"> */}
                    <div className="flex flex-wrap -m-8">
                        <div className="w-full md:w-1/2 p-8">
                            <div className="md:max-w-lg">

                                {/* <h1 className="text-4xl font-semibold tracking-tight text-gray-800 sm:text-5xl">
                                    Create Pathways for Students to <span className='text-primary'>Study Abroad</span>.
                                </h1> */}

                                {/* <span className="inline-block mb-8 px-3 py-1 text-white font-semibold bg-gray-600 rounded-full">
                                #1 Brand Building Tool</span> */}
                                <h1 className="text-4xl text-center font-semibold tracking-tight text-gray-800 sm:text-5xl sm:text-left">Headstart Programs are <span className='text-primary shadow-md'>{text}</span><span className='text-gray-800'><Cursor cursorStyle='|' /></span></h1>
                                {/* <div className="flex flex-wrap -m-2 mb-14">
                                    <div className="w-auto p-2"><a className="inline-block px-5 py-4 text-white font-semibold tracking-tight bg-indigo-500 hover:bg-indigo-600 rounded-lg focus:ring-4 focus:ring-indigo-400 transition duration-200" href="#">Try 14 Days Free Trial</a></div>
                                    <div className="w-auto p-2">
                                        <a className="inline-flex items-center px-5 py-4 bg-transparent hover:bg-indigo-600 border border-gray-600 hover:border-indigo-600 rounded-lg focus:ring-4 focus:ring-indigo-300 transition duration-200" href="#">
                                            <div className="inline-block">
                                                <svg className="mr-2.5" width="18" height="19" viewbox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M3 12.5L3 13.25C3 14.4926 4.00736 15.5 5.25 15.5L12.75 15.5C13.9926 15.5 15 14.4926 15 13.25L15 12.5M12 9.5L9 12.5M9 12.5L6 9.5M9 12.5L9 3.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                                </svg>
                                            </div>
                                            <span className="text-white font-semibold tracking-tight">Download IOS App</span>
                                        </a>
                                    </div>
                                </div> */}
                                <p className="mt-6 text-sm text-gray-700 font-medium lg:text-base mb-24 text-center sm:text-left">
                                    The carefully hand-picked HeadStart Programs benefit you in a big way as they guarantee you financial freedom,
                                    ensure better universities, provide successful international career and thus help you make right study abroad decision.
                                </p>
                                <div className="max-w-lg">
                                    <div className="flex flex-wrap m-1.5 items-center">
                                        <div className="w-auto p-1.5">
                                            <div className="flex flex-wrap">
                                                <div className="w-auto">
                                                    <img src={join1} className="rounded-full w-10 border-2 border-gray-500 shadow-xl" alt="Join Pic 1" />
                                                </div>
                                                <div className="w-auto -ml-4">
                                                    <img src={join2} className="rounded-full w-10 border-2 border-gray-500 shadow-xl" alt="Join Pic 2" />
                                                </div>
                                                <div className="w-auto -ml-4">
                                                    <img src={join3} className="rounded-full w-10 border-2 border-gray-500 shadow-xl" alt="Join Pic 3" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex-1 p-1.5">
                                            <p className="text-primary tracking-tight font-semibold text-lg">Join now and be a part of 12k+ active students.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 p-8">
                            {/* <img className="transform hover:-translate-y-2 transition duration-500" src="basko-assets/images/headers/dashboard.png" alt="" /> */}
                            <img class="object-cover object-center mx-auto shadow-2xl rounded-2xl sm:rounded-3xl" alt="hero" src={hero} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProgramHero