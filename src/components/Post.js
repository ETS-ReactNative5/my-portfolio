import React, {useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import sanityClient from '../client.js';

export default function Post(){
    const [postData, setPost] = useState([]);
    const [searchField, setSearchField] = useState('');
    useEffect(() => {
        sanityClient.fetch(`*[_type == 'post']{
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
        }`)
        .then((data) => setPost(data))
        .catch(console.error);
    }, []);

    const handleChange = (event) => {
        setSearchField(event.target.value);
      }

      const filteredProjects = 
      postData.sort().filter(project => project.title.toLowerCase().includes(searchField.toLowerCase()))

      
    

    return (
        <main className="min-h-screen lg:p-12 p-4 bg-blue-200">
            <section className="p-3 container mx-auto bg-gray-700" >
            <input 
            className="p-1 w-full"
            type="search"
            placeholder="Search by keyword..."
            onChange={handleChange}
        />
                <h1 className="my-6 rounded bg-gray-900 text-red-600 text-3xl lg:text-5xl flex justify-center cutive">Code Dojo Blog</h1>
                {/* <h2 className="text-lg text-red-800 flex justify-center ">Stay Up-To-Date On My Coding Journey...</h2> */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    { filteredProjects && filteredProjects.map((post, index) => (

                    
                        <article>
                        <h3 className="my-3 text-gray-800 text-lg font-blog p-3 bg-red-600 text-red-100 bg-opacity-75 rounded">{post.title}</h3>
                        <Link to={"/post/" + post.slug.current} key={post.slug.current}>
                        <span className="block h-64 relative rounded shadow leading-snug bg-white border-l-8 border-red-400" key={index}>
                            <img src={post.mainImage.asset.url} alt={post.mainImage.alt} className="w-full h-full rounded-r object-cover absolute"/>
                            <span className="block relative h-full flex justify-end items-end pr-4 pb-4">
                            <h3 className="text-gray-800 text-sm font-blog p-1 bg-red-600 text-red-100 bg-opacity-75 rounded">Focus: {post.subtitle}</h3> 
                            </span>
                        </span>
                        </Link>
                    </article>
                    ))}
                </div>
            </section>
        </main>
    )
}