import React from 'react';
import bracket_1 from "../images/bracket_1.png";
import bracket_2 from "../images/bracket_2.png";

const Unlock = ({ data }) => {
  if (!data) {
    return <p>Error loading data.</p>;  
  }

  const { acf } = data;
  const { unlock_title, unlock_text, unlock_subtitle, unlock, unlock_image } = acf;

  const imageUrl = typeof unlock_image === 'string' ? unlock_image : null;

  return (
    <section className='pb-20 xl:pb-136 2xl:pb-40 relative overflow-hidden px-4' data-aos="fade-up">
      <div className="grid-x grid-padding-x items-center py-5 relative w-1440">
        <div className="cell large-6">
          {imageUrl ? (
            <img className='rounded-xl' src={imageUrl} alt="Descriptive alt text for banner image" />
          ) : (
            <p>Image not available</p>
          )}
        </div>
        <div className="cell large-6">
          <div className="max-w-2xl mx-auto mb-20 max-w-xl">
            <span className='text-purpleColor relative px-4 text-xs roadmap-span z-10'> 
              <img className="absolute top-0 left-0" src={bracket_2} alt="" />
              {unlock_subtitle}
              <img className="absolute top-0 right-0" src={bracket_1} alt="" />
            </span>
            <h2 className='text-5xl leading-[3.75rem] mb-6 mt-6'>{unlock_title}</h2>
            <p className='text-x text-purpleColor2 mb-10'>{unlock_text}</p>
            <div className="rounded-xl w-fit">
              <div className="border-gradient-cut rounded-xl w-fit">
                <div className="border-gradient-content-cut">
                  <button className="text-white px-7 py-4 font-bold rounded-xl relative z-10 bg-color border-2 border-white hover:opacity-[.80]">
                    <a href="/">connect now</a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='mt-20'>
        <div className="grid-x grid-padding-x items-center py-5 relative w-1440">
          {unlock.map((item, index) => (
            <div key={index} className="cell large-3 medium-6 small-12">
              <article className='relative unlock-card pt-10'>
                <div className='max-w-64'>
                  <p className='text-xs text-oldLavender mb-1'>{item.number}</p>
                  <h5 className='h-16'>{item.title}</h5>
                  <p className='text-purpleColor2 mt-2.5 invisible'>{item.text}</p>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Unlock;
