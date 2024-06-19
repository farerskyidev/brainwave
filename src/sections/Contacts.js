import React from 'react';
import gaming from "../images/gaming.svg";
import icon from "../images/icon.svg";


const Contacts = () => {
  return (
    <section className='bg-color relative overflow-hidden pb-28 pt-28 justify-between'>
        <div className="grid-x grid-padding-x justify-center py-5 relative w-1440 items-center">
          <div className="cell large-6 medium-6 small-12">
            <img className="" src={gaming} alt="gaming" />
          </div>
          <div className="cell large-6 medium-6 small-12 max-w-2xl">
            <div className="mx-auto mb-8">
              <h2 className='text-5xl leading-[3.75rem] mb-6'>Need help?</h2>
              <p className='text-x text-purpleColor mb-4'>Can’t find your answer, contact us</p>
            </div> 
            <article> 
              <section className='flex align-middle gap-x-2 py-8 border-b'>
                <div>
                  <img src={icon} alt="icon" /> 
                </div>
                <div>
                <p className='text-lg text-purpleColor'>Join our community</p>
                <p className='text-x text-lavenderGrey'>Discuss anything with other users</p>
                </div>
              </section>
              <section className='flex align-middle gap-x-2 py-8 border-b'> 
                <div>
                  <img src={icon} alt="icon" /> 
                </div>
                <div>
                <p className='text-lg text-purpleColor'>Email us</p>
                <p className='text-x text-lavenderGrey'>hello@brainwave.com</p>
                </div>
              </section>
            </article>
          </div>
      
        </div>

    </section> 
  );
}

export default Contacts;
