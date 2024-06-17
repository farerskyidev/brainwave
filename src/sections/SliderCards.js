import React from 'react';
import icon_01 from "../images/01.png";
import icon_02 from "../images/02.png";
import icon_03 from "../images/03.png";
import icon_04 from "../images/04.png";
import chevron_right from "../images/chevron-right.svg"; 
import hover_image from "../images/hover_image.png"; 

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

const SliderCards = () => {
  return (
    <section className='bg-color pt-28 relative overflow-hidden'>
        <div className="max-w-2xl mx-auto mb-20">
          <h2 className='text-5xl	text-center leading-[3.75rem]'>Chat Smarter, Not Harder with Brainwave</h2>
        </div>
          <div className="grid-x grid-padding-x items-center py-5 relative w-1440 slider-section">
            <div className='pl-20'>
            <Swiper
              spaceBetween={50}
              slidesPerView={4}
              loop              
              navigation={true}
              pagination={{ clickable: true }}
            > 
              <SwiperSlide>
                <article className='p-10 h-full flex flex-wrap slide_card hover:cursor-pointer relative'>
                  <div className='z-10'>
                    <div>
                      <h5 className='text-2xl mb-5'>Ask anything</h5>
                      <p className='text-purpleColor'>Lets users quickly find answers to their questions without having to search through multiple sources.</p>
                    </div>
                    <div className='flex items-end size-full'>
                      <div className='size-full flex items-center justify-between'>
                          <img className="" src={icon_01} alt="icon_01" /> 
                        <a className="flex items-center gap-5 text-xs" href='/'>explore more
                          <img src={chevron_right} alt="chevron_right"/>
                        </a>
                      </div>
                    </div>
                  </div>
                  <img className='absolute hidden' src={hover_image} alt="hover_image"/>
                </article>
              </SwiperSlide>
              <SwiperSlide>
                <article className='p-10 h-full flex flex-wrap slide_card hover:cursor-pointer relative'>
                  <div className='z-10'>
                    <div>
                      <h5 className='text-2xl mb-5'>Ask anything</h5>
                      <p className='text-purpleColor'>Lets users quickly find answers to their questions without having to search through multiple sources.</p>
                    </div>
                    <div className='flex items-end size-full'>
                      <div className='size-full flex items-center justify-between'>
                          <img className="" src={icon_02} alt="icon_02" /> 
                        <a className="flex items-center gap-5 text-xs" href='/'>explore more
                          <img src={chevron_right} alt="chevron_right"/>
                        </a>
                      </div>
                    </div>
                  </div>
                  <img className='absolute hidden' src={hover_image} alt="hover_image"/>
                </article>
              </SwiperSlide>
              <SwiperSlide>
                <article className='p-10 h-full flex flex-wrap slide_card hover:cursor-pointer relative'>
                  <div className='z-10'>
                    <div>
                      <h5 className='text-2xl mb-5'>Ask anything</h5>
                      <p className='text-purpleColor'>Lets users quickly find answers to their questions without having to search through multiple sources.</p>
                    </div>
                    <div className='flex items-end size-full'>
                      <div className='size-full flex items-center justify-between'>
                          <img className="" src={icon_03} alt="icon_03" /> 
                        <a className="flex items-center gap-5 text-xs" href='/'>explore more
                          <img src={chevron_right} alt="chevron_right"/>
                        </a>
                      </div>
                    </div>
                  </div>
                  <img className='absolute hidden' src={hover_image} alt="hover_image"/>
                </article>
              </SwiperSlide>
              <SwiperSlide>
                <article className='p-10 h-full flex flex-wrap slide_card hover:cursor-pointer relative'>
                  <div className='z-10'>
                    <div>
                      <h5 className='text-2xl mb-5'>Ask anything</h5>
                      <p className='text-purpleColor'>Lets users quickly find answers to their questions without having to search through multiple sources.</p>
                    </div>
                    <div className='flex items-end size-full'>
                      <div className='size-full flex items-center justify-between'>
                          <img className="" src={icon_04} alt="icon_04" /> 
                        <a className="flex items-center gap-5 text-xs" href='/'>explore more
                          <img src={chevron_right} alt="chevron_right"/>
                        </a>
                      </div>
                    </div>
                  </div>
                  <img className='absolute hidden' src={hover_image} alt="hover_image"/>
                </article>
              </SwiperSlide>
              <SwiperSlide>
                <article className='p-10 h-full flex flex-wrap slide_card hover:cursor-pointer relative'>
                  <div className='z-10'>
                    <div>
                      <h5 className='text-2xl mb-5'>Ask anything</h5>
                      <p className='text-purpleColor'>Lets users quickly find answers to their questions without having to search through multiple sources.</p>
                    </div>
                    <div className='flex items-end size-full'>
                      <div className='size-full flex items-center justify-between'>
                          <img className="" src={icon_02} alt="icon_02" /> 
                        <a className="flex items-center gap-5 text-xs" href='/'>explore more
                          <img src={chevron_right} alt="chevron_right"/>
                        </a>
                      </div>
                    </div>
                  </div>
                  <img className='absolute hidden' src={hover_image} alt="hover_image"/>
                </article>
              </SwiperSlide>
              <SwiperSlide>
                <article className='p-10 h-full flex flex-wrap slide_card hover:cursor-pointer relative'>
                  <div className='z-10'>
                    <div>
                      <h5 className='text-2xl mb-5'>Ask anything</h5>
                      <p className='text-purpleColor'>Lets users quickly find answers to their questions without having to search through multiple sources.</p>
                    </div>
                    <div className='flex items-end size-full'>
                      <div className='size-full flex items-center justify-between'>
                          <img className="" src={icon_03} alt="icon_03" /> 
                        <a className="flex items-center gap-5 text-xs" href='/'>explore more
                          <img src={chevron_right} alt="chevron_right"/>
                        </a>
                      </div>
                    </div>
                  </div>
                  <img className='absolute hidden' src={hover_image} alt="hover_image"/>
                </article>
              </SwiperSlide> 

            </Swiper>
            </div>
          
          </div>

    </section> 
  );
}

export default SliderCards;
