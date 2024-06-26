import React from 'react';
import bg_prefooter_1 from "../images/bg_prefooter_1.svg";
import bg_prefooter_2 from "../images/bg_prefooter_2.svg";
import plus from "./../images/plus.svg"; 
import line from "./../images/line.svg"; 

const Prefooter = () => {
  return (
    <section className='bg-color relative overflow-hidden py-1.5'>
      <div className='pb-40 pt-40 ml-4 mr-4 relative border border-customBorder'>

      
        <div className="grid-x grid-padding-x justify-center py-5 relative w-1920">
          <div className='max-w-2xl text-center z-10'>
            <h1 className='mb-6'>Be part of the future of <span className='border-span'>Brainwave
            <img src={line} />
              </span></h1> 
            <p className='text-xl text-oldLavender mb-8'>Unleash the power of AI within Brainwave. Upgrade your productivity with Brainwave, the open AI chat app.</p>
            <div className=" rounded-xl w-fit margin-a">
              <div className="border-gradient-cut rounded-xl w-fit margin-a">
                <div className="border-gradient-content-cut">
                  <button className="text-white px-7 py-4 font-bold rounded-xl relative z-10 bg-color border-2 border-white">
                      sign in 
                  </button>     
                </div>
              </div>
            </div>
          </div>
          <div className='gradient-pre-footer -z-1' >
            <svg width="744" height="744" viewBox="0 0 744 744" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle opacity="0.05" cx="372" cy="372" r="371.5" stroke="#CAC6DD"/>
            <circle opacity="0.1" cx="371.999" cy="372" r="313.673" stroke="#CAC6DD"/>
            <circle opacity="0.1" cx="372" cy="372" r="244.519" stroke="#CAC6DD"/>
            <circle opacity="0.1" cx="371.999" cy="372" r="171.788" stroke="#CAC6DD"/>
            <circle opacity="0.1" cx="371.999" cy="372" r="109.788" stroke="#CAC6DD"/>
            </svg>
          </div>

        </div>
        <div>  
        <img className="absolute top-1 left-1" src={bg_prefooter_1} alt="bg_prefooter_1" />
        <img className="absolute bottom-1 right-1" src={bg_prefooter_2} alt="bg_prefooter_2" />
        </div>
        <img className="absolute right--5 bt--5 z-10" src={plus} alt="plus" />
        <img className="absolute right--5 top--5 z-10" src={plus} alt="plus" />
        <img className="absolute left--5 top--5 z-10" src={plus} alt="plus" /> 
        <img className="absolute left--5 bt--5 z-10" src={plus} alt="plus" />  
      </div>
    </section> 
  );
}

export default Prefooter;
