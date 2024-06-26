import React, { useEffect, useState } from 'react';
import banner_img from "../images/banner_img.png"; 
import banner_img_coins from "../images/banner_img_coins.png"; 

const RoadmapBanner = () => {
  const [pageData, setPageData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [images, setImages] = useState({});

  const fetchImage = async (imageId) => {
    try {
      const response = await fetch(`http://brainwave.local/wp-json/wp/v2/media/${imageId}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data.source_url;
    } catch (error) {
      console.error('Error fetching image data:', error);
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

        const imagesPromises = data.acf.roadmap.map(async (item) => {
          if (item.image) {
            const imageUrl = await fetchImage(item.image);
            return { ...item, imageUrl };
          }
          return item;
        });

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
    <section className='bg-color pt-14 m:pt-20 x:pt-28 relative'>    
        <div className=" text-center banner-wrapp">
          <div className="max-w-4xl mx-auto">
            <h1 className='text-6xl leading-[4.5rem]'>{pageData.acf.roadmap_banner_title}</h1>
            <p className='text-xl leading-8 mb-7 max-w-3xl mx-auto text-whiteColor-50'>{pageData.acf.roadmap_banner_text}</p>  
            <div className="border-gradient-cut rounded-xl w-fit margin-a">
                <div className="border-gradient-content-cut">
                    <button className="text-white px-7 py-4 font-bold rounded-xl relative z-10 bg-color border-2 border-white">
                        sign in
                    </button>       
                </div>
            </div>
            <div className="relative mt-62 m:mt-20 x:mt-28 2xl:mt-100">
              <div className="rounded-xl border-gradient border-gradient-content">
                <img className='relative z-10' src={banner_img} alt="banner_img"/>      
              </div>
              <img className='absolute -top-1/4 left-1/4 z-10' src={banner_img_coins} alt="banner_img_coins"/> 
            </div>

          </div>
        </div>
      </section>
  );
}

export default RoadmapBanner;
