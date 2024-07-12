import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PricingSection = () => {
  const [pageData, setPageData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPageData = async () => { 
      try {
        const response = await axios.get('http://brainwave.local/wp-json/wp/v2/pages/57');
        setPageData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Помилка при отриманні даних сторінки:', error);
        setLoading(false);
      }
    };

    fetchPageData();
  }, []);

  if (loading) {
    return <p>Завантаження...</p>;
  }

  if (!pageData) {
    return <p>Помилка завантаження даних.</p>;
  }

  const { acf } = pageData;
  const { pricing_title_banner, pricing_text_banner, pricing_image_banner } = acf;

  return (
    <section className='bg-color pt-14 m:pt-20 x:pt-28 relative'>    
      <div className="text-center banner-wrapp">
        <div className="max-w-4xl mx-auto">
          <h1 className='text-6xl leading-[4.5rem]'>{pricing_title_banner}</h1>
          <p className='text-xl leading-8 pb-7 max-w-3xl mx-auto text-whiteColor-50'>{pricing_text_banner}</p>  
        </div>
      </div>
    </section>
  );
}

export default PricingSection;
