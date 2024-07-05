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
        console.error('Error fetching page data:', error);
        setLoading(false);
      }
    };

    fetchPageData();
  }, []);

  if (loading) {
    return <p></p>;
  }

  if (!pageData) {
    return <p></p>;
  }

  return (
    <section className='bg-color pt-14 m:pt-20 x:pt-28 relative'>    
      <div className="text-center banner-wrapp">
        <div className="max-w-4xl mx-auto">
          <h1 className='text-6xl leading-[4.5rem]'>{pageData.acf.pricing_title_banner}</h1>
          <p className='text-xl leading-8 mb-7 max-w-3xl mx-auto text-whiteColor-50'>{pageData.acf.pricing_text_banner}</p>  
          <div className="relative mt-62 m:mt-20 x:mt-28 2xl:mt-100">
            <div className="rounded-xl border-gradient border-gradient-content">

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PricingSection;
