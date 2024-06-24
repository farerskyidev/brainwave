import React from 'react';
import img from "../images/IMG.png";
import bracket_1 from "../images/bracket_1.png";
import bracket_2 from "../images/bracket_2.png"; 

const Unlock = () => {
  return (
    <section className='bg-color pb-20 xl:pb-136 2xl:pb-40 relative overflow-hidden'>
        <div className="grid-x grid-padding-x items-center py-5 relative w-1440">
          <div className="cell large-6">
            <img className="" src={img} alt="img" />   
          </div>
          <div className="cell large-6">
            <div className="max-w-2xl mx-auto mb-20 max-w-xl">
              <span className='text-purpleColor relative px-4 text-xs roadmap-span z-10'> 
                <img className="absolute top-0 left-0" src={bracket_2} alt="bracket_2" /> 
                how it work: 02.
                <img className="absolute top-0 right-0" src={bracket_1} alt="bracket_1" /> 
              </span>
              <h2 className='text-5xl leading-[3.75rem] mb-6 mt-6'>Unlock the power of AI</h2>
              <p className='text-x text-purpleColor2 mb-10'>Connect with the AI chatbot to start the conversation. The chatbot uses natural language processing to understand your queries and provide relevant responses.</p>
              <div className=" rounded-xl w-fit">
                  <div className="border-gradient-cut rounded-xl w-fit">
                      <div className="border-gradient-content-cut">
                          <button className="text-white px-7 py-4 font-bold rounded-xl relative z-10 bg-color border-2 border-white">
                          connect now
                          </button>     
                      </div>
                  </div>
              </div>
            </div> 
          </div>
        </div>
        <div className='mt-20'>
        <div className="grid-x grid-padding-x items-center py-5 relative w-1440">
            <div className="cell large-3 medium-6 small-12">
              <article className='relative unlock-card pt-10'>
                <div className='max-w-64	'>
                  <p className='text-xs text-oldLavender mb-1'>01.</p>
                  <h5 className='h-16'>Sign up</h5>
                  <p className='text-purpleColor2 mt-2.5'>Create an account with Brainwave - AI chat app by providing your name, email</p>
                </div>
              </article>
            </div>
            <div className="cell large-3 medium-6 small-12">
              <article className='relative unlock-card pt-10'>
                <div className='max-w-64	'>
                  <p className='text-xs text-oldLavender mb-1'>02.</p>
                  <h5 className='h-16'>Connect with AI Chatbot</h5>
                  <p className='text-purpleColor2 mt-2.5'>Create an account with Brainwave - AI chat app by providing your name, email</p>
                </div>
              </article>
            </div>
            <div className="cell large-3 medium-6 small-12">
              <article className='relative unlock-card pt-10'>
                <div className='max-w-64	'>
                  <p className='text-xs text-oldLavender mb-1'>03.</p>
                  <h5 className='h-16'>Get Personalized Recommendations</h5>
                  <p className='text-purpleColor2 mt-2.5'>Create an account with Brainwave - AI chat app by providing your name, email</p>
                </div>
              </article>
            </div>
            <div className="cell large-3 medium-6 small-12">
              <article className='relative unlock-card pt-10'>
                <div className='max-w-64	'>
                  <p className='text-xs text-oldLavender mb-1'>04.</p>
                  <h5 className='h-16'>Explore and Engage</h5>
                  <p className='text-purpleColor2 mt-2.5'>Create an account with Brainwave - AI chat app by providing your name, email</p>
                </div>
              </article>
            </div>
          </div>
        </div>
          
      </section>
  );
}

export default Unlock;
