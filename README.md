## My Portfolio Site built in React
---

repo info
```git remote add origin https://github.com/mcooper7649/my-portfolio.git
git branch -M main
git push -u origin main
```

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
    projectId: "",
    dataset: "production"
})
15. to to the sanity.json and copy your api.projectId and put inside your client.js ``gjvkk6c4``
16. next go to manage.sanity.io
    - go to settings and go under cors orgin add a new origin
    - add http://localhost:3000
17. we will need to add the host url here when comlete and hosted
18. 