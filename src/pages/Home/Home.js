import React, { useState, useEffect, useCallback } from 'react';
import 'swiper/css';
import BannerSection from '../../sections/BannerSection';
import SliderCards from '../../sections/SliderCards';
import SliderOneCard from '../../sections/SliderOneCard';
import Colaboration from '../../sections/Colaboration';
import Unlock from '../../sections/Unlock';
import Prefooter from '../../sections/Prefooter';
import loadingImage from '../../images/gif.png'; 

function Home() {
  const [pageData, setPageData] = useState(null); 
  const [loading, setLoading] = useState(true);

  const fetchImage = async (imageId) => {
    try {
      const response = await fetch(`http://brainwave.local/wp-json/wp/v2/media/${imageId}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data.source_url;
    } catch (error) {
      console.error('Error loading image:', error);
      return null;
    }
  };

  const fetchPageData = useCallback(async () => {
    try {
      const response = await fetch('http://brainwave.local/wp-json/wp/v2/pages/176?acf_format=standard');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();

      if (data.acf && data.acf.home) {
        const imagesPromises = data.acf.home.map(async (item) => {
          if (item.image) {
            const imageUrl = await fetchImage(item.image);
            return { ...item, imageUrl };
          }
          return item;
        });

        // Wait for all promises to resolve
        const homeData = await Promise.all(imagesPromises);

        setPageData({ ...data, acf: { ...data.acf, home: homeData } });
      } else {
        setPageData(data);
      }
    } catch (error) {
      console.error('Error fetching page data:', error);
    } finally {
      setLoading(false); 
    }
  }, []);

  useEffect(() => {
    fetchPageData();
  }, [fetchPageData]); 

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: '#0E0C15' }}>
        <img className='h-24 w-24' src={loadingImage} alt="Loading..." />
      </div> 
    );
  }

  return (
    <main>
      {pageData && <BannerSection data={pageData} />}
      {pageData && <SliderCards data={pageData} />}
      {pageData && <SliderOneCard data={pageData} />}
      {pageData && <Colaboration data={pageData} />}
      {pageData && <Unlock data={pageData} />}
      <Prefooter />
    </main>
  );
}

export default Home;
