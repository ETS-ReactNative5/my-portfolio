## My Portfolio Site built in React
---

[Walkthrough](https://www.youtube.com/watch?v=NO7_jgzVgbc)

## Overview
--

1. We Are going to to use next.js for our frontend
2. Sanity for our backend for our blog
3. Styling will be done with Tailwin CSS
4. Node will need to be install on your machine

## Setup React
---

1. From terminal create-react-app my-portfolio
2. Great no we can cd into the directory and npm run start to see our react server running.
3. Next lets install sanity
    - ``npm install -g @sanity/cli``
4. sanity login from command line to login
5. Login // I chose github
6. sanity init // This will be the next command
7. Give your project a name // studio
8. Use default dataset
9. Select Template // Blog
10. cd studio then sanity start // To start the sanity backend
11. ``http://localhost:3333/desk`` //this is our backend default url


12. We need to install the Sanity Client package next 
    - npm install @sanity/client

13. Next we can create the client.js file inside our src directory
14. inside client
    - import sanityClient from '@sanity'
    - export default sanityClient({
    projectId: "gjvkk6c4",
    dataset: "production"
})
15. to to the sanity.json and copy your api.projectId and put inside your client.js ``gjvkk6c4``
16. next go to manage.sanity.io
    - go to settings and go under cors orgin add a new origin
    - add http://localhost:3000
17. we will need to add the host url here when comlete and hosted
18. commit!

## TailWinds Setup
---

1. Tailwind is a highly customized CSS framework
    - (tailwindcss)[https://tailwindcss.com]
2. install tailwind
    - inside index.css 
        - delete everything
    - Tailwind will automatically have default classes specific attributes, but we some some basic customizations. so we will add them and the rest will be default tailwind

 index.css   
```
@import url("https://unpkg.com/@tailwindcss@0.2.x/dist/typography.min.css");
@import url("https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css");
@import url("https://fonts.googleapis.com/css2?family=Amatic+SC:wght@700&display=swap");

.cursive {
  font-family: "Amatic SC", cursive;
  font-weight: 700;
}

.prose img {
  margin-left: auto;
  margin-right: auto;
  border-radius: 5px;
}

.home-name {
  font-size: 150px;
}
```


## Componenets Setup
---

1. For this project were gonna create the components sub-directory in the src folder
2. our first components will be
    - Home
    - About
    - NavBar
    - Post
    - Project
    - SinglePost

3. We will need a module to tell the application how to link the pages between each eother
    - react-router does this for us
        - npm i react-router-dom

4. in App.js
    - Remove all the code
    - import React from react
    - import BrowserRouter, Route, Switch from react-router-dom
    - in our App return
        - BrowserRouter
        - Switch
        - Route for each of our pages
        - path to match page url
        - component is the component name
        - make sure the order has the slug page ABOVE the post page
        - add exact to your Home route
        - import all your components at the top of the page

```
import React from 'react';
import { BrowserRouter, Route, Switch }  from 'react-router-dom';
import Home from "./components/Home";
import About from "./components/About";
import SinglePost from './components/SinglePost';
import Post from './components/Post'
import Project from './components/Project'


function App(){
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Home} path='/' exact />
        <Route component={About} path='/about' />
        <Route component={SinglePost} path='/post/:slug' />
        <Route component={Post} path='/post' />
        <Route component={Project} path='/project' />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
```


## Adding Code to new Components
---

- Add boiler plate data to each component

```
import React from 'react'

export default function About(){
    return <h1>About Page!</h1>
}
```

1. Once you have copied and changed the boilerplate. save it
    * protip click then hold option to have your cursur in multipleplaces


## Navbar
--

1. Lets Open Navbar.js
    - import Link from react-router-dom

2. We will need 4 tags inside our navbar
    - header
        - add classname="bg-red-600"
    - div
        - add className="container mx auto flex justify-between"
    - nav
    - NavLink
        - to '/'
        - Within our NavLinks
            - List our pages names
            - put "to=" the correct route
        - to '/post'
        - classNames
            - inline-flex items-center py-3 px-3 my-6 rounded-text-red-200 hover:text-green-800
            - activeClassName text-red-100 bg-red-700
        - copy our '/post' class and active class to project and about navlinks

3. Social Icons
    - Under our ``</nav>`` tag
    - npm install react-social-icons from terminal
    - add a div below the nav tag
    - paste this code 3 times
        - ``<SocialIcon url="" className='mr-4 ' target="_blank" fgColor="#fff" style={{height: 35, width: 35}} />``
    - Add in the URL of your favorite Social media Site


## Home page
--

1. First We want to create a images folder inside our src folder
2. import image from that folder for our image
3. we will have these tags
    - Main
        - just the wrapper, no classes
    - Img
        - src {image}
        - classname
            - "absolute object-cover w-full h-full" 
    - Section
        - className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8 "
        - h1
            - ``<h1 className="text-6xl text-green-100 font-bold cursive leading-none lg: leading-snug home-name">Hello. I'm Michael</h1>``



## Post Page
---

POST Function 
---
1. Lets remove the h1 placeholder
2. Import sanityClient form '../client.js'
3. create function Post
4. inside body, postData, setPost = useState(null)
5. useEffect after 
6. SanityClient Fetch ALL of type post // dont forget backticks!
7. in the body of our fetch
    - title
    - slug
    - mainImage
        - asset ->
            - _id
            - url
        - alt
8. then((data) => setPost(data))
9. catch and console.error
10. [] for possible errors

Post Return
---

1. main tag as our wrapper
    - className="bg-green-100 min-h-screen p-12"
2. section tag
    - classes: container mx-auto
3. h1 tag
    - classes: text-5xl flex justify-center cursive
    - content: Blog Post Page
4. h2 
    - className="text-lg text-gray-600 flex justify-center mb-12"
    - content: welcome to my page
5. Grid (responsive)
    - classes: grid md: grid-cols-2 lg: grid-cols-3 gap-8

6. Before our next tag we need to map through our postData && postData map
    - dont for get to put jsx wrapper around article
    - passing (post, index)
    - fat arrow then wrap our article tags with ()
    - inside our article
        - Link Tag
            - to={"/post/" + post.slug.current} key={post.slug.current}
        - span Tag
            - className="block h-64 relative rounded shadow leading-snug bg-white border-l-8 border-green-400" key={index}
            - img Tag
                - src={post.mainImage.asset.url} alt={post.mainImage.alt} className="w-full h-full rounded-r object-cover absolute"
            - span
                - className="block relative h-full flex justify-end items-end pr-4 pb-4">
                    - h3 Tag className="text-gray-800 text-lg font-blog px-3 py-4 bg-red-700 text-red-100 bg-opacity-75 rounded">{post.title}



## Sanity Studio
---

1. Inside our Sanity fetch type=='post' it is pulling that information from inside our sanity package from the studio>schemas>post.js you can see
    - name: 'post'
    - title: 'Post' etc
2. Lets create our first blog post so we can see if our content will render
    - got to http://localhost:3333/desk
        - if its not loading
            - go to studio directory and type 'sanity start'

3. Once its running we can click on post
    - and start our first Post
    - Choose a Title
    - generate a slug, based off title
    - author, skip
        - it has a reference to author schema
    - upload an image for our blog
    - in the body 
        - This is my blog post. Hope you like it! :)
    - PUBLISH
    - go to author tab on left panel
    
4. Inside our new Author Panel
    - Name
        - Michael
        - generate slug
        - upload image
        - bio
            - Full Stack Developer Looking for an Opportunity to build an amazing company.
        - publish