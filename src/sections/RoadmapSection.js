import React from 'react';
import bracket_1 from "../images/bracket_1.png";
import bracket_2 from "../images/bracket_2.png"; 

const RoadmapSection = ({ data }) => {
  if (!data) return null;

  return (
    <section className='bg-color relative overflow-hidden pb-20 pt-20'>
      <div className="grid-x grid-padding-x relative w-1440 pt-20">
        {data.acf.roadmap.map((item, index) => (
          <div key={index} className="cell large-12 medium-12 small-12">
            <div className="grid-x grid-padding-x">
              <div className="cell large-4 small-12 pt-10 pb-10">
                <div className='text-center mt-10 relative'> 
                  <span className='text-purpleColor relative px-4 text-xs roadmap-span z-10'> 
                    <img className="absolute top-0 left-0" src={bracket_2} alt="bracket_2" /> 
                    {item.data}
                    <img className="absolute top-0 right-0" src={bracket_1} alt="bracket_1" /> 
                  </span>
                  <div className='roadmap-span-wrapp'></div>
                </div>
              </div>
              <div className="cell large-8 small-12 pt-10 pb-10 border-b border-l border-customBorder">
                <figure className='mt-8 flex items-start gap-x-4'>
                  <div>
                    {item.imageUrl && <img src={item.imageUrl} alt={item.image.alt} />}
                  </div>
                  <div className='w-fit'>
                    <h5>{item.title}</h5>
                    <div className='text-purpleColor mt-6 feature-text'>{item.text}</div>
                  </div>
                </figure>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default RoadmapSection;
