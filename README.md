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
