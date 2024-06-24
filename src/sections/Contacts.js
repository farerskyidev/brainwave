import React, { useEffect, useState } from 'react';
import gaming from "../images/gaming.svg";
import icon from "../images/icon.svg";


const Contacts = () => {

  const [pageData, setPageData] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
  const fetchPageData = async () => {
  try {
      const response = await fetch('http://brainwave.local/wp-json/wp/v2/pages/88'); 
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
  return <p>Loading...</p>;
  }
  
  if (!pageData) {
  return <p>Error: Data could not be loaded</p>;
  }


  return (
    <section className='bg-color relative overflow-hidden pb-28 pt-28 justify-between'>
        <div className="grid-x grid-padding-x justify-center py-5 relative w-1440 items-center">
          <div className="cell large-6 medium-6 small-12">
            <img className="" src={gaming} alt="gaming" />
          </div>
          <div className="cell large-6 medium-6 small-12 max-w-2xl">
            <div className="mx-auto mb-8">
              <h2 className='text-5xl leading-[3.75rem] mb-6'>{pageData.acf.title_contacts}</h2>
              <p className='text-x text-purpleColor mb-4'>{pageData.acf.text_contacts}</p>
            </div> 
            <article> 
            {pageData.acf.repeater_contacts.map((item, index) => (
              <section key={index} className='flex align-middle gap-x-2 py-8 border-b border-whiteColor-15'>
                <div>
                  <img src={icon} alt="icon" /> 
                </div>
                <div>
                <p className='text-lg text-purpleColor'>{item.title}</p>
                <p className='text-x text-lavenderGrey'>{item.text}</p>
                </div>
              </section>
            ))}
            </article>
          </div>
      
        </div>

    </section> 
  );
}

export default Contacts;
