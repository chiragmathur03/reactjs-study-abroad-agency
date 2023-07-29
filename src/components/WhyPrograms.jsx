import React from 'react'
import { HashLink } from 'react-router-hash-link'
//icons
import { FaArrowRight } from 'react-icons/fa'
import { BookOpenIcon, BanknotesIcon, StarIcon, BriefcaseIcon, AcademicCapIcon, CheckCircleIcon } from '@heroicons/react/24/outline';


const features = [
    {
        name: 'Economical Study Options',
        description:
            'HeadStart provides affordable study options, scholarships, and financial aid to make education accessible. They prioritize budget-friendly solutions for students, enabling them to pursue their dreams without financial barriers.',
        icon: BanknotesIcon,
    },
    {
        name: 'Comprehensive Programs and Resources',
        description:
            'HeadStart empowers students with programs and courses for academic and professional success. They offer resources for test prep, career guidance, and skill development. With tailored support, HeadStart helps students excel in academia and achieve career goals.',
        icon: BookOpenIcon,
    },
    {
        name: 'Excellent Job Opportunities',
        description:
            'HeadStart connects students to excellent job opportunities through industry connections and career development resources. They organize job fairs, internships, and workshops to help students succeed in the professional world. With HeadStart, students gain the skills and networking opportunities needed to stand out in the job market and secure desirable positions.',
        icon: BriefcaseIcon,
    },
    {
        name: 'Best University Admissions',
        description:
            'HeadStart secures top university admissions through personalized guidance. They help with applications, essays, and mock interviews to increase acceptance rates. For medical students, they provide assistance in exam prep and profile building for admission to prestigious medical schools.',
        icon: AcademicCapIcon,
    },
    {
        name: 'Guranteed Outcomes',
        description:
            'HeadStart guarantees successful outcomes by providing specialized training for high-paying careers. They support students in achieving their goals, including admission to top universities and securing jobs in their desired fields.',
        icon: CheckCircleIcon,
    },
    {
        name: 'Maximum Benefits',
        description:
            'HeadStart prioritizes student success through valuable resources, support, and guidance. They offer budget-friendly programs, exclusive materials, counseling, and networking opportunities for an enhanced educational journey.',
        icon: StarIcon,
    },

]

const WhyPrograms = () => {
    return (
        <div className="">
            {/* <div className="bg-white py-24 sm:py-32">
            <div className="flex flex-col items-center mx-auto max-w-7xl px-6 lg:px-8"> */}
            <div className="flex flex-col items-center">
                <div className="mx-auto max-w-2xl text-center">
                    {/* <h2 className="text-base font-semibold leading-7 text-indigo-600">Deploy faster</h2> */}
                    <p className="mt-2 title">
                        Why Headstart Programs?
                    </p>
                    <p className="mt-6 subdesc">
                        You can explore the features that we provide with fun and have their own feature.
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                        {features.map((feature) => (
                            <div key={feature.name} className="relative pl-16">
                                <dt className="font-semibold leading-7 text-gray-800">
                                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary shadow-md">
                                        <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                                    </div>
                                    {feature.name}
                                </dt>
                                <dd className="mt-3 text-sm font-medium lg:text-base leading-5 text-gray-700">{feature.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
                <HashLink to='/about#details' smooth className="flex items-center gap-1.5 mt-20 font-semibold leading-7 text-primary hover:text-gray-500 cursor-pointer lg:text-center duration-300 transition-colors">
                    Learn More <FaArrowRight />
                </HashLink>
            </div>
        </div>

    )
}

export default WhyPrograms