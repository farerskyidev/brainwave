import React from 'react';

// Import Swiper React components
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
import eclipse from "../../images/eclipse.svg";
import gradient_abstract from "../../images/gradient-abstract.svg";

function Home() {


  return ( 
    <div>
      <section className='bg-color pt-28 relative'>
        <div className=" text-center banner-wrapp">
          <div className="max-w-4xl mx-auto">
            <h1 className='text-6xl leading-[4.5rem]'>Explore the Possibilities of AI Chatting with Brainwave</h1>
            <p className='text-xl leading-8 mb-7 max-w-3xl mx-auto text-whiteColor-50'>Unleash the power of AI within Brainwave. Upgrade your productivity with Brainwave, the open AI chat app.</p>
            <div className="border-gradient-cut rounded-xl w-fit margin-a">
                <div className="border-gradient-content-cut">
                    <button className="text-white px-7 py-4 font-bold rounded-xl relative z-10 bg-color border-2 border-white">
                        sign in
                    </button>     
                </div>
            </div>
            <div className="border-gradient rounded-xl mt-24 mb-20">
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

      
    <section className='bg-color pt-28 relative overflow-hidden pb-40 slider-section-second'>
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
    <section className='bg-color pt-28 relative overflow-hidden pb-40'>
      <div className="grid-x grid-padding-x items-center py-5 relative w-1440">
        <div className="cell large-6">
          <div className="max-w-2xl mx-auto mb-20 max-w-sm">
            <h2 className='text-5xl leading-[3.75rem] mb-6'>AI chat app for seamless collaboration</h2>

            <ul>
              <li><p className='text-x mb-2'>Seamless Integration</p><p className='text-x text-purpleColor2 mb-8'>With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.</p></li>
              <li><p className='text-x mb-8'>Smart Automation</p></li>
              <li><p className='text-x mb-8'>Top-notch Security</p></li>
            </ul>
            <div className=" rounded-xl w-fit">
                <div className="border-gradient-cut rounded-xl w-fit">
                    <div className="border-gradient-content-cut">
                        <button className="text-white px-7 py-4 font-bold rounded-xl relative z-10 bg-color border-2 border-white">
                        try it now
                        </button>     
                    </div>
                </div>
            </div>
          </div>
        </div>
        <div className="cell large-6">
          <p className='text-x text-purpleColor2 mb-8'>With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.</p>
        </div>
      </div>
    </section>
    </div>
  );
}

export default Home;
