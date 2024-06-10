import React from "react";
import { NavLink } from "react-router-dom";
 

export const NewAccount = () => {
  return (
      
      <header> 

        <div className="grid-x grid-padding-x">
          
            <div className="cell large-2"> 

              <div>
                <h1 className="text-3xl font-bold text-white">
                    Hello world!
                  </h1>
              </div>
            </div>
            <div className="cell large-8"> 
              
                <nav>
                  <ul className="gap-x-12 flex justify-center text-xs font-semibold text-whiteColor-80 uppercase">
                    <li><NavLink to="/features">Features</NavLink></li>
                    <li><NavLink to="/pricing">Pricing</NavLink></li>
                    <li><NavLink to="/how-to-use">How To Use</NavLink></li>
                    <li><NavLink to="/roadmap">Roadmap</NavLink></li> 
                  </ul>
                </nav>
              
            </div> 
            <div className="cell large-2">Вміст 3</div>
            <div>
              <NavLink to="/new-account">New Account</NavLink>
            </div>
          
        </div>
      </header>
    
  );
}

export default NewAccount; 


