import React from 'react';

import 'swiper/css';

import BannerSection from '../../sections/BannerSection';
import SliderCards from '../../sections/SliderCards';
import SliderOneCard from '../../sections/SliderOneCard'; 
import Colaboration from '../../sections/Colaboration'; 
import Unlock from '../../sections/Unlock'; 
import Prefooter from '../../sections/Prefooter'; 


function Home() {


  return ( 
    <div>
      <BannerSection /> 
      <SliderCards /> 
      <SliderOneCard /> 
      <Colaboration /> 
      <Unlock /> 
      <Prefooter />   
    </div>
  );
}

export default Home;
