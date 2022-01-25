import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import sanityClient from '../client.js';
import { ThemeContext } from '../contexts/ThemeContext';

export default function Post() {
  const { isDarkMode } = useContext(ThemeContext);

  const [postData, setPost] = useState([]);
  const [searchField, setSearchField] = useState('');
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == 'post']{
            title,
            subtitle,
            slug,
            mainImage{
                asset->{
                    _id,
                    url
                },
                alt
            }
        }`
      )
      .then((data) => setPost(data))
      .catch(console.error);
  }, []);

  const handleChange = (event) => {
    setSearchField(event.target.value);
  };

  const filteredProjects = postData
    .sort()
    .filter((project) =>
      project.title.toLowerCase().includes(searchField.toLowerCase())
    );

  const styles = {
    main: isDarkMode
      ? 'bg-gray-700 min-h-screen lg:p-12 p-4 '
      : 'bg-img2 min-h-screen lg:p-12 p-4 ',
    section: isDarkMode
      ? 'p-5 container mx-auto bg-gray-800 opacity-10 rounded-lg'
      : 'p-5 container mx-auto bg-gray-800 opacity-10 rounded-lg',
    input: {
      backgroundColor: 'white',
      border: '1px solid white',
      borderRadius: '25px',
      paddingLeft: '3px',
    },
  };
  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <input
          className="p-1 w-full rounded-md "
          type="search"
          placeholder="🔍 Search by keyword eg: React, Node, Mongo"
          onChange={handleChange}
          style={styles.input}
        />
        <hr className=""></hr>
        <h1 className="my-6 py-1 rounded text-gray-200 bg-black text-3xl lg:text-5xl flex justify-center cutive">
          Code Dojo Blog
        </h1>
        <hr className=""></hr>
        {/* <h2 className="text-lg text-red-800 flex justify-center ">Stay Up-To-Date On My Coding Journey...</h2> */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects &&
            filteredProjects.map((post, index) => (
              <article key={index}>
                <h3 className="my-3 text-gray-800 text-lg font-blog p-3  text-red-100 bg-opacity-75 rounded">
                  {post.title}
                </h3>
                <Link to={'/post/' + post.slug.current} key={post.slug.current}>
                  <span
                    className="block h-64 relative rounded shadow leading-snug bg-white border-l-8 border-red-400"
                    key={index}
                  >
                    <img
                      src={post.mainImage.asset.url}
                      alt={post.mainImage.alt}
                      className="w-full h-full rounded-r object-cover absolute"
                    />
                    <span className="relative h-full flex justify-end items-end pr-4 pb-4">
                      <h3 className="text-gray-800 text-sm font-blog p-1  text-red-100 bg-opacity-75 rounded">
                        Focus: {post.subtitle}
                      </h3>
                    </span>
                  </span>
                </Link>
              </article>
            ))}
        </div>
      </section>
    </main>
  );
}
