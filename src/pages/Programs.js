import React from 'react'
import { BookOpenIcon, BanknotesIcon, StarIcon, BriefcaseIcon, AcademicCapIcon, CheckCircleIcon } from '@heroicons/react/24/outline'

//Icons
// import { SiAntdesign, SiHelpscout, SiFampay } from 'react-icons/si';
// import TbMoneybag from 'react-icons/tb'

//Images
import brandicon from '../assets/brandlogo.png'
// import brandiconmd from '../assets/brandlogomd.png'
import bhaskar from '../assets/testimonials/Bhaskar Khatri.png'
import { Link } from 'react-router-dom'


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
      <div className="mb-16">
        <div className="bg-gray-100">
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
                  <span className="relative">The</span>
                </span>{' '}
                HeadStart Programs are Budget-Friendly.
              </h2>
              <p className="text-sm text-gray-600 font-medium lg:text-base">
                The carefully hand-picked HeadStart Programs benefit you in a big way as they guarantee you financial freedom,
                ensure better universities, provide successful international career and thus help you make right study abroad decision.
              </p>
            </div>
            {/* <div className="flex items-center sm:justify-center">
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
            </div> */}
          </div>
        </div>
        {/* <div className="relative px-4 sm:px-0">
          <div className="absolute inset-0 bg-gray-100 h-1/2" />
          <div className="relative grid mx-auto overflow-hidden bg-white divide-y rounded shadow sm:divide-y-0 sm:divide-x sm:max-w-screen-sm sm:grid-cols-3 lg:max-w-screen-md">
            <div className="inline-block p-8 text-center">
              <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-indigo-50">
                <svg
                  className="w-10 h-10 text-deep-purple-accent-400"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
              <p className="font-bold tracking-wide text-gray-800">
                Make it better
              </p>
            </div>
            <div className="inline-block p-8 text-center">
              <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-indigo-50">
                <svg
                  className="w-10 h-10 text-deep-purple-accent-400"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
              <p className="font-bold tracking-wide text-gray-800">
                Do it faster
              </p>
            </div>
            <div className="inline-block p-8 text-center">
              <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-indigo-50">
                <svg
                  className="w-10 h-10 text-deep-purple-accent-400"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
              <p className="font-bold tracking-wide text-gray-800">
                Working harder
              </p>
            </div>
          </div>
        </div> */}
      </div>

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
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            {/* <h2 className="text-base font-semibold leading-7 text-indigo-600">Deploy faster</h2> */}
            <p className="mt-2 text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              Why Headstart Programs?
            </p>
            <p className="mt-6 text-base text-gray-600 font-medium">
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
                  <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
          <h2 className="mt-12 font-semibold leading-7 text-primary hover:text-primary-hover cursor-pointer lg:text-center">Learn More -> </h2>
        </div>
      </div>

      {/* Content */}
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-36">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          {/* <div>
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
              Brand new
            </p>
          </div> */}
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-primary sm:text-4xl md:mx-auto">
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
          <p className="text-base text-gray-600 md:text-lg">
            Accessible education for all. Affordable programs to Unlock your potential and achieve your goals.
          </p>
        </div>
        <img
          className="object-cover w-full h-56 rounded shadow-lg lg:hidden"
          src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
          alt=""
        />
        <div className="hidden lg:grid max-w-screen-lg gap-8 row-gap-5 mb-8 sm:grid-cols-2 lg:grid-cols-4 sm:mx-auto">
          <img
            className="object-cover w-full h-56 rounded shadow-lg"
            src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            alt=""
          />
          <img
            className="object-cover w-full h-56 rounded shadow-lg"
            src="https://images.pexels.com/photos/3182746/pexels-photo-3182746.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            alt=""
          />
          <img
            className="object-cover w-full h-56 rounded shadow-lg"
            src="https://images.pexels.com/photos/3184311/pexels-photo-3184311.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
            alt=""
          />
          <img
            className="object-cover w-full h-56 rounded shadow-lg"
            src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            alt=""
          />
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

      {/* Testimonials */}
      <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
        <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <img className="mx-auto w-32 lg:w-44" src={brandicon} alt="branding" />
          <figure className="mt-10">
            <blockquote className="text-center text-base font-semibold leading-7 text-gray-600 sm:text-2xl sm:leading-9">
              <p>
                “The Entire Education and the visa process was simplified for me with the help of systematic approch of the excellent counselors at Headstart.”
              </p>
            </blockquote>
            <figcaption className="mt-10">
              <img
                className="mx-auto h-24 w-24 rounded-full"
                src={bhaskar}
                alt="Bhaskar Khatri"
              />
              <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                <div className="font-semibold text-gray-800">Bhaskar Khatri</div>
                <svg viewBox="0 0 2 2" width={3} height={3} aria-hidden="true" className="fill-gray-900">
                  <circle cx={1} cy={1} r={1} />
                </svg>
                <div className="text-gray-600">Masters (Nursing) in Australia</div>
              </div>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 lg:py-[120px] lg:px-14">
        <div className="container">
          <div
            className={`relative z-10 overflow-hidden rounded-3xl bg-primary py-12 px-8 md:p-[70px]`}
          >
            <div className="flex flex-wrap items-center -mx-4">
              <div className="w-full px-4 lg:w-1/2">
                {/* <span className="mb-2 text-base font-semibold text-white">
                  Find Your Next Dream App
                </span> */}
                <h2 className="mb-6 text-2xl font-semibold leading-tight text-white sm:mb-8 sm:text-[38px] lg:mb-0 lg:text-3xl lg:font-bold lg:w-[60%]">
                  Get started with our Programs
                </h2>
              </div>
              <div className="w-full px-4 lg:w-1/2">
                <div className="flex flex-wrap space-x-4 lg:justify-end">
                  <Link
                    to="/connect"
                    // className='my-1 cursor-pointer inline-block rounded bg-white py-4 px-6 text-base font-medium text-black transition hover:bg-opacity-90 md:px-9 lg:px-6 xl:px-9'           
                    className='my-1 cursor-pointer inline-block rounded bg-white py-2 px-4 text-base font-medium text-primary transition hover:bg-opacity-95 sm:py-4 md:px-9 lg:px-6 xl:px-9 lg:py-4'
                  >
                    Connect
                  </Link>
                </div>
              </div>
            </div>
            <div>
              <span className="absolute top-0 left-0 z-[-1]">
                <svg
                  width={189}
                  height={162}
                  viewBox="0 0 189 162"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <ellipse
                    cx={16}
                    cy="-16.5"
                    rx={173}
                    ry="178.5"
                    transform="rotate(180 16 -16.5)"
                    fill="url(#paint0_linear)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear"
                      x1={-157}
                      y1="-107.754"
                      x2="98.5011"
                      y2="-106.425"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="white" stopOpacity="0.07" />
                      <stop offset={1} stopColor="white" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              <span className="absolute bottom-0 right-0 z-[-1]">
                <svg
                  width={191}
                  height={208}
                  viewBox="0 0 191 208"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <ellipse
                    cx={173}
                    cy="178.5"
                    rx={173}
                    ry="178.5"
                    fill="url(#paint0_linear)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear"
                      x1="-3.27832e-05"
                      y1="87.2457"
                      x2="255.501"
                      y2="88.5747"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="white" stopOpacity="0.07" />
                      <stop offset={1} stopColor="white" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default Programs