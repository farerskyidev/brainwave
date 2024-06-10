import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../images/logo.svg";
import plus from "../../images/plus.svg";

export const Header = () => {
  return (
      
      <header className="bg-color relative"> 
      
        <div className="headerWrapper py-5 w-1920">
          <div className="grid-x grid-padding-x size-full items-center">
            <div className="cell large-3"> 
              <div>
                  <a href="/"><img src={logo} alt="logo" /></a> 
              </div>
            </div>
            <div className="cell large-6"> 
              <nav>
                <ul className="gap-x-12 flex justify-center font-semibold">
                  <li className='text-whiteColor-50' ><NavLink to="/features">Features</NavLink></li>
                  <li className='text-whiteColor-50'><NavLink to="/pricing">Pricing</NavLink></li>
                  <li className='text-whiteColor-50'><NavLink to="/how-to-use">How To Use</NavLink></li>
                  <li className='text-whiteColor-50'><NavLink to="/roadmap">Roadmap</NavLink></li> 
                </ul>
              </nav>
            </div> 
            <div className="cell large-3 flex justify-end">
              <div className="flex gap-x-8 items-center">
                <NavLink className='text-xs font-semibold text-whiteColor-50' to="/new-account">New Account</NavLink> 
                <button className="text-white px-7 py-4 font-bold custom-border">sign in</button>
              </div>
            </div>
          </div>
          <img className="absolute bt--5" src={plus} alt="plus" /> 
          <img className="absolute right-0 bt--5" src={plus} alt="plus" /> 
        </div>

      </header>
    
  );
}

export default Header; 


