import React, { useState, useEffect, useCallback } from 'react';
import FeaturesSection from '../../sections/FeaturesSection';
import Prefooter from '../../sections/Prefooter';

function Features() {

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

  const fetchPageData = useCallback(async () => {
    try {
      const response = await fetch('http://brainwave.local/wp-json/wp/v2/pages/105?acf_format=standard');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();

      // Fetch image URLs asynchronously
      const imagesPromises = data.acf.features_repeater.map(async (item) => {
        if (item.image) {
          const imageUrl = await fetchImage(item.image);
          return { ...item, imageUrl };
        }
        return item;
      });

      // Wait for all promises to resolve
      const features_repeater_Data = await Promise.all(imagesPromises);

      setPageData({ ...data, acf: { ...data.acf, roadmap: features_repeater_Data } });
    } catch (error) {
      console.error('Error fetching page data:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      await fetchPageData();
    };

    fetchData();
  }, [fetchPageData]);

  if (loading) {
    return <div></div>;
  }

  return ( 
    <main>  
      
      {pageData && <FeaturesSection data={pageData} />}
      <Prefooter />  
    </main>
  );
}

export default Features;
