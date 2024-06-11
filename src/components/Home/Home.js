import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


import banner_img from "../../images/photo_1.png";
import plus from "../../images/plus.svg";
import logo_1 from "../../images/logo_1.png";
import logo_2 from "../../images/logo_2.png";
import logo_3 from "../../images/logo_3.png";
import logo_4 from "../../images/logo_4.png";
import icon_01 from "../../images/01.png";
import icon_02 from "../../images/02.png";
import icon_03 from "../../images/03.png";
import icon_04 from "../../images/04.png";
import chevron_right from "../../images/chevron-right.svg";
import hover_image from "../../images/hover_image.png";

function Home() {
  return (
    <div>
      <section className='bg-color pt-28 relative'>
        <div className=" text-center banner-wrapp">
          <div className="max-w-4xl mx-auto">
            <h1 className='text-6xl leading-[4.5rem]'>Explore the Possibilities of AI Chatting with Brainwave</h1>
            <p className='text-xl leading-8 mb-7 max-w-3xl mx-auto text-whiteColor-50'>Unleash the power of AI within Brainwave. Upgrade your productivity with Brainwave, the open AI chat app.</p>
            <div class="border-gradient-cut rounded-xl w-fit margin-a">
                <div class="border-gradient-content-cut">
                    <button class="text-white px-7 py-4 font-bold rounded-xl relative z-10 bg-color border-2 border-white">
                        sign in
                    </button>     
                </div>
            </div>
            <div class="border-gradient rounded-xl mt-24 mb-20">
              <div class="border-gradient-content">
                <img className='rounded-xl relative z-10' src={banner_img} alt="banner_img"/>     
              </div>
            </div>
          </div>
        </div>
        <div className='bgHorLine h-px absolute inset-y-3/4 left-0 w-full'>
          <img className="absolute left-2.5 bt--5 z-10" src={plus} alt="plus" /> 
          <img className="absolute right-2.5 bt--5 z-10" src={plus} alt="plus" />
        </div> 
        <div className='text-center	'>
          <p className='text-whiteColor-50 mb-16 text-xs uppercase'>Helping people create beautiful content at</p>
          <div className='flex justify-center gap-x-24'>
            <img className="" src={logo_1} alt="logo_1" />
            <img className="" src={logo_2} alt="logo_2" />
            <img className="" src={logo_3} alt="logo_3" />
            <img className="" src={logo_4} alt="logo_4" />
          </div>
          
        </div>
      </section> 
      <section className='bg-color pt-28 relative overflow-hidden pb-96'>
        <div className="max-w-2xl mx-auto mb-20">
          <h2 className='text-5xl	text-center leading-[3.75rem]'>Chat Smarter, Not Harder with Brainwave</h2>
        </div>
          <div className="grid-x grid-padding-x items-center py-5 relative w-1440 slider-section">
            <div className='pl-20'>
            <Swiper
              spaceBetween={50}
              slidesPerView={4}
              navigation
              loop
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
                          <img className="" src={icon_02} alt="logo_1" /> 
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
                          <img className="" src={icon_02} alt="logo_1" /> 
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
                          <img className="" src={icon_02} alt="logo_1" /> 
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
                          <img className="" src={icon_02} alt="logo_1" /> 
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
                          <img className="" src={icon_02} alt="logo_1" /> 
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
                          <img className="" src={icon_02} alt="logo_1" /> 
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
    </div>
  );
}

export default Home;
