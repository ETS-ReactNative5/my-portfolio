import React from 'react';
import './SkillsGallery.scss';
import bootstrap from '../images/gallery/bootstrap-5-1.svg';
import css from '../images/gallery/css-3.svg';
import firebase from '../images/gallery/firebase-1.svg';
import html5 from '../images/gallery/html-1.svg';
import javascript from '../images/gallery/logo-javascript.svg';
import mongo from '../images/gallery/mongodb-icon-1.svg';
import nodejs from '../images/gallery/nodejs-icon.svg';
import reactimg from '../images/gallery/react-1.svg';
import tailwind from '../images/gallery/tailwind-css-2.svg';
// import MyModal from './MyModal';

const data = [
  {
    id: 1,
    name: 'React',
    image: reactimg,
    cheatSheet: 'https://devhints.io/react',
    officialDocs: 'https://reactjs.org/docs/getting-started.html',
  },
  {
    id: 2,
    name: 'Firebase',
    image: firebase,
    cheatSheet: 'https://devhints.io/react',
    officialDocs: 'https://reactjs.org/docs/getting-started.html',
  },
  {
    id: 3,
    name: 'Tailwind',
    image: tailwind,
    cheatSheet: 'https://devhints.io/react',
    officialDocs: 'https://reactjs.org/docs/getting-started.html',
  },
  {
    id: 4,
    name: 'Node',
    image: nodejs,
    cheatSheet: 'https://devhints.io/react',
    officialDocs: 'https://reactjs.org/docs/getting-started.html',
  },
  {
    id: 5,
    name: 'Bootstrap',
    image: bootstrap,
    cheatSheet: 'https://devhints.io/react',
    officialDocs: 'https://reactjs.org/docs/getting-started.html',
  },
  {
    id: 6,
    name: 'MongoDB',
    image: mongo,
    cheatSheet: 'https://devhints.io/react',
    officialDocs: 'https://reactjs.org/docs/getting-started.html',
  },
  {
    id: 7,
    name: 'JavaScript',
    image: javascript,
    cheatSheet: 'https://devhints.io/react',
    officialDocs: 'https://reactjs.org/docs/getting-started.html',
  },
  {
    id: 8,
    name: 'HTML',
    image: html5,
    cheatSheet: 'https://devhints.io/react',
    officialDocs: 'https://reactjs.org/docs/getting-started.html',
  },
  {
    id: 9,
    name: 'CSS',
    image: css,
    cheatSheet: 'https://devhints.io/react',
    officialDocs: 'https://reactjs.org/docs/getting-started.html',
  },
];

export default class Tiles extends React.Component {
  render() {
    // map over data
    // pass data into tile component
    return (
      <div className="tiles">
        {data.map((data) => {
          return <Tile data={data} key={data.id} />;
        })}
      </div>
    );
  }
}

// create tile component
// has open state
// if for state is open

class Tile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };

    this._clickHandler = this._clickHandler.bind(this);
  }

  _clickHandler(e) {
    e.preventDefault();
    // switch state on click
    if (this.state.open === false) {
      this.setState({
        open: true,
      });
    } else {
      this.setState({
        open: false,
      });
    }
  }

  render() {
    // store styles
    let clickStyles = {};
    // once clicked
    if (this.state.open) {
      clickStyles = {
        width: '18vw',
        height: '18vw',
        position: 'absolute',
        top: '50%',
        left: '50%',
        margin: '0',
        marginTop: '-31vw',
        marginLeft: '-31vw',
        transform: 'none',
      };

      // without click
    } else {
      clickStyles = {
        width: '18vw',
        height: '18vw',
      };
    }
    // attacth
    // click
    // src
    // styles
    // to image

    return (
      <div className="tile">
        <img
          alt="tile-gallery"
          // onClick={this._clickHandler}
          src={this.props.data.image}
          style={clickStyles}
        />

        <h1 className="text-gray-200 text-center">{this.props.data.name}</h1>
      </div>
    );
  }
}
