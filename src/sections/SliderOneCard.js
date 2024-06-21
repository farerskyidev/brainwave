import React from 'react';

import plus from "../images/plus.svg";
import eclipse from "../images/eclipse.svg";
import gradient_abstract from "../images/gradient-abstract.svg"; 

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

const SliderOneCard = () => {
  return (
    <section className='bg-color pt-28 relative overflow-hidden pb-40 slider-section-second border-b border-customBorder'>
          <div className="grid-x grid-padding-x items-center py-5 relative w-1440">
            <div className="cell large-6"> 
                <div className="max-w-2xl mx-auto mb-20 max-w-sm">
                    <h2 className='text-5xl leading-[3.75rem] mb-6'>Unlock the power of AI</h2>
                    <p className='text-x text-purpleColor2 mb-10'>Brainwave unlocks the potential of AI-powered applications</p>
                    <div className=" rounded-xl w-fit">
                        <div className="border-gradient-cut rounded-xl w-fit">
                            <div className="border-gradient-content-cut">
                                <button className="text-white px-7 py-4 font-bold rounded-xl relative z-10 bg-color border-2 border-white">
                                see how it work
                                </button>     
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="cell large-6"> 
                <Swiper
                    spaceBetween={50}
                    slidesPerView={1}            
                    navigation={true}
                    pagination={{ clickable: true }}
                > 
                    <SwiperSlide className='pl-16 pb-16'>
                        <article className='p-8 h-full block hover:cursor-pointer relative rounded-3xl border-2 overflow-visible'>     
                            <a className='justify-end flex' href='/'><img className="" src={eclipse} alt="eclipse" /></a>
                            <img className="absolute" src={gradient_abstract} alt="gradient-abstract" />  
                        </article>
                    </SwiperSlide>
                    <SwiperSlide className='pl-16 pb-16'>
                        <article className='p-8 h-full block hover:cursor-pointer relative rounded-3xl border-2 overflow-visible'>     
                            <a className='justify-end flex' href='/'><img className="" src={eclipse} alt="eclipse" /></a>
                            <img className="absolute" src={gradient_abstract} alt="gradient-abstract" />  
                        </article>
                    </SwiperSlide> 
                    <SwiperSlide className='pl-16 pb-16'>
                        <article className='p-8 h-full block hover:cursor-pointer relative rounded-3xl border-2 overflow-visible'>     
                            <a className='justify-end flex' href='/'><img className="" src={eclipse} alt="eclipse" /></a>
                            <img className="absolute" src={gradient_abstract} alt="gradient-abstract" />  
                        </article>
                    </SwiperSlide>  
                    
                </Swiper>
            </div>
          </div>
          <img className="absolute left-2.5 bt--5 z-10" src={plus} alt="plus" /> 
          <img className="absolute right-2.5 bt--5 z-10" src={plus} alt="plus" />
      </section> 
  );
}

export default SliderOneCard;
