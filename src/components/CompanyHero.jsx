import React from 'react'

const CompanyHero = () => {
    return (
        <div className="relative isolate overflow-hidden bg-white">
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <svg
                    className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
                    aria-hidden="true"
                >
                    <defs>
                        <pattern
                            id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                            width={200}
                            height={200}
                            x="50%"
                            y={-1}
                            patternUnits="userSpaceOnUse"
                        >
                            <path d="M100 200V.5M.5 .5H200" fill="none" />
                        </pattern>
                    </defs>
                    <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
                        <path
                            d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                            strokeWidth={0}
                        />
                    </svg>
                    <rect width="100%" height="100%" strokeWidth={0} fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
                </svg>
            </div>
            {/* <div className="pb-80 pt-44 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-52"> */}
            {/* <div className="relative px-10 mx-auto py-44 sm:px-20"> --Taken from Program Alignment*/}
            <div className="px-10 mx-auto sm:px-20">
                {/* <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8"> */}
                {/* <div className="relative mx-auto max-w-sm sm:max-w-xl md:max-w-full lg:max-w-screen-xl"> --Works Fine but Stick in Viewport in sm, md, lg */}
                <div className="relative mx-auto">
                    <div className="sm:max-w-lg pt-44">
                        <h1 className="text-4xl text-center font-semibold tracking-tight text-gray-800 sm:text-5xl sm:text-left">
                            Welcome to <br /><span className='text-primary sm:text-6xl'>Headstart</span>
                        </h1>
                        <p className="mt-6 text-sm text-gray-700 font-medium lg:text-base text-center sm:text-left max-w-md">
                            Trusted international education consultants since 2010, working for Student success.
                        </p>
                    </div>
                    <div>
                        {/* Decorative image grid */}
                        <div className="h-screen mt-16">
                            <div
                                aria-hidden="true"
                                className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                            >
                                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                                    <div className="flex items-center space-x-6 lg:space-x-8">
                                        <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                            <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100 shadow-2xl">
                                                <img
                                                    src='https://dl.dropboxusercontent.com/scl/fi/nx65dcou48gt7iguo3ymv/yellow.jpg?rlkey=hpboyxx5nwg562wgc2jzvbmwb&dl=0'
                                                    alt="Yellow"
                                                    className="h-full w-full object-cover object-center"
                                                />
                                            </div>
                                            <div className="h-64 w-44 overflow-hidden rounded-lg shadow-2xl">
                                                <img
                                                    src='https://dl.dropboxusercontent.com/scl/fi/mo9jx0nfc20wfr6m3vmsm/blueboy.jpg?rlkey=eh745dwfsiqz2qiesgtq8zu0h&dl=0'
                                                    alt="Blue"
                                                    className="h-full w-full object-cover object-center"
                                                />
                                            </div>
                                        </div>
                                        <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                            <div className="h-64 w-44 overflow-hidden rounded-lg shadow-2xl">
                                                <img
                                                    src='https://dl.dropboxusercontent.com/scl/fi/5tm3aqvgd2r85ydw0zadq/brownboy.jpg?rlkey=79x6gk8j6lv8258f7giescanq&dl=0'
                                                    alt="Brown"
                                                    className="h-full w-full object-cover object-center"
                                                />
                                            </div>
                                            <div className="h-64 w-44 overflow-hidden rounded-lg shadow-2xl">
                                                <img
                                                    src='https://dl.dropboxusercontent.com/scl/fi/h1brkiy134tj4pwn6lkhi/purplegirl.jpg?rlkey=8brtat450f0da3gyifpypok9f&dl=0'
                                                    alt="Purple"
                                                    className="h-full w-full object-cover object-center"
                                                />
                                            </div>
                                            <div className="h-64 w-44 overflow-hidden rounded-lg shadow-2xl">
                                                <img
                                                    src='https://dl.dropboxusercontent.com/scl/fi/nb9bnzczxi9q0437bx28f/smileywoman.jpg?rlkey=gex0a0o5xw0xne0o10l80dk0g&dl=0'
                                                    alt="Gray"
                                                    className="h-full w-full object-cover object-center"
                                                />
                                            </div>
                                        </div>
                                        <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                            <div className="h-64 w-44 overflow-hidden rounded-lg shadow-2xl">
                                                <img
                                                    src='https://dl.dropboxusercontent.com/scl/fi/n6qrc779mx1ce6umr5ml3/pinkgirl.jpg?rlkey=qxb8fnixchritehduwfnw06iy&dl=0'
                                                    alt="Pink"
                                                    className="h-full w-full object-cover object-center"
                                                />
                                            </div>
                                            <div className="h-64 w-44 overflow-hidden rounded-lg shadow-2xl">
                                                <img
                                                    src='https://dl.dropboxusercontent.com/scl/fi/9xqk5pei4dmt424n1ubbi/greengirll.jpg?rlkey=qmiy77j2m4d9l1gj4ze9fjala&dl=0'
                                                    alt="Green"
                                                    className="h-full w-full object-cover object-center"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <a
              href="#"
              className="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700"
            >
              Shop Collection
            </a> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CompanyHero