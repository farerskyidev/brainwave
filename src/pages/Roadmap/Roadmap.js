import React, { useState, useEffect, useCallback } from 'react';
import Prefooter from '../../sections/Prefooter';
import RoadmapSection from '../../sections/RoadmapSection';
import RoadmapBanner from '../../sections/RoadmapBanner';

function Roadmap() {
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
    return <div>Loading...</div>;
  }

  return (
    <main>
      {pageData && <RoadmapBanner data={pageData} />}
      {pageData && <RoadmapSection data={pageData} />}
      <Prefooter />
    </main>
  );
}

export default Roadmap;
