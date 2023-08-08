/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import markdownToHtml from '../helpers/markdownToHTML';

//components
import Newsletter from './Newsletter';
import RelatedArticle from './RelatedArticle';
import Loading from './Loading';
import BadConnection from '../pages/BadConnection';

const BlogPost = () => {
  const { id } = useParams()
  const { loading, error, data } = useFetch('http://localhost:1337/api/blogs/' + id)
  const [htmlContent, setHtmlContent] = useState('');

  //maintain text formatting coming from strapi
  useEffect(() => {
    async function fetchHtmlContent() {
      try {
        const formattedHtml = await markdownToHtml(data.data.attributes.body);
        setHtmlContent(formattedHtml);
      } catch (error) {
        console.error('Error converting markdown to HTML:', error);
      }
    }

    fetchHtmlContent();
  }, [data]);

  //add styling to images coming from strapi -  we use the DOMParser to parse the HTML content, 
  //find all img elements, and add the desired styling classes like rounded-xl and shadow-md
  
  const addStylingToImages = (content) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(content, 'text/html');

    const images = doc.querySelectorAll('img');

    images.forEach((img) => {
      img.classList.add('rounded-2xl', 'shadow-2xl'); // Add your desired styles here
    });

    return doc.body.innerHTML;
  };

  if (loading) return <div className='h-screen flex items-center justify-center'><Loading message="Working on it..." /></div>
  if (error) return <BadConnection />

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
              <h1 className="mt-12 mb-8 title text-center">{data.data.attributes.title}</h1>
            </header>

            {/* <p className='text'></p> */}
            {/* <div className='space-y-6 text' dangerouslySetInnerHTML={{ __html: htmlContent }} /> */}
            <div className='space-y-6 text' dangerouslySetInnerHTML={{ __html: addStylingToImages(htmlContent) }} />
          </article>
        </div>
      </main>

      <RelatedArticle />
      <Newsletter />

    </>
  )
}

export default BlogPost