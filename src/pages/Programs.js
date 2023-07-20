import React from 'react';
import { BookOpenIcon, BanknotesIcon, StarIcon, BriefcaseIcon, AcademicCapIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

import { Link } from 'react-router-dom';


//Icons
import { FaArrowRight } from 'react-icons/fa'

//components
import Testimonial from '../components/Testimonial';
import ProgramHero from '../components/ProgramHero';



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

// const links = [
//   { name: 'Open roles', href: '#' },
//   { name: 'Internship program', href: '#' },
//   { name: 'Our values', href: '#' },
//   { name: 'Meet our leadership', href: '#' },
// ]
// const stats = [
//   { name: 'Offices worldwide', value: '12' },
//   { name: 'Full-time colleagues', value: '300+' },
//   { name: 'Hours per week', value: '40' },
//   { name: 'Paid time off', value: 'Unlimited' },
// ]

const Programs = () => {
  return (
    <>

      {/* Header */}
      {/* <div className="mb-16">
        <div className="bg-gray-500">
          <div className="pt-40 px-4 py-20 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 lg:pt-40">
            <div className="max-w-xl mb-10 md:mx-auto text-center lg:max-w-2xl md:mb-12">
              <div>
                <p className="px-3 py-px mb-4 text-xs font-semibold tracking-wider text-primary uppercase rounded-full bg-teal-accent-400">
                  Our Programs
                </p>
              </div>
              <h2 className="max-w-lg mb-6 text-4xl font-semibold leading-none tracking-tight text-gray-800 sm:text-5xl md:mx-auto">
                <span className="relative inline-block">
                  <svg
                    viewBox="0 0 52 24"
                    fill="currentColor"
                    className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-gray-400 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                  >
                    <defs>
                      <pattern
                        id="dc223fcc-6d72-4ebc-b4ef-abe121034d6e"
                        x="0"
                        y="0"
                        width=".135"
                        height=".30"
                      >
                        <circle cx="1" cy="1" r=".7" />
                      </pattern>
                    </defs>
                    <rect
                      fill="url(#dc223fcc-6d72-4ebc-b4ef-abe121034d6e)"
                      width="52"
                      height="24"
                    />
                  </svg>
                  <span className="relative">Headstart</span>
                </span>{' '}
                Programs are Budget-Friendly.
              </h2>
              <p className="text-sm text-gray-600 font-medium lg:text-base">
                The carefully hand-picked HeadStart Programs benefit you in a big way as they guarantee you financial freedom,
                ensure better universities, provide successful international career and thus help you make right study abroad decision.
              </p>
            </div>
            <div className="flex items-center sm:justify-center">
              <button
                type="submit"
                className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
              >
                Get started
              </button>
              <a
                href="/"
                aria-label=""
                className="inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div> */}

      <ProgramHero />

      {/* Cards */}
      {/* <section>
        <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            <div className="flex flex-col w-full max-w-lg p-8 text-left shadow-2xl lg:mx-auto rounded-xl">
              <div className='flex space-x-4 items-center'>
                <div className="h-14 w-14 bg-[#00C798] rounded-lg flex justify-center items-center">
                  <SiAntdesign className='text-white w-8 h-8' />
                </div>
                <h2 className="text-2xl font-semibold tracking-widest text-primary uppercase">
                  Free Programs
                </h2>
              </div>
              <p className="mx-auto text-base leading-relaxed text-gray-500">

                .</p>
            </div>
            <div className="flex flex-col w-full max-w-lg p-8 text-left shadow-2xl lg:mx-auto rounded-xl">
              <p className="mx-auto text-base leading-relaxed text-gray-500">Free and Premium themes, UI Kit's, templates and landing pages built with Tailwind CSS, HTML &amp; Next.js.</p>
              <h2 className="mt-4 text-xs font-semibold tracking-widest text-blue-500 uppercase">
                Wicked Labs
                <span href="#" className="font-semibold text-gray-200 lg:mb-0">Acme's HR </span>
              </h2>
            </div>
            <div className="flex flex-col w-full max-w-lg p-8 text-left shadow-2xl lg:mx-auto rounded-xl">
              <p className="mx-auto text-base leading-relaxed text-gray-500">Free and Premium themes, UI Kit's, templates and landing pages built with Tailwind CSS, HTML &amp; Next.js.</p>
              <h2 className="mt-4 text-xs font-semibold tracking-widest text-blue-500 uppercase">
                Wicked Labs
                <span href="#" className="font-semibold text-gray-200 lg:mb-0">Acme's HR </span>
              </h2>
            </div>
          </div>
        </div>
      </section> */}

      {/* Why Headstart */}
      <div className="bg-white py-24 sm:py-32">
        <div className="flex flex-col items-center mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            {/* <h2 className="text-base font-semibold leading-7 text-indigo-600">Deploy faster</h2> */}
            <p className="mt-2 text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
              Why Headstart Programs?
            </p>
            <p className="mt-6 text-sm lg:text-base text-gray-600 font-medium">
              You can explore the features that we provide with fun and have their own feature.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-gray-800">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                      <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    {feature.name}
                  </dt>
                  {/* mt-6 text-sm text-gray-600 font-medium lg:text-base */}
                  <dd className="mt-2 text-sm font-medium lg:text-base leading-7 text-gray-600">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="flex items-center gap-1.5 mt-12 font-semibold leading-7 text-primary hover:text-gray-600 cursor-pointer lg:text-center">
            Learn More <FaArrowRight />
          </div>
        </div>
      </div>

      {/* Content - Everyone can take benefits */}
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-28">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          {/* <div>
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
              Brand new
            </p>
          </div> */}
          <h2 className="max-w-lg mb-6 text-3xl font-semibold leading-none tracking-tight text-primary sm:text-4xl text-center sm:mx-auto">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="9a29985a-fc16-419b-ae53-1670f5ca4491"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#9a29985a-fc16-419b-ae53-1670f5ca4491)"
                  width="52"
                  height="24"
                />
              </svg>
              <span className="relative">Everyone</span>
            </span>{' '}
            Can Take Benefits
          </h2>
          <p className="text-sm font-medium lg:text-base text-gray-600 md:text-lg text-center">
            Accessible education for all. Affordable programs to Unlock your potential and achieve your goals.
          </p>
        </div>
        <img
          className="object-cover w-full h-56 rounded shadow-lg lg:hidden"
          src="https://dl.dropboxusercontent.com/scl/fi/mzkr1zmdek16s1fbgdin5/common.jpg?rlkey=c3d99zldyqrgxzf3nzns9t7y7&dl=0"
          alt=""
        />
        <div className="hidden lg:grid max-w-screen-lg gap-8 row-gap-5 mb-8 sm:grid-cols-2 lg:grid-cols-3 sm:mx-auto">
          <img
            className="object-cover w-full h-56 shadow-2xl rounded-2xl sm:rounded-3xl"
            src="https://dl.dropboxusercontent.com/scl/fi/ktv016xouzzhif78mu9f7/highschool.jpg?rlkey=yul0ffnnm8tjnc3npshphyoe8&dl=0"
            alt=""
          />
          <img
            className="object-cover w-full h-56 shadow-2xl rounded-2xl sm:rounded-3xl"
            src="https://dl.dropboxusercontent.com/scl/fi/9los9266k6btpmraze6co/ug.jpg?rlkey=av09wkbwvf7lqoipfbnssp973&dl=0"
            alt=""
          />
          <img
            className="object-cover w-full h-56 shadow-2xl rounded-2xl sm:rounded-3xl"
            src="https://dl.dropboxusercontent.com/scl/fi/w6umea0ooxx1x7fstb42q/professional.jpg?rlkey=dsq0rux43ogvu7uph085wau8n&dl=0"
            alt=""
          />
          {/* <img
            className="object-cover w-full h-56 shadow-2xl rounded-2xl sm:rounded-3xl"
            src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            alt=""
          /> */}
        </div>
        <div className='mt-16 text-justify text-base text-gray-600 space-y-8'>
          <p>
            At <span className='text-primary font-semibold hover:text-gray-600 cursor-pointer'> www.headstart.co.in</span>, we believe that every student, regardless of their background or academic goals, can benefit from the unique services provided by our counsellors. Whether you are a high school student exploring college options, an undergraduate looking to choose a major, or a professional seeking a career change, our dedicated team is here to support you every step of the way.
          </p>

          <p>
            Our counselors possess a wealth of knowledge and experience in various industries and educational systems. They stay up to date with the latest trends and developments in the job market, ensuring that they can provide accurate and relevant advice. By leveraging their expertise, you can gain a competitive edge and make informed decisions that will shape your career and future success.
          </p>

          <p>
            Don't miss out on the opportunity to take advantage of our exceptional counseling services. No matter where you are on your educational or professional journey, our counselors are eager to help you unlock your potential, overcome obstacles, and achieve your goals. Contact us today and embark on a path to a better career and a successful future.
          </p>

        </div>
      </div>
      <div className='mt-14'></div>
      {/* Testimonials */}
      <Testimonial />

      {/* CTA - Get Started */}
      <div className="mt-20 py-16 bg-white">
        <div className="container m-auto px-6 space-y-8 text-gray-500 lg:px-20">
          <div className="justify-center text-center gap-6 lg:text-left lg:flex lg:items-center lg:gap-16">
            <div className="order-last mb-6 space-y-6 lg:mb-0 lg:w-6/12">
              <h1 className="text-3xl text-gray-800 font-semibold tracking-tight sm:text-4xl">Get Started with our <span className="text-primary">Program.</span></h1>
              <p className=" text-base text-gray-600 md:text-lg mb-12">Join our program and embark on your international educational journey today.</p>

              <div className="flex flex-wrap justify-center gap-4 lg:justify-start">
                <button type="button" className="w-max py-3 px-6 text-center rounded-xl transition bg-primary shadow-xl hover:bg-primary-hover active:bg-primary focus:bg-primary-hover">
                  <span className="block text-white font-semibold">
                    Connect
                  </span>
                </button>
                <button type="button" className="w-max py-3 px-6 text-center justify-center rounded-xl bg-gray-100 transition hover:bg-gray-200 active:bg-gray-300 focus:bg-gray-200">
                  {/* <span className="block text-gray-600 font-semibold"> */}
                  <span className="flex items-center gap-1.5 text-gray-600 font-semibold">
                    Our Programs <FaArrowRight />
                  </span>
                </button>
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

    </>
  )
}

export default Programs