import React from "react";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
      
      <header> 
        <div className="headerWrapper">
          <div className="grid-x grid-padding-x size-full items-center">
            <div className="cell large-3"> 
              <div>
                <h1 className="text-3xl font-bold text-white">
                    Hello world!
                  </h1>
              </div>
            </div>
            <div className="cell large-6"> 
              <nav>
                <ul className="gap-x-12 flex justify-center font-semibold text-whiteColor-80">
                  <li><NavLink to="/features">Features</NavLink></li>
                  <li><NavLink to="/pricing">Pricing</NavLink></li>
                  <li><NavLink to="/how-to-use">How To Use</NavLink></li>
                  <li><NavLink to="/roadmap">Roadmap</NavLink></li> 
                </ul>
              </nav>
            </div> 
            <div className="cell large-3 flex justify-end">
              <div className="flex gap-x-8">
                <NavLink className='text-xs font-semibold text-whiteColor-80' to="/new-account">New Account</NavLink> 
                <button className="text-white px-7">button</button>
                </div>
            </div>
          </div>
        </div>

      </header>
    
  );
}

export default Header; 


