import React, { Component } from 'react';
import { SocialIcon } from 'react-social-icons';
import './FooterPage.css';

class FooterPage extends Component {
  render() {
    return (
      <body>
        <footer className="footer">
          <div className="container">
            <div className="row">
              <div className="footer-col">
                <h4>Projects</h4>
                <ul>
                  {/* <li className="">
                        <a className="hover:text-blue-300" target="_blank" rel="noreferrer" href="https://dreamy-knuth-237df8.netlify.app/"><i className="fas fa-2x fa-calendar-check"></i> NextEvent</a>
                    </li> */}
                  <li className="">
                    <a
                      className="hover:text-blue-300"
                      target="_blank"
                      rel="noreferrer"
                      href="https://optimistic-bose-278208.netlify.app/"
                    >
                      <i class="fas fa-2x fa-portrait"></i> NFT Minter
                    </a>
                  </li>

                  <li className="">
                    <a
                      className="hover:text-blue-300"
                      target="_blank"
                      rel="noreferrer"
                      href="https://gracious-haibt-d0bc69.netlify.app/"
                    >
                      <i className="fas fa-2x fa-grin-squint-tears"></i> Dad
                      Jokes
                    </a>
                  </li>
                  <li className="">
                    <a
                      className="hover:text-blue-300"
                      target="_blank"
                      rel="noreferrer"
                      href="https://mcooper7649.github.io/CSS-TINDOG/"
                    >
                      <i className="fa fa-2x fa-mobile"></i> Tindog
                    </a>
                  </li>

                  <li className="">
                    <a
                      className="hover:text-blue-300"
                      target="_blank"
                      rel="noreferrer"
                      href="https://thirsty-goodall-d53ffc.netlify.app/"
                    >
                      <i className="fas fa-2x fa-lightbulb"></i> LightsOut
                    </a>
                  </li>
                  <li className="">
                    <a
                      className="hover:text-blue-300"
                      target="_blank"
                      rel="noreferrer"
                      href="https://mcooper7649.github.io/angularjs_code_challenge/bootstrap_template/index.html"
                    >
                      <i className="fas fa-2x fa-euro-sign"></i> Currency
                      Creator
                    </a>
                  </li>
                </ul>
              </div>
              <div className="footer-col">
                <h4>More Projects</h4>
                <ul>
                  <li className="">
                    <a
                      className="hover:text-blue-300"
                      target="_blank"
                      rel="noreferrer"
                      href="https://distracted-ardinghelli-143d8e.netlify.app/"
                    >
                      <i className="fas fa-2x fa-dice"></i> Yahtzee
                    </a>
                  </li>
                  <li className="">
                    <a
                      className="hover:text-blue-300"
                      target="_blank"
                      rel="noreferrer"
                      href="https://sad-lovelace-f153f1.netlify.app/"
                    >
                      <i className="fas fa-2x fa-coins"></i> Flip a' Coin
                    </a>
                  </li>
                  <li className="">
                    <a
                      className="hover:text-blue-300"
                      target="_blank"
                      rel="noreferrer"
                      href="https://zen-bhaskara-0d6cd4.netlify.app/"
                    >
                      <i className="fas fa-2x fa-skull-crossbones"></i> HangMan
                    </a>
                  </li>

                  <li className="">
                    <a
                      className="hover:text-blue-300"
                      target="_blank"
                      rel="noreferrer"
                      href="https://tender-shannon-6091f8.netlify.app/"
                    >
                      <i className="fa fa-2x fa-gamepad"></i> Simon Clone
                    </a>
                  </li>
                  <li className="">
                    <a
                      className="hover:text-blue-300"
                      target="_blank"
                      rel="noreferrer"
                      href="https://cranky-snyder-38237a.netlify.app/"
                    >
                      <i className="fa fa-2x fa-gem"></i> Number Gen
                    </a>
                  </li>
                </ul>
              </div>
              <div className="footer-col">
                <h4>Utilities</h4>
                <ul>
                  <li className="">
                    <a
                      className="hover:text-blue-300"
                      target="_blank"
                      rel="noreferrer"
                      href="https://suspicious-liskov-bc2bcf.netlify.app/"
                    >
                      <i class="fas fa-2x fa-language"></i> Multi-Language &
                      Dark Mode
                    </a>
                  </li>{' '}
                  <li className="">
                    <a
                      className="hover:text-blue-300"
                      target="_blank"
                      rel="noreferrer"
                      href="https://wonderful-joliot-530457.netlify.app/"
                    >
                      <i className="fas fa-2x fa-palette"></i> Handy Palette
                    </a>
                  </li>
                  <li className="">
                    <a
                      className="hover:text-blue-300"
                      target="_blank"
                      rel="noreferrer"
                      href="https://brave-visvesvaraya-bfe6e1.netlify.app/"
                    >
                      <i className="fa fa-2x fa-edit"></i> Todo List
                    </a>
                  </li>
                </ul>
              </div>
              <div className="footer-col">
                <h4>Social</h4>
                <div className="">
                  <SocialIcon
                    url="https://github.com/mcooper7649"
                    className="mr-4"
                    target="_blank"
                    fgColor="#fff"
                    style={{ height: 35, width: 35 }}
                  />
                  <SocialIcon
                    url="https://www.linkedin.com/in/mcooper305/"
                    className="mr-4"
                    target="_blank"
                    fgColor="#fff"
                    style={{ height: 35, width: 35 }}
                  />
                  <SocialIcon
                    url="https://medium.com/@koopnutz"
                    className="mr-4"
                    target="_blank"
                    fgColor="#fff"
                    style={{ height: 35, width: 35 }}
                  />
                </div>
                <h4 className="sub-btn">Subscribe</h4>
                <div className="">
                  <a
                    className="text-blue-500 hover:text-blue-300"
                    target="_blank"
                    rel="noreferrer"
                    href="https://aqueous-ocean-42020.herokuapp.com/"
                  >
                    <i className="animate-bounce fa fa-2x fa-bullhorn"></i> My
                    Newsletter
                  </a>
                </div>
              </div>
              <div className="footer-col"></div>
            </div>
          </div>
        </footer>
      </body>
    );
  }
}

export default FooterPage;
