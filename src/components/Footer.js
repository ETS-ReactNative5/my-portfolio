import React from 'react';
import {Link} from 'react-router-dom';

export default function Footer () {
    return (
            <div className="bg-blue-600 text-blue-300">
      <div className="project-div">
      <ul className="fa-ul flex pt-10" id="projects">
        <li className="text-center">
          <a className="ml-4 hover:text-red-300" target="_blank" href="https://gracious-haibt-d0bc69.netlify.app/"><i className="fas fa-2x fa-dice"></i> Yahtzee</a>
        </li>
        <li className="text-center">
          <a className="ml-4 hover:text-red-300" target="_blank" href="https://gracious-haibt-d0bc69.netlify.app/"><i className="fas fa-2x fa-grin-squint-tears"></i> Dad Jokes</a>
        </li>
        <li className="text-center">
          <a className="ml-4 hover:text-red-300" target="_blank" href="https://brave-visvesvaraya-bfe6e1.netlify.app/"><i className="fa fa-2x fa-edit"></i> Todo List</a>
        </li>
        <li className="text-center">
          <a className="ml-4 hover:text-red-300" target="_blank" href="https://sad-lovelace-f153f1.netlify.app/"><i className="fas fa-2x fa-coins"></i> Flip a' Coin</a>
        </li>
        <li className="text-center">
          <a className="ml-4 hover:text-red-300" target="_blank" href="https://thirsty-goodall-d53ffc.netlify.app/"><i className="fas fa-2x fa-lightbulb"></i> LightsOut</a>
        </li>
        <li className="text-center">
          <a className="ml-4 hover:text-red-300" target="_blank" href="https://zen-bhaskara-0d6cd4.netlify.app/"><i className="fas fa-2x fa-skull-crossbones"></i> HangMan</a>
        </li>
        <li className="text-center">
          <a className="ml-4 hover:text-red-300" target="_blank" href="https://mcooper7649.github.io/CSS-TINDOG/"><i className="fa fa-2x fa-mobile"></i> Tindog</a>
        </li>
        <li className="text-center">
          <a className="ml-4 hover:text-red-300" target="_blank" href="https://tender-shannon-6091f8.netlify.app/"><i className="fa fa-2x fa-gamepad"></i> Simon Clone</a>
        </li>
        
        <li className="text-center">
          <a className="ml-4 hover:text-red-300" target="_blank" href="https://cranky-snyder-38237a.netlify.app/"><i className="fa fa-2x fa-gem"></i> Lotto Number Generator</a>
        </li>
        <li className="text-center">
          <a className="ml-4 hover:text-red-300" target="_blank" href="https://condescending-dijkstra-6ea691.netlify.app/"><i className="fa fa-2x fa-dashboard"></i> My Crypto Dashboard</a>
        </li>
        <li className="text-center">
          <a className="ml-4 hover:text-red-300" target="_blank" href="https://aqueous-ocean-42020.herokuapp.com/"><i className="fa fa-2x fa-bullhorn"></i> My Newsletter</a>
        </li>
        <li className="text-center">
          <a className="ml-4 hover:text-red-300" target="_blank" href="https://therecipebox.netlify.app/"><i className="fas fa-pizza-slice fa-2x"></i> Recipe Box App</a>
        </li>
      </ul>
    </div>
        <div>
            <p className="py-10 text-center">Crafted by a <i className="hover:text-red-300 fas fa-user-ninja fa-2x px-2"></i><Link to="/" className="hover:text-blue-300"> © 2021 MyCodeDojo</Link></p>
        </div>
        </div>
    )
}