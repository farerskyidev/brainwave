import React from 'react';

import Prefooter from '../../sections/Prefooter';
import RoadmapSection from '../../sections/RoadmapSection';
import RoadmapBanner from '../../sections/RoadmapBanner';

function Roadmap () {
  
  return (
    <main>
      <RoadmapBanner /> 
      <RoadmapSection />
      <Prefooter /> 
      
    </main>
  );  
}

export default Roadmap;
