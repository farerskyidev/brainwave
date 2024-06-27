import React, { useEffect, useState } from 'react';
import axios from 'axios';
import bracket_1 from "../images/bracket_1.png";
import bracket_2 from "../images/bracket_2.png"; 

const RoadmapSection = () => {
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
        const response = await fetch('http://brainwave.local/wp-json/wp/v2/pages/74');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();

        // Fetch image URLs asynchronously
        const imagesPromises = data.acf.roadmap.map(async (item) => {
          if (item.image) {
            const imageUrl = await fetchImage(item.image);
            return { ...item, imageUrl };
          }
          return item;
        });

        // Wait for all promises to resolve
        const roadmapData = await Promise.all(imagesPromises);

        setPageData({ ...data, acf: { ...data.acf, roadmap: roadmapData } });
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
    <section className='bg-color relative overflow-hidden pb-20 pt-20'>
      <div className="grid-x grid-padding-x relative w-1440 pt-20">
      {pageData.acf.roadmap.map((item, index) =>
          <div key={index} className="cell large-12 medium-12 small-12">
            <div className="grid-x grid-padding-x">
              <div className="cell large-4 small-12 pt-10 pb-10">
                <div className='text-center mt-10 relative'> 
                  <span className='text-purpleColor relative px-4 text-xs roadmap-span z-10'> 
                    <img className="absolute top-0 left-0" src={bracket_2} alt="bracket_2" /> 
                    {item.data}
                    <img className="absolute top-0 right-0" src={bracket_1} alt="bracket_1" /> 
                  </span>
                  <div className='roadmap-span-wrapp'></div>
                </div>
              </div>
              <div className="cell large-8 small-12 pt-10 pb-10 border-b border-l border-customBorder">
                <figure className='mt-8 flex items-start gap-x-4'>
                  <div>
                    {/* {item.imageUrl && <img src={item.imageUrl} alt="Roadmap Image" />} */}

                    {item.imageUrl && <img src={item.imageUrl} alt={item.image.alt} />}
                  </div>
                  <div className='w-fit'>
                    <h5>{item.title}</h5>
                    <div className='text-purpleColor mt-6 feature-text'>{item.text}</div>
                  </div>
                </figure>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default RoadmapSection;
