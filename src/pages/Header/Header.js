import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../images/logo.svg";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons from react-icons library


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-color relative z-10">
      <div className="headerWrapper w-1920">
        <div className="grid-x grid-padding-x size-full items-center py-5 relative">
          <div className="cell large-3 medium-12 small-12">
            <div>
              <a href="/">
                <img src={logo} alt="logo" />
              </a>
            </div>
          </div>
          <div className="cell large-9 medium-12 small-12 mt-10 m:mt-0">
            <nav className="items-center" >
              <ul className={`block m:flex justify-end font-semibold menu items-center ${isMenuOpen ? 'block' : 'hidden'}`}>
                <li className="text-whiteColor-50 px-0 m:px-2 x:px-6 xl:px-8 2xl:px-12">
                  <NavLink to="/features">Features</NavLink>
                </li>
                <li className="text-whiteColor-50 px-0 m:px-2 x:px-6 xl:px-8 2xl:px-12">
                  <NavLink to="/pricing">Pricing</NavLink>
                </li>
                <li className="text-whiteColor-50 px-0 m:px-2 x:px-6 xl:px-8 2xl:px-12">
                  <NavLink to="/how-to-use">How To Use</NavLink>
                </li>
                <li className="text-whiteColor-50 px-0 m:px-2 x:px-6 xl:px-8 2xl:px-12">
                  <NavLink to="/roadmap">Roadmap</NavLink>
                </li>
                
                
                  <li className="text-whiteColor-50 justify-start grid sm:mt-4">
                    <div className="rounded-xl w-fit margin-a">
                      <div className="border-gradient-cut rounded-xl w-fit margin-a">
                        <div className="border-gradient-content-cut">
                          <button
                            className="text-white px-6 py-4 font-bold rounded-xl relative z-10 bg-color border-2 border-white hover:opacity-[.80]"
                          >
                          <a href="/">get started</a>

                          </button>
                        </div>
                      </div>
                    </div>
                  </li>              
              </ul>
            </nav>
          </div>
          <div className="rounded-xl w-fit margin-a m:hidden absolute right-15 top-20">
            <div className="border-gradient-cut rounded-xl w-fit margin-a">
              <div className="border-gradient-content-cut">
                <button
                  onClick={toggleMenu}
                  className="text-white px-7 py-4 font-bold rounded-xl relative z-10 bg-color border-2 border-white"
                >
                  {isMenuOpen ? <FaTimes /> : <FaBars />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
