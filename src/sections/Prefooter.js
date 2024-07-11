import React, { useState } from 'react';
import bg_prefooter_1 from "../images/bg_prefooter_1.svg";
import bg_prefooter_2 from "../images/bg_prefooter_2.svg";
import plus from "./../images/plus.svg";
import line from "./../images/line.svg";
import ContactForm from './ContactForm';

const Prefooter = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <section className='bg-color relative overflow-hidden py-1.5'>
      <div className='pb-40 pt-40 ml-4 mr-4 relative border border-customBorder'>
        <div className="grid-x grid-padding-x justify-center py-5 relative w-1920">
          <div className='max-w-2xl text-center z-10'>
            <h1 className='mb-6'>
              Be part of the future of
              <span className='ml-4 border-span'>
                Brainwave
                <img src={line} alt="line" />
              </span>
            </h1>
            <p className='text-xl text-oldLavender mb-8'>Unleash the power of AI within Brainwave. Upgrade your productivity with Brainwave, the open AI chat app.</p>
            <div className="rounded-xl w-fit margin-a">
              <div className="border-gradient-cut-none-border rounded-xl w-fit margin-a">
                <button className="text-bgColor px-7 py-4 font-extrabold rounded-xl relative z-10 bg-whiteColor" onClick={openPopup}>
                  get started 
                </button>
              </div>
            </div>
          </div>
          <div className='gradient-pre-footer -z-1'>
            <svg width="744" height="744" viewBox="0 0 744 744" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle opacity="0.05" cx="372" cy="372" r="371.5" stroke="#CAC6DD" />
              <circle opacity="0.1" cx="371.999" cy="372" r="313.673" stroke="#CAC6DD" />
              <circle opacity="0.1" cx="372" cy="372" r="244.519" stroke="#CAC6DD" />
              <circle opacity="0.1" cx="371.999" cy="372" r="171.788" stroke="#CAC6DD" />
              <circle opacity="0.1" cx="371.999" cy="372" r="109.788" stroke="#CAC6DD" />
            </svg>
          </div>
          <svg className='gradient-pre-footer_2' width="601" height="601" viewBox="0 0 601 601" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="mask-circle" mask-type="luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="601" height="601">
              <circle cx="300.5" cy="300.5" r="300" fill="white" />
            </mask>
            <g mask="url(#mask-circle)">
              <g filter="url(#filter-circle)">
                <path d="M507.846 101.043H38.3145V474.039H507.846V101.043Z" fill="#18A0FB" />
                <path d="M574.331 20.6592H155.885V341.819H574.331V20.6592Z" fill="#F2371F" />
                <path d="M741.484 55.5928H277.963V407.553H741.484V55.5928Z" fill="#EE46D3" />
                <path d="M537.144 289.231H207.721V602.503H537.144V289.231Z" fill="#00C5DF" />
              </g>
            </g>
            <defs>
              <filter id="filter-circle" x="-149.498" y="-167.153" width="1078.79" height="957.469" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="93.9062" result="effect1_foregroundBlur_707_25675" />
              </filter>
            </defs>
          </svg>
        </div>
        <div>
          <img className="absolute top-1 left-1" src={bg_prefooter_1} alt="bg_prefooter_1" />
          <img className="absolute bottom-1 right-1" src={bg_prefooter_2} alt="bg_prefooter_2" />
        </div>
        <img className="absolute right--5 bt--5 z-10" src={plus} alt="plus" />
        <img className="absolute right--5 top--5 z-10" src={plus} alt="plus" />
        <img className="absolute left--5 top--5 z-10" src={plus} alt="plus" />
        <img className="absolute left--5 bt--5 z-10" src={plus} alt="plus" />
      </div>
      <ContactForm modalIsOpen={isPopupOpen} closeModal={closePopup} /> 
    </section>
  );
};

export default Prefooter;
