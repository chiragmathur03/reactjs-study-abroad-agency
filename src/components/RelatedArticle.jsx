import React from 'react'
import { Link } from 'react-router-dom'

//usesubstring method

const RelatedArticle = () => {
  return (
    <aside aria-label="Related articles" className="py-8 lg:py-24 bg-gray-50 max-w-none">
      <div className="px-4 mx-auto max-w-screen-xl">
        <h2 className="mb-8 text-2xl font-bold text-gray-700 text-center">Related articles</h2>
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 justify-center">
          <article className="max-w-xs">
            <Link to='/post/2'>
              <img src="https://dl.dropboxusercontent.com/scl/fi/18884uhlc1q241xlc4a3c/facts.png?rlkey=s4nlp8e6zgu3epx4qi8twjfic&dl=0" className="mb-5 rounded-lg shadow-xl" alt="germany ballon" />
            </Link>
            <h2 className="mb-2 text-xl font-bold leading-tight text-gray-800 ">
              <Link to="/post/2">Top 10 interesting facts about Germany</Link>
            </h2>
            <p className="mb-4 font-light text-gray-500 ">Germany, known for its rich history, stunning landscapes, and vibrant culture, is a country that never fails to captivate and intrigue.</p>
            <Link to='/post/2' className="inline-flex items-center font-medium underline underline-offset-4 text-gray-700  hover:no-underline">
              Read in 2 minutes
            </Link>
          </article>
          <article className="max-w-xs">
            <Link to="/post/4">
              <img src="https://dl.dropboxusercontent.com/scl/fi/skr7uljjhm49zo8bqopww/masters.png?rlkey=w3w29mgvggy0y0cxlsfivnheq&dl=0" className="mb-5 rounded-lg shadow-xl" alt="student with germany flag" />
            </Link>
            <h2 className="mb-2 text-xl font-bold leading-tight text-gray-800 ">
              <Link to="/post/4">Masters in Germany: Unlocking Academic..</Link>
            </h2>
            <p className="mb-4 font-light text-gray-500">Germany, a land of innovation and academic brilliance, has emerged as a top destination for international students seeking a Master's degree.</p>
            <Link to="/post/4" className="inline-flex items-center font-medium underline underline-offset-4 text-gray-700  hover:no-underline">
              Read in 12 minutes
            </Link>
          </article>
          <article className="max-w-xs">
            <Link to="/post/3">
              <img src="https://dl.dropboxusercontent.com/scl/fi/m5x4r8gk0mqr2p0iizup6/confusion.png?rlkey=27pk3xae634nr47jofcrilvz3&dl=0" className="mb-5 rounded-lg shadow-xl" alt="confused" />
            </Link>
            <h2 className="mb-2 text-xl font-bold leading-tight text-gray-800 ">
              <Link to="/post/3">Students of 10th & 12th: Which Board to Choose?</Link>
            </h2>
            <p className="mb-4 font-light text-gray-500 ">Today, each student as well as parent is worried about which board is the best to study and the concern is much amongst students who are in 10th and...</p>
            <Link to="/post/3" className="inline-flex items-center font-medium underline underline-offset-4 text-gray-700  hover:no-underline">
              Read in 8 minutes
            </Link>
          </article>
          <article className="max-w-xs">
            <Link to="/post/5">
              <img src="https://dl.dropboxusercontent.com/scl/fi/4lcca8ifiqvl9iy0jw6nv/coaching.png?rlkey=fb8dteocr4eal3t3b83lqeh7x&dl=0" className="mb-5 rounded-lg shadow-xl" alt="coaching" />
            </Link>
            <h2 className="mb-2 text-xl font-bold leading-tight text-gray-800 ">
              <Link to="/post/5">Coaching or No Coaching?</Link>
            </h2>
            <p className="mb-4 font-light text-gray-500 ">Coaching OR No Coaching? Today, 90% of the student community fears failure in the 10th/ 12th board exams and they perceive joining tuition...</p>
            <Link to="/post/5" className="inline-flex items-center font-medium underline underline-offset-4 text-gray-700  hover:no-underline">
              Read in 4 minutes
            </Link>
          </article>
        </div>
      </div>
    </aside>

  )
}

export default RelatedArticle