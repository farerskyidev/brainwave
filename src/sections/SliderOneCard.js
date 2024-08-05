import React  from 'react';
import eclipse from "../images/eclipse.svg";
import gradient_abstract from "../images/gradient-abstract.svg"; 

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

const SliderOneCard = ({ data }) => {
    if (!data) {
        return <p>Error loading data.</p>;  
    }

    return (
    <section className='relative overflow-hidden py-20 xl:pt-136 2xl:pt-40 slider-section-second px-4' data-aos="fade-up">
        <div className="grid-x grid-padding-x items-center relative w-1440">
            <div className="cell large-6"> 
                <div className="max-w-2xl mx-auto mb-20 max-w-sm">
                    <h2 className='text-5xl leading-[3.75rem] mb-6'>{data.acf.slider_one_card_title}</h2>
                    <p className='text-x text-purpleColor2 mb-10'>{data.acf.slider_one_card_text}</p>
                    <div className=" rounded-xl w-fit">
                        <div className="border-gradient-cut rounded-xl w-fit">
                            <div className="border-gradient-content-cut">
                                <button className="text-white px-7 py-4 font-bold rounded-xl relative z-10 bg-color border-2 border-white hover:opacity-[.80]">
                                
                                <a href="/">see how it work</a>
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
                    // navigation={true}
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
    </section> 
    );
}

export default SliderOneCard;
