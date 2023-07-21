import React from 'react'

const BlogPost = () => {
  return (
    <>
      <main className="mt-40 lg:mt-44 pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white">
        <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
          <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue">
            <header className="mb-4 lg:mb-6">
              <address className="flex items-center mb-10 not-italic justify-center">
                {/* px-10 mx-auto py-36 sm:px-20 sm:py-16 lg:py-28 */}
                <div className="inline-flex items-center mr-3 text-sm text-gray-900">
                  <img className="mr-4 w-16 h-16 rounded-full shadow-md" src="https://dl.dropboxusercontent.com/scl/fi/tquj6ut28jey0o3bz6ewl/founder.jpg?rlkey=9qq5d9no36kkzyzes0agllap9&dl=0" alt="founder" />
                  <div>
                    <span className="text-xl font-semibold text-gray-700">Piyush Khandelwal</span>
                    <p className="text-base font-light text-gray-600">Founder, Educator & CEO Headstart</p>
                    <p className="text-base font-light text-gray-500">
                      <time pubdate datetime="2022-02-08" title="February 8th, 2022">Feb. 8, 2022</time>
                    </p>
                  </div>
                </div>
              </address>
              <hr className='shadow-xl' />
              {/* mt-2 text-3xl font-semibold tracking-tight text-primary sm:text-4xl */}
              <h1 className="mt-12 mb-8 text-3xl font-bold text-primary sm:text-4x text-center">How to finance your studies in Germany</h1>
            </header>

            <p className='leading-7 text-base text-gray-600 text-justify'>Studying in Germany can be a rewarding experience, but it's essential to figure out how to manage your finances as an international student. While education in Germany is free, there are still living expenses to consider. At HeadStart, we understand the importance of financial planning, so here are some tips and tricks to help you finance your stay and studies in Germany.</p>

            <figure><img src="https://dl.dropboxusercontent.com/scl/fi/jczy1vt57xoc9rxl5hmkg/germanyblog.jpg?rlkey=dbti68pv98gf00w6lg7vef7wk&dl=0" className='mt-14 rounded-2xl shadow-xl' alt="" />
              {/* <figcaption>Digital art by Anonymous</figcaption> */}
            </figure>
            {/* mt-16 text-justify text-base text-gray-600 space-y-8 */}
            <ol className='mt-16 leading-7 space-y-5 text-justify text-base text-gray-600'>
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
            <h3 className='mt-14 font-bold text-xl text-gray-600'>Conclusion</h3>
            <p className='mt-4 leading-7 text-justify text-gray-600 text-base'>
              Financing your studies in Germany requires careful financial planning and consideration of various options. Starting to save early, utilizing parental income, working part-time, exploring student loans, and seeking scholarships can all contribute to covering your living expenses. At HeadStart, we understand the importance of financial support, and we encourage our students to explore these opportunities to ensure a successful and fulfilling educational experience in Germany.
            </p>
          </article>
        </div>
      </main>

      <aside aria-label="Related articles" className="py-8 lg:py-24 bg-gray-50">
        <div className="px-4 mx-auto max-w-screen-xl">
          <h2 className="mb-8 text-2xl font-bold text-gray-600 text-center">Related articles</h2>
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 justify-center">
            <article className="max-w-xs">
              <a href="#">
                <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-1.png" className="mb-5 rounded-lg" alt="Image 1" />
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
                <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-2.png" className="mb-5 rounded-lg" alt="Image 2" />
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
                <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-3.png" className="mb-5 rounded-lg" alt="Image 3" />
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
                <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-4.png" className="mb-5 rounded-lg" alt="Image 4" />
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

      <section className="bg-white">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-md sm:text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-primary sm:text-4xl text-center">Sign up for our Newsletter</h2>
            <p className="mx-auto mb-8 max-w-2xl font-light text-gray-600 text-base md:mb-12 sm:text-lg text-center">Stay up to date with the roadmap progress, announcements and exclusive discounts feel free to sign up with your email.</p>
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
                  <button type="submit" className="py-3 px-5 w-full text-sm font-medium text-center text-white rounded-lg border cursor-pointer bg-primary sm:rounded-none sm:rounded-r-lg hover:bg-primary-hover">Subscribe</button>
                </div>
              </div>
              <div className="mx-auto max-w-screen-sm text-sm text-center text-gray-500 font-light">Your email is safe with us. We don't spam.</div>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default BlogPost