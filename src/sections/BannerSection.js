import React from 'react';
import banner_img from "../images/photo_1.png";
import plus from "../images/plus.svg";
import logo_1 from "../images/logo_1.png";
import logo_2 from "../images/logo_2.png";
import logo_3 from "../images/logo_3.png"; 
import logo_4 from "../images/logo_4.png";

const BannerSection = ({ data }) => {
  if (!data) return null;
  return (
    <section className='bg-color pt-14 m:pt-20 x:pt-28 relative'>    
        <div className=" text-center banner-wrapp">
          <div className="max-w-4xl mx-auto">
            <h1 className='text-6xl leading-[4.5rem]'>{data.acf.banner_home_title}</h1>
            <p className='text-xl leading-8 mb-7 max-w-3xl mx-auto text-whiteColor-50'>{data.acf.banner_home_text}</p>
            <div className="border-gradient-cut rounded-xl w-fit margin-a">
                <div className="border-gradient-content-cut">
                    <button className="text-white px-7 py-4 font-bold rounded-xl relative z-10 bg-color border-2 border-white">
                        sign in
                    </button>       
                </div>
            </div>
            <div className="border-gradient rounded-xl mt-62 m:mt-20 x:mt-28 2xl:mt-100 mb-11 m:mb-100 x:mb-84 xl:mb-20">
              <div className="border-gradient-content">
                <img className='rounded-xl relative z-10' src={banner_img} alt="banner_img"/>     
              </div>
            </div>
          </div>
        </div>
        <div className='bgHorLine h-px absolute inset-y-3/4 left-0 w-full'>
          <img className="absolute left-2.5 bt--5 z-10" src={plus} alt="plus" /> 
          <img className="absolute right-2.5 bt--5 z-10" src={plus} alt="plus" />
        </div> 
        <div className='text-center	h-0 x:h-auto'>
          <p className='text-whiteColor-50 mb-16 text-xs uppercase'>{data.acf.banner_home_text_second}</p>
          <div className='flex justify-center xl:gap-x-24 gap-x-16'>
            <img className="" src={logo_1} alt="logo_1" />
            <img className="" src={logo_2} alt="logo_2" />
            <img className="" src={logo_3} alt="logo_3" />
            <img className="" src={logo_4} alt="logo_4" />
          </div>
          
        </div>
        <img className="absolute left-2.5 top--5 z-10" src={plus} alt="plus" /> 
          <img className="absolute right-2.5 top--5 z-10" src={plus} alt="plus" />
      </section> 
  );
}

export default BannerSection;
