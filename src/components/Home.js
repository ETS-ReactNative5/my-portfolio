import React, { Component } from 'react';
import './Logo.css';
const axios = require('axios');

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: 'Welcome Sensei 🥷',
      author: Date().slice(0, 16),
    };
  }

  componentDidMount() {
    axios.get('https://api.quotable.io/random').then((resp) => {
      console.log(resp.data);
      setTimeout(() => {
        this.setState({
          quote: 'This Place Is To Help Inspire Fellow Ninjas',
          author: Date().slice(0, 16),
        });
      }, 2000);
      setTimeout(() => {
        this.setState({
          quote: 'Please Check Out My Blog',
          author: Date().slice(0, 16),
        });
      }, 4000);
      setTimeout(() => {
        this.setState({
          quote: 'Subscribe And View My Projects Too!',
          author: Date().slice(0, 16),
        });
      }, 6000);
      setTimeout(() => {
        this.setState({
          quote: 'Read This Famous Quote And Stay Motivated!',
          author: Date().slice(0, 16),
        });
      }, 8000);
      setTimeout(() => {
        this.setState({
          quote: `${`"` + resp.data.content + `"`}`,
          author: `${`-` + resp.data.author}`,
        });
      }, 10000);
    });
  }

  render() {
    return (
      <main className="bg-img pt-32 min-w-screen bg-cover">
        <section className="relative justify-center h-full lg:px-8 lg:mx-20">
          <div className="h-auto grid p overflow-auto min-w-screen wrapper  mx-4 rounded bg-red-400 shadow-2xl bg-opacity-100 lg:rounded-full ">
            {/* <h1 className="pt-3 text-center text-4xl lg:text-6xl text-green-100 font-bold cursive lg:home-name">Hello. I'm <span className="text-purple-800">Michael</span></h1> */}
            <h2 className="myText lg:px-20 break-words pt-4 lg:pt-20 lg:pb-10 text-center text-3xl md:text-5xl text-purple-800 font-bold cursive lg:home-name">
              {this.state.quote}
            </h2>
            <h2 className="myText break-words text-center m-auto text-3xl text-blue-600 font-bold cursive lg:home-name">
              {this.state.author}
            </h2>
          </div>
        </section>
      </main>
    );
  }
}

export default Home;
