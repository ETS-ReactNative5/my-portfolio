import React, { useEffect, useState } from 'react';
import sanityClient from '../client.js';
import './Logo.css';

export default function Project() {
  const [projectData, setProjectData] = useState([]);
  const [searchField, setSearchField] = useState('');

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "project"]{
        title,
        date,
        place,
        language,
        description,
        projectType,
        link,
        tags,
        mainImage{
          asset->{
              _id,
              url
          },
          alt
      }
      }`
      )
      .then((data) => setProjectData(data))
      .catch(console.error);
  }, []);

  const handleChange = (event) => {
    setSearchField(event.target.value);
  };

  const filteredProjects = projectData.filter((project) =>
    project.title.toLowerCase().includes(searchField.toLowerCase())
  );

  return (
    <main className="bg-blue-200 min-h-screen lg:p-12 ">
      <section className="p-3 container mx-auto bg-gray-300">
        <input
          className="p-1 w-full"
          type="search"
          placeholder="Search by keyword"
          onChange={handleChange}
        />
        <h1 className="my-6 rounded text-3xl text-pink-600 lg:text-5xl flex justify-center cutive bg-green-100">
          My Projects
        </h1>
        {/* <h2 className="text-md lg:text-lg text-gray-600 flex justify-center mb-4 lg:mb-12 cutive">
          Check Out My Projects Below!
        </h2> */}
        <section className="grid lg:grid-cols-2 gap-8">
          {filteredProjects &&
            filteredProjects.map((project, index) => (
              <article
                key={index}
                className="relative rounded-lg shadow-xl bg-white p-2 lg:p-16"
              >
                <img
                  src={project.mainImage.asset.url}
                  alt={project.mainImage.alt}
                />

                <h3 className="text-blue-600 text-xl lg:text-3xl font-bold mb-2 hover:text-red-700">
                  <a
                    href={project.link}
                    alt={project.title}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.title}
                  </a>
                </h3>
                <div className="text-gray-500 text-xs space-x-4">
                  <span>
                    <strong className="font-bold">Finished on</strong>:{' '}
                    {new Date(project.date).toLocaleDateString()}
                  </span>
                  <span>
                    <strong className="font-bold">Company</strong>:{' '}
                    {project.place}
                  </span>
                  <span>
                    <strong className="font-bold">Type</strong>:{' '}
                    {project.projectType}
                  </span>
                </div>
                <p className="my-6 text-sm lg:text-lg text-gray-700 leading-relaxed">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="text-red-500 font-bold hover:underline hover:text-red-400"
                >
                  View The Project
                  <span role="img" aria-label="up pointer">
                    👆🏻
                  </span>
                </a>
              </article>
            ))}
        </section>
      </section>
    </main>
  );
}
