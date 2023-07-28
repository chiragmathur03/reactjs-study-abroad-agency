import React from 'react'

const Newsletter = () => {
    return (
        <section className="mt-20 p-6 mx-auto max-w-sm sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div className="mx-auto max-w-screen-md sm:text-center">
                    <h2 className="mb-4 title text-center">Sign up for our Newsletter</h2>
                    <p className="mx-auto mb-10 max-w-2xl subdesc text-center">Stay up to date with the roadmap progress, announcements and exclusive discounts feel free to sign up with your email.</p>
                    <form action="#">
                        <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
                            <div className="relative w-full">
                                <label for="email" className="hidden mb-2 text-sm font-medium text-gray-800 ">Email address</label>
                                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                    <svg className="w-5 h-5 text-gray-500 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                                </div>
                                <input className="block p-3 pl-10 w-full text-sm text-gray-800 bg-white rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-primary focus:border-primary" placeholder="Enter your email" type="email" id="email" required="" />
                            </div>
                            <div>
                                <button type="/" className="py-3 px-5 w-full text-sm font-semibold text-center text-white rounded-xl border cursor-pointer shadow-xl bg-primary sm:rounded-none sm:rounded-r-lg hover:bg-primary-hover focus:bg-primary-hover duration-300 transition-colors">Subscribe</button>
                            </div>
                        </div>
                        <div className="mx-auto max-w-screen-sm text-sm text-center text-gray-500 font-light">Your email is safe with us. We don't spam.</div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Newsletter