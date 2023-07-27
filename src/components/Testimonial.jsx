import React from "react";

//testimonials
import bhaskar from '../assets/testimonials/bhaskar.png';
import sumeet from '../assets/testimonials/sumeet.jpg';
import ekta from '../assets/testimonials/ekta.png';
import aakash from '../assets/testimonials/aakash.jpg';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Testimonial = () => {
    return (
        <div className="space-y-8" id='testimonials'>
            {/* <div className="px-4 py-16 mx-auto max-w-2xl text-center"> */}
            <div className="text-center">
                {/* <h2 className="text-base font-semibold leading-7 text-indigo-600">Deploy faster</h2> */}
                <h2 className="mb-6 title">
                    Our Student Reviews
                </h2>
                <p className="subdesc">
                    Trusted by Thousands of Students.
                </p>
            </div>
            <section className="relative isolate overflow-hidden bg-white">
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
                <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />

                <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
                    <figure className="max-w-screen-md mx-auto">
                        <svg className="h-12 mx-auto mb-3 text-gray-400" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor" />
                        </svg>

                        {/* Testing Block */}
                        <Swiper
                            spaceBetween={30}
                            centeredSlides={true}
                            autoplay={{
                                delay: 4000,
                                disableOnInteraction: true,
                            }}
                            pagination={{
                                clickable: true,
                            }}
                            navigation={true}
                            modules={[Autoplay, Pagination, Navigation]}
                            className="mySwiper"
                        >
                            <SwiperSlide className="p-6 pb-16">
                                <div className="px-12">
                                    <blockquote>
                                        <p className="text-sm md:text-lg font-medium text-gray-800">“After looking for various options to study in Europe, I decided with the help of Headstart counselors to study Masters in Business in Belgium. I am very happy, I took this decision.”</p>
                                    </blockquote>
                                    <figcaption className="flex flex-col gap-4 sm:flex-row items-center sm:justify-center mt-6 space-x-3">
                                        <img className="w-12 h-12 rounded-full" src={sumeet} alt="Sumeet" />
                                        <div className="flex flex-col sm:flex-row items-center sm:divide-x-2 sm:divide-gray-500">
                                            <div className="sm:pr-3 font-medium text-gray-800 text-sm md:text-base">Sumeet Sondhi</div>
                                            <div className="sm:pl-3 text-sm font-light text-gray-500">Masters (Business) in Belgium</div>
                                        </div>
                                    </figcaption>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="p-6 pb-16">
                                <div className="px-12">
                                    <blockquote>
                                        <p className="text-sm md:text-lg font-medium text-gray-800">“The Entire Education and the visa process was simplified for me with the help of systematic approch of the excellent counselors at Headstart.”</p>
                                    </blockquote>
                                    <figcaption className="flex flex-col gap-4 sm:flex-row items-center sm:justify-center mt-6 space-x-3">
                                        <img className="w-12 h-12 rounded-full" src={bhaskar} alt="Bhaskar" />
                                        <div className="flex flex-col sm:flex-row items-center sm:divide-x-2 sm:divide-gray-500">
                                            <div className="sm:pr-3 font-medium text-gray-800">Bhaskar Khatri</div>
                                            <div className="sm:pl-3 text-sm font-light text-gray-500">Masters (Nursing) in Australia</div>
                                        </div>
                                    </figcaption>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="p-6 pb-16">
                                <div className="px-12">
                                    <blockquote>
                                        <p className="text-sm md:text-lg font-medium text-gray-800">“Headstart changed my life! I couldn't have ever imagined that I'd be studying & living in a city like Frankfurt & Berlin on my own. I'm overwhelmed with the gratitude towards Mamta Ma'am.”</p>
                                    </blockquote>
                                    <figcaption className="flex flex-col gap-4 sm:flex-row items-center sm:justify-center mt-6 space-x-3">
                                        <img className="w-12 h-12 rounded-full" src={ekta} alt="Ekta" />
                                        <div className="flex flex-col sm:flex-row items-center sm:divide-x-2 sm:divide-gray-500">
                                            <div className="sm:pr-3 font-medium text-gray-800">Ekta Parmar</div>
                                            <div className="sm:pl-3 text-sm font-light text-gray-500">Study (Medicine) in Germany</div>
                                        </div>
                                    </figcaption>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="p-6 pb-16">
                                <div className="px-12">
                                    <blockquote>
                                        <p className="text-sm md:text-lg font-medium text-gray-800">“I am thanful to everybody in Headstart, specially for encouraging me to overcome my fears & flaws in communicating. Germany - A Dream come True for me.”</p>
                                    </blockquote>
                                    <figcaption className="flex flex-col gap-4 sm:flex-row items-center sm:justify-center mt-6 space-x-3">
                                        <img className="w-12 h-12 rounded-full" src={aakash} alt="Aakash" />
                                        <div className="flex flex-col sm:flex-row items-center sm:divide-x-2 sm:divide-gray-500">
                                            <div className="sm:pr-3 font-medium text-gray-800">Aakash Shete</div>
                                            <div className="sm:pl-3 text-sm font-light text-gray-500">Studying (Enginnering) in Germany</div>
                                        </div>
                                    </figcaption>
                                </div></SwiperSlide>
                        </Swiper>

                        {/* Testing Block */}

                        {/* <blockquote>
                            <p className="text-2xl font-medium text-gray-800 dark:text-white">“The Entire Education and the visa process was simplified for me with the help of systematic approch of the excellent counselors at Headstart.”</p>
                        </blockquote>
                        <figcaption className="flex items-center justify-center mt-6 space-x-3">
                            <img className="w-12 h-12 rounded-full" src={bhaskar} alt="Bhaskar" />
                            <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                                <div className="pr-3 font-medium text-gray-800 dark:text-white">Bhaskar Khatri</div>
                                <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">Masters (Nursing) in Australia</div>
                            </div>
                        </figcaption> */}
                    </figure>
                </div>
            </section>
        </div>
    )


};

export default Testimonial
