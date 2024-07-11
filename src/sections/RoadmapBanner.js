import React from 'react';
import banner_img from "../images/banner_img.png"; 
import banner_img_coins from "../images/banner_img_coins.png"; 

const RoadmapBanner = ({ data }) => {
  if (!data) return null;

  return (
    <section className='bg-color pt-14 m:pt-20 x:pt-28 relative'>    
        <div className=" text-center banner-wrapp">
          <div className="max-w-4xl mx-auto">
            <h1 className='text-6xl leading-[4.5rem]'>{data.acf.roadmap_banner_title}</h1>
            <p className='text-xl leading-8 mb-7 max-w-3xl mx-auto text-whiteColor-50'>{data.acf.roadmap_banner_text}</p>  
            <div className="rounded-xl w-fit margin-a">
              <div className="border-gradient-cut-none-border rounded-xl w-fit margin-a">
                
                  <button className="text-bgColor px-7 py-4 font-extrabold rounded-xl relative z-10 bg-whiteColor">
                  suggest features
                  </button>
                
              </div>
            </div>
            <div className="relative mt-62 m:mt-20 x:mt-28 2xl:mt-100">
              <div className="rounded-xl border-gradient border-gradient-content">
                <img className='relative z-10' src={banner_img} alt="banner_img"/>      
              </div>
              <img className='absolute -top-1/4 left-1/4 z-10' src={banner_img_coins} alt="banner_img_coins"/> 
            </div>

          </div>
        </div>
      </section>
  );
}

export default RoadmapBanner;
