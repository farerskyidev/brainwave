import React, { useEffect, useState } from 'react';
import img from "../images/IMG.png";
import bracket_1 from "../images/bracket_1.png";
import bracket_2 from "../images/bracket_2.png"; 
import axios from 'axios';

const Unlock = () => {

  const [pageData, setPageData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchImage = async (imageId) => {
    try {
      const response = await fetch(`http://brainwave.local/wp-json/wp/v2/media/${imageId}`);
      if (!response.ok) {
        throw new Error('Мережева відповідь не була успішною');
      }
      const data = await response.json();
      return data.source_url; // Припускається, що source_url містить URL зображення
    } catch (error) {
      console.error('Помилка під час завантаження зображення:', error);
      return null;
    }
  };

  useEffect(() => {
    const fetchPageData = async () => {
      try {
        const response = await fetch('http://brainwave.local/wp-json/wp/v2/pages/176');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();

        // Fetch image URLs asynchronously
        const imagesPromises = data.acf.unlock.map(async (item) => {
          if (item.image) {
            const imageUrl = await fetchImage(item.image);
            return { ...item, imageUrl };
          }
          return item;
        });

        // Wait for all promises to resolve
        const roadmapData = await Promise.all(imagesPromises);

        setPageData({ ...data, acf: { ...data.acf, unlock: roadmapData } });
        setLoading(false);
      } catch (error) {
        console.error('Error fetching page data:', error);
        setLoading(false);
      }
    };
    
    fetchPageData();
  }, []);
    
  if (loading) {
    return <p>Loading...</p>;
  }
    
  if (!pageData) {
    return <p>Error: Data could not be loaded</p>;
  }


  return (
    <section className='bg-color pb-20 xl:pb-136 2xl:pb-40 relative overflow-hidden'>
        <div className="grid-x grid-padding-x items-center py-5 relative w-1440">
          <div className="cell large-6">
            <img className="" src={img} alt="img" />   
          </div>
          <div className="cell large-6">
            <div className="max-w-2xl mx-auto mb-20 max-w-xl">
              <span className='text-purpleColor relative px-4 text-xs roadmap-span z-10'> 
                <img className="absolute top-0 left-0" src={bracket_2} alt="bracket_2" /> 
                how it work: 02.
                <img className="absolute top-0 right-0" src={bracket_1} alt="bracket_1" /> 
              </span>
              <h2 className='text-5xl leading-[3.75rem] mb-6 mt-6'>Unlock the power of AI</h2>
              <p className='text-x text-purpleColor2 mb-10'>Connect with the AI chatbot to start the conversation. The chatbot uses natural language processing to understand your queries and provide relevant responses.</p>
              <div className=" rounded-xl w-fit">
                  <div className="border-gradient-cut rounded-xl w-fit">
                      <div className="border-gradient-content-cut">
                          <button className="text-white px-7 py-4 font-bold rounded-xl relative z-10 bg-color border-2 border-white">
                          connect now
                          </button>     
                      </div>
                  </div>
              </div>
            </div> 
          </div>
        </div>
        <div className='mt-20'>
          <div className="grid-x grid-padding-x items-center py-5 relative w-1440">
            {pageData.acf.unlock.map((item, index) =>
              <div key={index} className="cell large-3 medium-6 small-12">
                <article className='relative unlock-card pt-10'>
                  <div className='max-w-64'>
                    <p className='text-xs text-oldLavender mb-1'>{item.number}</p>
                    <h5 className='h-16'>{item.title}</h5>
                    <p className='text-purpleColor2 mt-2.5 invisible'>{item.text}</p>
                  </div>
                </article>
              </div>
            )}
          </div>
        </div>
          
      </section>
  );
}

export default Unlock;
