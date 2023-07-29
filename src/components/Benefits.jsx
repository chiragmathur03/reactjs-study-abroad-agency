import React from 'react'

const Benefits = () => {
    return (
        <div>
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                {/* <div>
                <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                Brand new</p></div> */}

                <h2 className="max-w-lg mb-6 title sm:mx-auto text-center">
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
                <p className="subdesc text-center">
                    Accessible education for all. Affordable programs to Unlock your potential and achieve your goals.
                </p>
            </div>
            <img
                className="object-cover w-full h-56 rounded-3xl shadow-2xl md:hidden"
                src="https://dl.dropboxusercontent.com/scl/fi/7n05a7gjr849k0os5nln7/common.jpg?rlkey=5uizsfx9tsuhwcy9u55ybrvrb&dl=0"
                alt=""
            />
            <div className="hidden md:grid max-w-screen-lg gap-8 row-gap-5 mb-8 md:grid-cols-3 mx-auto">
                <img
                    className="object-cover w-full h-56 shadow-2xl rounded-3xl"
                    src="https://dl.dropboxusercontent.com/scl/fi/ktv016xouzzhif78mu9f7/highschool.jpg?rlkey=yul0ffnnm8tjnc3npshphyoe8&dl=0"
                    alt="Student"
                />
                <img
                    className="object-cover w-full h-56 shadow-2xl rounded-3xl"
                    src="https://dl.dropboxusercontent.com/scl/fi/9los9266k6btpmraze6co/ug.jpg?rlkey=av09wkbwvf7lqoipfbnssp973&dl=0"
                    alt="College Student"
                />
                <img
                    className="object-cover w-full h-56 shadow-2xl rounded-3xl"
                    src="https://dl.dropboxusercontent.com/scl/fi/w6umea0ooxx1x7fstb42q/professional.jpg?rlkey=dsq0rux43ogvu7uph085wau8n&dl=0"
                    alt="Professional"
                />
                {/* <img
                    className="object-cover w-full h-56 shadow-2xl rounded-2xl sm:rounded-3xl"
                    src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                    alt=""
                /> */}
            </div>
            <div className='mt-16 text space-y-8'>
                <p>
                    At <span className='text-primary font-semibold hover:text-gray-700 cursor-pointer duration-300 transition-colors'> www.headstart.co.in</span>, we believe that every student, regardless of their background or academic goals, can benefit from the unique services provided by our counsellors. Whether you are a high school student exploring college options, an undergraduate looking to choose a major, or a professional seeking a career change, our dedicated team is here to support you every step of the way.
                </p>

                <p>
                    Our counselors possess a wealth of knowledge and experience in various industries and educational systems. They stay up to date with the latest trends and developments in the job market, ensuring that they can provide accurate and relevant advice. By leveraging their expertise, you can gain a competitive edge and make informed decisions that will shape your career and future success.
                </p>

                <p>
                    Don't miss out on the opportunity to take advantage of our exceptional counseling services. No matter where you are on your educational or professional journey, our counselors are eager to help you unlock your potential, overcome obstacles, and achieve your goals. Contact us today and embark on a path to a better career and a successful future.
                </p>
            </div>
        </div>
    )
}

export default Benefits