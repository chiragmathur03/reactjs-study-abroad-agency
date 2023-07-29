/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

//components
import Newsletter from './Newsletter'

const BlogPost = () => {
  return (
    <>
      <main className="mt-44 mb-36 p-6 mx-auto max-w-sm sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
        <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
          <article className="mx-auto w-full max-w-2xl">
            <header className="mb-4 lg:mb-6">
              <address className="flex items-center mb-10 not-italic justify-center">
                {/* px-10 mx-auto py-36 sm:px-20 sm:py-16 lg:py-28 */}
                <div className="inline-flex items-center mr-3 text-sm text-gray-900">
                  <img className="mr-4 w-16 h-16 rounded-full shadow-xl" src="https://dl.dropboxusercontent.com/scl/fi/tquj6ut28jey0o3bz6ewl/founder.jpg?rlkey=9qq5d9no36kkzyzes0agllap9&dl=0" alt="founder" />
                  <div>
                    <span className="text-base lg:text-xl font-semibold text-gray-700">Piyush Khandelwal</span>
                    <p className="text-sm lg:text-base text-gray-600">Founder, Educator & CEO Headstart</p>
                    <p className="text-sm lg:text-base font-light text-gray-500">
                      <time pubdate datetime="2022-02-08" title="February 8th, 2022">Feb. 8, 2022</time>
                    </p>
                  </div>
                </div>
              </address>
              <hr className='shadow-xl' />
              {/* mt-2 text-3xl font-semibold tracking-tight text-primary sm:text-4xl */}
              <h1 className="mt-12 mb-8 title text-center">How to finance your studies in Germany?</h1>
            </header>

            <p className='text'>Studying in Germany can be a rewarding experience, but it's essential to figure out how to manage your finances as an international student. While education in Germany is free, there are still living expenses to consider. At HeadStart, we understand the importance of financial planning, so here are some tips and tricks to help you finance your stay and studies in Germany.</p>

            <figure><img src="https://dl.dropboxusercontent.com/scl/fi/k78g1gtiaw3ugk2tru4bk/finance.jpg?rlkey=fv0aygrwtncb360tbw4oo0w3c&dl=0" className='mt-14 rounded-2xl shadow-2xl' alt="" />
              {/* <figcaption>Digital art by Anonymous</figcaption> */}
            </figure>
            {/* mt-16 text-justify text-base text-gray-600 space-y-8 */}
            <ol className='mt-16 space-y-5 text'>
              <li>
                <strong>Start Saving Early:</strong> Even if your personal savings may not cover the total cost of studying in Germany, starting to save money early can make a significant difference. Many students who plan to study in Germany begin saving from the moment they decide to pursue their education there. It's crucial to get used to saving money because you'll need to do it often in Germany.
              </li>
              <li>
                <strong>German Blocked Account:</strong> Before applying for a student visa, you will need to put your savings in a German blocked account. This account serves as proof of financial resources and ensures that you have the necessary funds to cover your living expenses.
              </li>
              <li>
                <strong>Parental Income:</strong> The majority of international students in Germany work part-time to cover their living expenses. Germany offers numerous part-time job opportunities, and many of them do not require a high level of expertise in a specific field. Working part-time can alleviate a significant financial burden from your budget.
              </li>
              <li>
                <strong>Part-Time Job Options:</strong> There are various part-time job options available to international students in Germany. It's recommended to find a job related to your study field, as it can help you both financially and academically. Universities often offer part-time jobs on campus, but there are also opportunities outside of the campus. Some examples include tutoring, academic assisting, administrative staff at student services, or working at a university museum.
              </li>
              <li>
                <strong>Legal Limitations:</strong> International students in Germany are allowed to work up to 120 days per year under current regulations. If you want to work longer than that, you need specific permission from the local employment agency or the foreigners' registration office. It's important to note that part-time job earnings alone may not be sufficient to cover all expenses, but they can still provide significant financial support.
              </li>
              <li>
                <strong>Student Loans:</strong> Student loans can be another way to finance your studies in Germany. There are various governmental and non-governmental student loan resources available, often with low or zero interest rates. Many German universities also offer their own student loan schemes. However, it's important to note that student loans should be considered complementary funds and not relied upon as the sole source of financial support.
              </li>
              <li>
                <strong>Scholarships:</strong> Scholarships are a great opportunity to finance your studies in Germany. The country offers numerous scholarships for talented and skilled students. While it may be challenging to rely solely on scholarships, they can significantly contribute to covering your living expenses. Organizations such as the Deutschlandstipendium, DAAD Scholarships, Erasmus+, and private foundations offer scholarships to international students.
              </li>
            </ol>
            <h3 className='mt-14 font-semibold text-xl text-gray-700'>Conclusion</h3>
            <p className='mt-4 text'>
              Financing your studies in Germany requires careful financial planning and consideration of various options. Starting to save early, utilizing parental income, working part-time, exploring student loans, and seeking scholarships can all contribute to covering your living expenses. At HeadStart, we understand the importance of financial support, and we encourage our students to explore these opportunities to ensure a successful and fulfilling educational experience in Germany.
            </p>
          </article>
        </div>
      </main>

      <aside aria-label="Related articles" className="py-8 lg:py-24 bg-gray-50 max-w-none">
        <div className="px-4 mx-auto max-w-screen-xl">
          <h2 className="mb-8 text-2xl font-bold text-gray-700 text-center">Related articles</h2>
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 justify-center">
            <article className="max-w-xs">
              <a href='#'>
                <img src="https://dl.dropboxusercontent.com/scl/fi/18884uhlc1q241xlc4a3c/facts.png?rlkey=s4nlp8e6zgu3epx4qi8twjfic&dl=0" className="mb-5 rounded-lg shadow-xl" alt="germany ballon" />
              </a>
              <h2 className="mb-2 text-xl font-bold leading-tight text-gray-800 ">
                <a href="#">Top 10 interesting facts about Germany</a>
              </h2>
              <p className="mb-4 font-light text-gray-500 ">Germany, known for its rich history, stunning landscapes, and vibrant culture, is a country that never fails to captivate and intrigue.</p>
              <a href="#" className="inline-flex items-center font-medium underline underline-offset-4 text-gray-700  hover:no-underline">
                Read in 2 minutes
              </a>
            </article>
            <article className="max-w-xs">
              <a href="#">
                <img src="https://dl.dropboxusercontent.com/scl/fi/skr7uljjhm49zo8bqopww/masters.png?rlkey=w3w29mgvggy0y0cxlsfivnheq&dl=0" className="mb-5 rounded-lg shadow-xl" alt="student with germany flag" />
              </a>
              <h2 className="mb-2 text-xl font-bold leading-tight text-gray-800 ">
                <a href="#">Masters in Germany: Unlocking Academic..</a>
              </h2>
              <p className="mb-4 font-light text-gray-500">Germany, a land of innovation and academic brilliance, has emerged as a top destination for international students seeking a Master's degree.</p>
              <a href="#" className="inline-flex items-center font-medium underline underline-offset-4 text-gray-700  hover:no-underline">
                Read in 12 minutes
              </a>
            </article>
            <article className="max-w-xs">
              <a href="#">
                <img src="https://dl.dropboxusercontent.com/scl/fi/m5x4r8gk0mqr2p0iizup6/confusion.png?rlkey=27pk3xae634nr47jofcrilvz3&dl=0" className="mb-5 rounded-lg shadow-xl" alt="confused" />
              </a>
              <h2 className="mb-2 text-xl font-bold leading-tight text-gray-800 ">
                <a href="#">Students of 10th & 12th: Which Board to Choose?</a>
              </h2>
              <p className="mb-4 font-light text-gray-500 ">Today, each student as well as parent is worried about which board is the best to study and the concern is much amongst students who are in 10th and...</p>
              <a href="#" className="inline-flex items-center font-medium underline underline-offset-4 text-gray-700  hover:no-underline">
                Read in 8 minutes
              </a>
            </article>
            <article className="max-w-xs">
              <a href="#">
                <img src="https://dl.dropboxusercontent.com/scl/fi/4lcca8ifiqvl9iy0jw6nv/coaching.png?rlkey=fb8dteocr4eal3t3b83lqeh7x&dl=0" className="mb-5 rounded-lg shadow-xl" alt="coaching" />
              </a>
              <h2 className="mb-2 text-xl font-bold leading-tight text-gray-800 ">
                <a href="#">Coaching or No Coaching?</a>
              </h2>
              <p className="mb-4 font-light text-gray-500 ">Coaching OR No Coaching? Today, 90% of the student community fears failure in the 10th/ 12th board exams and they perceive joining tuition...</p>
              <a href="#" className="inline-flex items-center font-medium underline underline-offset-4 text-gray-700  hover:no-underline">
                Read in 4 minutes
              </a>
            </article>
          </div>
        </div>
      </aside>

      <Newsletter />

    </>
  )
}

export default BlogPost