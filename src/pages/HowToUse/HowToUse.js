import React, { useEffect, useState } from 'react';
import Contacts from '../../sections/Contacts';

function HowToUse() {
  const [pageData, setPageData] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchPageData = async () => {
      try {
        const response = await fetch('http://brainwave.local/wp-json/wp/v2/pages/88?acf_format=standard');
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
    return <p>Error loading data.</p>;
  }

  return (
    <main>
      <Contacts data={pageData} />
    </main>
  );
}

export default HowToUse;
