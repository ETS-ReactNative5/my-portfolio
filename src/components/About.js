import React, { useState, useEffect } from "react";
import sanityClient from "../client.js";
import aboutbg from "../images/aboutbg.jpeg";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function About() {
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

  if (!author) return <div>Loading...</div>;

  return (
    <main className="relative">
      <img
        src={aboutbg}
        alt="Florida BG background"
        className="absolute cover w-full h-full"
      />
      <div className="py-6">
        </div>
      <div className="lg:pt-48 mx-auto relative">
        <section className="bg-red-200 bg-opacity-50 rounded-lg shadow-2xl lg:flex p-20">
          <img
            src={urlFor(author.authorImage).url()}
            className="rounded w-44 h-44 lg:w-64 lg:h-64 mr-8"
            alt="Michael"
          />
          <div className="text-lg">
            <h1 className="cursive text-3xl lg:text-6xl text-blue-700 mb-4">
              Hey there. I'm{" "}
              <span className="text-red-800">{author.name}</span>
            </h1>
            <p className="text-red-800 lg:text-2xl cutive">{author.bio}</p>
            <div className="text-blue-800 cursive">
          <h2 className="text-xl">Get In Touch</h2>
          <div className="lg:flex">
          <p className="text-xl pb-5">Wanna talk about code? New Opportunities? Anything? Reach out about anything below.</p>
          <a className="bg-red-200 hover:bg-red-300 text-white font-bold lg:ml-4 ml-20 pt-6 pb-2 px-8 lg:py-2 lg:px-10 border border-blue-700 rounded" target="_blank" rel="noreferrer" href="mailto:mcooper7649@gmail.com"><i className="animate-pulse text-red-800  fas fa-2x fa-envelope-square"></i></a>
          </div>
        </div>
          </div>
        </section>
        <div className="py-10 lg:py-40">
        </div>
      </div>
    </main>
  );
}