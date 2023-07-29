import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
    return (
        // <main className="grid min-h-full place-items-center bg-white px-6 my-20 sm:py-32 lg:px-8"> --original
        <main className="grid min-h-full place-items-center mt-44 mb-36 p-6 mx-auto max-w-sm sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
        <div className="h-screen text-center">
          <p className="text-base font-semibold text-primary">404</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-gray-800 sm:text-5xl">Page not found</h1>
          <p className="mt-6 text-base leading-7 text-gray-700">Sorry, we couldn’t find the page you’re looking for.</p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              to="/"
              className="rounded-xl bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-xl hover:bg-primary-hover 
              focus:bg-primary-hover"
            >
              Go back home
            </Link>
          </div>
        </div>
      </main>
    )
}

export default Error