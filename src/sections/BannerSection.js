import React from 'react';
import plus from "../images/plus.svg";
import line from "./../images/line.svg"; 

const BannerSection = ({ data }) => {
  if (!data) {
    return <p>Error loading data.</p>;
  }

  const { acf } = data;
  const { banner_home_image, banner_home_text, banner_home_title, banner_home_title_span, banner_home_logos } = acf;

  const imageUrl = typeof banner_home_image === 'string' ? banner_home_image : null;

  return (
    <section className='py-14 m:py-20 x:py-28 relative px-4' data-aos="fade-up">    
      <div className="text-center banner-wrapp z-10 relative">
        <div className="max-w-4xl mx-auto">
          <h1 className='text-6xl leading-[4.5rem]'>
            {banner_home_title}
            <span className='border-span'>
              {banner_home_title_span} 
              <img src={line} alt="line" />
            </span>
          </h1>
          <p className='text-xl leading-8 mb-7 max-w-3xl mx-auto text-whiteColor-50'>{banner_home_text}</p>
          <div className="border-gradient-cut-none-border rounded-xl w-fit margin-a">
            <button className="text-bgColor px-7 py-4 font-extrabold rounded-xl relative z-10 bg-whiteColor custom-hover-delay hover:bg-whiteColor-90">
              Sign In
            </button> 
          </div>
          <div className="border-gradient rounded-xl mt-62 m:mt-20 x:mt-28 2xl:mt-100 mb-11 m:mb-100 x:mb-84 xl:mb-20">
            <div className="border-gradient-content">
              {imageUrl ? (
                <img className='rounded-xl' src={imageUrl} alt="Banner Image" />
              ) : (
                <p>Image not available</p> 
              )}
            </div>
          </div>
        </div>
      </div>
      <div className='bgHorLine h-px absolute inset-y-3/4 left-0 w-full'>
        <img className="absolute left-2.5 bt--5 z-10" src={plus} alt="plus" /> 
        <img className="absolute right-2.5 bt--5 z-10" src={plus} alt="plus" />
      </div> 
      <div className='text-center h-0 xl:h-auto'>
        {data.acf && data.acf.banner_home_text_second && (
          <p className='text-whiteColor-50 mb-16 text-xs uppercase'>{data.acf.banner_home_text_second}</p>
        )}
        <div className='flex justify-center xl:gap-x-24 gap-x-16'>
        {banner_home_logos.map((item, index) =>
          <div key={index}>
            <img className="" src={item.logo.url} alt="Logo" />
          </div>
        )}
        </div>
      </div>
      <img className="absolute left-2.5 top--5 z-10" src={plus} alt="plus" /> 
      <img className="absolute right-2.5 top--5 z-10" src={plus} alt="plus" />

      <svg className='banner_bg' width="905" height="905" viewBox="0 0 905 905" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask id="mask0_707_26229" maskUnits="userSpaceOnUse" x="0" y="0" width="905" height="905">
          <path d="M905 0H0V905H905V0Z" fill="white"/>
        </mask>
        <g mask="url(#mask0_707_26229)">
          <g filter="url(#filter0_f_707_26229)">
            <path d="M764.725 152.152H57.6934V713.818H764.725V152.152Z" fill="#18A0FB"/>
            <path d="M864.841 31.1094H234.734V514.719H864.841V31.1094Z" fill="#F2371F"/>
            <path d="M1116.54 83.7129H418.562V613.703H1116.54V83.7129Z" fill="#EE46D3"/>
            <path d="M808.844 435.531H312.791V907.263H808.844V435.531Z" fill="#00C5DF"/>
          </g>
        </g>
        <defs>
          <filter id="filter0_f_707_26229" x="-225.119" y="-251.703" width="1624.47" height="1441.78" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="141.406" result="effect1_foregroundBlur_707_26229"/>
          </filter>
        </defs>
      </svg>

      <svg className='banner_bg_2' width="1248" height="1248" viewBox="0 0 1248 1248" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle opacity="0.05" cx="624" cy="624" r="623.5" stroke="#CAC6DD"/>
        <circle opacity="0.1" cx="624" cy="624" r="526.5" stroke="#CAC6DD"/>
        <circle opacity="0.1" cx="624" cy="624" r="410.5" stroke="#CAC6DD"/>
        <circle opacity="0.1" cx="624" cy="624" r="288.5" stroke="#CAC6DD"/>
        <circle opacity="0.1" cx="624" cy="624" r="184.5" stroke="#CAC6DD"/>
      </svg>
      
      

    </section> 
  );
}

export default BannerSection;
