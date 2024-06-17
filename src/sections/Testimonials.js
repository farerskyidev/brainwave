import React from 'react';
import ava_1 from "../images/ava_1.png";
import ava_2 from "../images/ava_2.png";
import ava_3 from "../images/ava_3.png";
import ava_4 from "../images/ava_4.png";
import ava_5 from "../images/ava_5.png";
import ava_6 from "../images/ava_6.png";

const Testimonials = () => {
  return (
    <section className='bg-color pt-28 relative overflow-hidden pb-40'>
        <div className="mx-auto mb-16 text-center">
          <p className='text-x text-purpleColor mb-4'>ready to get started</p>
          <h2 className='text-5xl leading-[3.75rem] mb-6'>What the community is saying</h2>
        </div> 
        <div className="grid-x grid-padding-x items-center py-5 relative w-1440 gap-y-8">
          <div className="cell large-4 medium-6 small-12">
            <article className="testimonials rounded-2xl">
              <div className="p-10">
                <p className='text-lg codepro-reg text-purpleColor2'>"As an engineer, I need to stay up-to-date with the latest technologies and trends. Brainwave's AI chatbot is a valuable resource for me, providing me with customized recommendations and insights that help me stay ahead of the curve. I would recommend this app to anyone looking to improve their knowledge and skills in their field."</p>
              </div>
              <div className="flex justify-between px-10 py-6 testimonials_bottom">
                <div>
                  <p className='text-lg'>David Chen</p>
                  <p className='text-sm text-purpleColor'>Engineer</p>
                </div>
                <div>
                  <img src={ava_1} alt="img" /> 
                </div>
              </div>
            </article>
          </div>
          <div className="cell large-4 medium-6 small-12">
            <article className="testimonials rounded-2xl">
              <div className="p-10">
                <p className='text-lg codepro-reg text-purpleColor2'>"I was blown away by the accuracy and speed of the AI chatbot on Brainwave. It was able to understand my queries and provide relevant recommendations in seconds."</p>
              </div>
              <div className="flex justify-between px-10 py-6 testimonials_bottom">
                <div>
                  <p className='text-lg'>David Chen</p>
                  <p className='text-sm text-purpleColor'>Engineer</p>
                </div>
                <div>
                  <img src={ava_2} alt="img" /> 
                </div>
              </div>
            </article>
          </div>
          <div className="cell large-4 medium-6 small-12">
            <article className="testimonials rounded-2xl">
              <div className="p-10">
                <p className='text-lg codepro-reg text-purpleColor2'>"I have been using Brainwave for several months and have been impressed with its capabilities. The AI chatbot is able to understand complex queries and provide accurate recommendations, making my life easier and more productive. I would recommend this app to anyone looking for a reliable and efficient AI assistant."</p>
              </div>
              <div className="flex justify-between px-10 py-6 testimonials_bottom">
                <div>
                  <p className='text-lg'>David Chen</p>
                  <p className='text-sm text-purpleColor'>Engineer</p>
                </div>
                <div>
                  <img src={ava_3} alt="img" /> 
                </div>
              </div>
            </article>
          </div>
          <div className="cell large-4 medium-6 small-12">
            <article className="testimonials rounded-2xl">
              <div className="p-10">
                <p className='text-lg codepro-reg text-purpleColor2'>"Brainwave has been a game-changer for my business. The AI chatbot helps me stay on top of industry trends and provides me with customized recommendations that help me make informed decisions. It's like having a personal assistant at my fingertips. I would highly recommend this app to any entrepreneur looking to improve their productivity and efficiency."</p>
              </div>
              <div className="flex justify-between px-10 py-6 testimonials_bottom">
                <div>
                  <p className='text-lg'>David Chen</p>
                  <p className='text-sm text-purpleColor'>Engineer</p>
                </div>
                <div>
                  <img src={ava_4} alt="img" /> 
                </div>
              </div>
            </article>
          </div>
          <div className="cell large-4 medium-6 small-12">
            <article className="testimonials rounded-2xl">
              <div className="p-10">
                <p className='text-lg codepro-reg text-purpleColor2'>"Brainwave has been a game-changer for my business. The AI chatbot helps me stay on top of industry trends and provides me with customized recommendations that help me make informed decisions. It's like having a personal assistant at my fingertips. I would highly recommend this app to any entrepreneur looking to improve their productivity and efficiency."</p>
              </div>
              <div className="flex justify-between px-10 py-6 testimonials_bottom">
                <div>
                  <p className='text-lg'>David Chen</p>
                  <p className='text-sm text-purpleColor'>Engineer</p>
                </div>
                <div>
                  <img src={ava_5} alt="img" /> 
                </div>
              </div>
            </article>
          </div>
          <div className="cell large-4 medium-6 small-12">
            <article className="testimonials rounded-2xl">
              <div className="p-10">
                <p className='text-lg codepro-reg text-purpleColor2'>"Brainwave has revolutionized the way I interact with digital assistants. The AI chatbot is able to understand my preferences and provide customized suggestions that are tailored to my needs. The app is user-friendly and intuitive, making it a joy to use."</p>
              </div>
              <div className="flex justify-between px-10 py-6 testimonials_bottom">
                <div>
                  <p className='text-lg'>David Chen</p>
                  <p className='text-sm text-purpleColor'>Engineer</p>
                </div>
                <div>
                  <img src={ava_6} alt="img" /> 
                </div>
              </div>
            </article>
          </div>
          
        </div>

          
      </section>
  );
}

export default Testimonials;
