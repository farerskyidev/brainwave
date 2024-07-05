import React, { useEffect, useState } from 'react';

import props from "../images/props.svg";
import grid from "../images/grid.svg";

const FeaturesSection = () => {
  const [pageData, setPageData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPageData = async () => {
      try {
        const response = await fetch('http://brainwave.local/wp-json/wp/v2/pages/105'); 
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setPageData(data);
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
    <section className='bg-color relative overflow-hidden pb-20 pt-20'>
      <div className="grid-x grid-padding-x justify-center py-5 relative w-1440 items-center justify-between">
        <div className="cell large-6 medium-6 small-12 max-w-lg">
          <h1>{pageData.acf.features_section_title}</h1>
          <p className='text-xl text-oldLavender mb-8'>{pageData.acf.features_section_text}</p>
        </div>
        <div className="cell large-6 medium-6 small-12">
          <img src={props} alt="props" />
        </div>
      </div> 
      <div>  
        <img className="absolute top-1 right-1" src={grid} alt="grid" />
      </div>
      <div className="grid-x grid-padding-x relative w-1440 gap-y-24 pt-20">
        {pageData.acf.features_repeater.map((item, index) => (
          <div key={index} className="cell large-4 medium-4 small-12">
            <figure className='mt-8'>
              <h5>{item.title}</h5> 
              <div className='text-purpleColor mt-4 feature-text'>{item.text}</div>
            </figure>
          </div>
        ))}
      </div>
    </section> 
  );
}

export default FeaturesSection;
