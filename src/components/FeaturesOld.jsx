import React from "react";

//Icons
import { GiPayMoney } from 'react-icons/gi'
import { FaUniversity } from 'react-icons/fa'
import { BsBriefcaseFill } from 'react-icons/bs'
import { GiSkills } from 'react-icons/gi'
import { MdModelTraining } from 'react-icons/md'
import { PiStudentFill } from 'react-icons/pi'

const Features = () => {
    return (
        <section className="pt-20 pb-12 lg:pt-[120px] lg:pb-[90px]">
            {/* <div className="container flex flex-col items-center"> */}
            <div className="container">
                <div className="max-w-xl mb-10 text-center md:mx-auto lg:max-w-2xl md:mb-12">
                    <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                        <span className="relative inline-block">
                            <svg
                                viewBox="0 0 52 24"
                                fill="currentColor"
                                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                            >
                                <defs>
                                    <pattern
                                        id="903f4a9e-7ac3-441c-9613-04c15fcc0a14"
                                        x="0"
                                        y="0"
                                        width=".135"
                                        height=".30"
                                    >
                                        <circle cx="1" cy="1" r=".7" />
                                    </pattern>
                                </defs>
                                <rect
                                    fill="url(#903f4a9e-7ac3-441c-9613-04c15fcc0a14)"
                                    width="52"
                                    height="24"
                                />
                            </svg>
                            <span className="relative text-primary">Features</span>
                        </span>
                    </h2>
                    <p className="text-sm lg:text-base text-gray-600 font-medium mb-10">
                        Our entire team works enthusiastically to guide you about Headstart Programs
                        which give you the following benefits:
                    </p>
                </div>
                {/* <div className="flex flex-wrap -mx-4 w-[80%] h-[80%]"> */}
                <div className="flex flex-wrap">
                    <FeatureCard
                        title="No/Low Tuition Fee"
                        details="We provide no/low tuition fee options for accessible and affordable education."
                        icon={
                            <GiPayMoney className="text-white w-auto h-32" />
                        }
                    />
                    <FeatureCard
                        title="Higher Ranked University"
                        details="We offer programs affiliated with higher-ranked universities for quality education."
                        icon={
                            <FaUniversity className="text-white w-auto h-32" />
                        }
                    />
                    <FeatureCard
                        title="Better Job Prospects"
                        details="Our programs provide better job prospects for future career success."
                        icon={
                            <BsBriefcaseFill className="text-white w-auto h-32" />
                        }
                    />
                    <FeatureCard
                        title="Skill Based Programs"
                        details="To enhance practical expertise and career readiness."
                        icon={
                            <GiSkills className="text-white w-auto h-32" />
                        }
                    />
                    <FeatureCard
                        title="On the Job Training"
                        details="To provide real-world experience and practical skills."
                        icon={
                            <MdModelTraining className="text-white w-auto h-32" />
                        }
                    />
                    <FeatureCard
                        title="Scholarship & Financial Aid"
                        details="To support students in pursuing their educational goals."
                        icon={
                            <PiStudentFill className="text-white w-auto h-32" />
                        }
                    />
                </div>
            </div>
        </section>
    );
};

export default Features;

const FeatureCard = ({ icon, title, details }) => {
    return (
        <>
            {/* <div className="w-full px-4 md:w-1/2 lg:w-1/3"> */}
            <div className="mt-10 px-2 w-1/2 lg:w-1/6">
                <div className="mb-2 rounded-[20px] bg-white p-5 shadow-md md:px-2 xl:px-5">
                    <div
                        className={`mb-6 flex h-[60px] w-[60px] p-3 items-center justify-center rounded-2xl bg-primary`}>
                        {icon}
                    </div>
                    <h4 className="mb-2 font-semibold text-primary">{title}</h4>
                    {/* <p className="text-base font-medium">{details}</p> */}
                </div>
            </div>
        </>
    );
};
