import React, { useState, useEffect, useContext } from 'react';
import sanityClient from '../client.js';
import './Logo.css';
import imageUrlBuilder from '@sanity/image-url';
import { ThemeContext } from '../contexts/ThemeContext';
import { ContactUs } from './ContactForm.js';

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function About() {
  const { isDarkMode } = useContext(ThemeContext);

  const [author, setAuthor] = useState(null);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "author"]{
        name,
        "bio": bio[0].children[0].text,
        "authorImage": image.asset->url
      }`
      )
      .then((data) => setAuthor(data[0]))

      .catch(console.error);
  }, []);

  if (!author)
    return (
      <div className="min-h-screen flex justify-center items-center bg-black">
        <button
          type="button"
          className="m-3 inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-yellow-600 hover:bg-yellow-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150 cursor-not-allowed"
          disabled=""
        >
          <svg
            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              stroke-width="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          Loading
        </button>
      </div>
    );
  console.log(author);

  const styles = {
    classes: isDarkMode
      ? 'bg-gray-700 mySection pb-20'
      : 'pb-20 bg-img2 mySection',
    text: isDarkMode ? 'text-blue-500' : 'text-red-700',
  };

  return (
    <main className={styles.classes}>
      <div className="p-5 mx-auto ">
        <h1 className="rounded-t max-w-screen-sm bg-black text-white text-2xl lg:text-5xl py-4 bg-opacity-50">
          Contact
        </h1>
        <section className="overflow-hidden max-w-6xl items-center bg-black bg-opacity-50 rounded shadow-2xl lg:flex py-6 lg:px-6">
          <img
            src={urlFor(author.authorImage).url()}
            className=" rounded-full w-44 h-44 lg:w-64 lg:h-64 mr-8 sm:py-1 px-3"
            alt="Michael"
          />
          <div className="overflow-hidden w-10/12 p-5 justify-center rounded text-lg bg-red-200 bg-opacity-75 mt-3 sm:mb-3">
            <h1 className="p-2 m-2 text-center cursive text-3xl lg:text-5xl text-gray-100 mb-4">
              👋 Hey there. I'm <span className={styles.text}>Michael</span>
            </h1>
            <p className="text-center lg:text-2xl p-4">{author.bio}</p>
            <div className="text-white">
              {/* <h2 className="text-center text-red-700 text-2xl py-3">Get In Touch</h2> */}
              <ContactUs />
              <p className="text-xl p-5 pl-5 text-center ">
                Wanna talk about code? New Opportunities? Anything? Feel free to
                reach out.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
