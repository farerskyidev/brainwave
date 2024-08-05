import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RoadmapBanner = () => {
  const [pageData, setPageData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPageData = async () => {
      try {
        const response = await axios.get('http://brainwave.local/wp-json/wp/v2/pages/74?acf_format=standard');
        setPageData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching page data:', error);
        setLoading(false);
      }
    };

    fetchPageData();
  }, []);

  if (loading) {
    return;
  }

  if (!pageData) {
    return <p>Error loading data.</p>;
  }

  const { acf } = pageData;
  const { roadmap_banner_image, roadmap_banner_text, roadmap_banner_title } = acf;

  const imageUrl = typeof roadmap_banner_image === 'string' ? roadmap_banner_image : null;

  return (
    <section className='pt-14 m:pt-20 x:pt-28 relative' data-aos="fade-up">    
      <div className="text-center banner-wrapp">
        <div className="max-w-4xl mx-auto">
          <h1 className='text-6xl leading-[4.5rem]'>{roadmap_banner_title}</h1>
          <p className='text-xl leading-8 mb-7 max-w-3xl mx-auto text-whiteColor-50'>{roadmap_banner_text}</p>  
          <div className="rounded-xl w-fit margin-a">
            <div className="border-gradient-cut-none-border rounded-xl w-fit margin-a">
              <button className="text-bgColor px-7 py-4 font-extrabold rounded-xl relative z-10 bg-whiteColor hover:opacity-[.80]">
                <a href="/">suggest features</a>
              </button>
            </div>
          </div>
          <div className="relative mt-20 m:mt-20 x:mt-28 2xl:mt-100">
            {imageUrl ? (
              <img src={imageUrl} alt="Banner Image" />
            ) : (
              <p>Image not available</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default RoadmapBanner;
