import React from 'react';
import img_122 from "../images/img_122.png";


const Colaboration = () => {
  return (
    <section className='bg-color pt-28 relative overflow-hidden pb-40'>
        <div className="grid-x grid-padding-x items-center py-5 relative w-1440">
          <div className="cell large-6">
            <div className="max-w-2xl mx-auto mb-20 max-w-sm">
              <h2 className='text-5xl leading-[3.75rem] mb-6'>AI chat app for seamless collaboration</h2>

              <ul>
                <li><p className='text-x mb-2'>Seamless Integration</p><p className='text-x text-purpleColor2 mb-8'>With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.</p></li>
                <li><p className='text-x mb-8'>Smart Automation</p></li>
                <li><p className='text-x mb-8'>Top-notch Security</p></li>
              </ul>
              <div className=" rounded-xl w-fit">
                  <div className="border-gradient-cut rounded-xl w-fit">
                      <div className="border-gradient-content-cut">
                          <button className="text-white px-7 py-4 font-bold rounded-xl relative z-10 bg-color border-2 border-white">
                          try it now
                          </button>     
                      </div>
                  </div>
              </div>
            </div>
          </div>
          <div className="cell large-6 max-w-md m-auto">
            <p className='text-x text-purpleColor2 mb-8'>With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.</p>
            <img className="" src={img_122} alt="img_122" />      
          </div>
        </div>
      </section>
  );
}

export default Colaboration;
