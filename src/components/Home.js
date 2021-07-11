import React, {Component} from 'react'
import Background from '../images/palm.jpg'

class Home extends Component{
    state = {
        quote: ''
      }
      
   
    componentDidMount(){
      const axios = require('axios');
  
       axios.get('https://api.quotable.io/random').then(resp => {
           console.log(resp.data)
          this.setState({
            quote: resp.data.content,
            author: resp.data.author
          })
          });
         
     }

    //  componentDidMount(){
    //     const axios = require('axios');
    
    //      axios.get('https://api.whatdoestrumpthink.com/api/v1/quotes/random').then(resp => {
    //         this.setState({
    //           quote: resp.data.message
    //         })
    //         });
           
    //    }
    render(){ 
    return (
        <main style={{backgroundImage: "url(" + Background + ")"}} className="bg-cover">
            {/* <img src={image} alt="Palm Leaves" className="absolute h-full lg:w-full" /> */}
            <section className="relative justify-center min-h-screen pt-12 lg:pt-64 lg:px-8 ">
                <h1 className="text-center text-4xl lg:text-6xl text-green-100 font-bold cursive lg:home-name">Hello. I'm <span className="text-red-400">Michael</span></h1>
                <h2 className="pt-20 pb-10 mx-20 text-center text-2xl lg:text-3xl text-500 font-bold cursive lg:home-name">"{this.state.quote}"</h2>
                <h2 className="mx-20 text-center text-2xl lg:text-3xl text-green-400 font-bold cursive lg:home-name">-{this.state.author}</h2>

            </section>
        </main>
    )
}
}

export default Home;