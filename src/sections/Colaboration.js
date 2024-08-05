import React from 'react';
import plus from "../images/plus.svg";

const Colaboration = ({data}) => {
  if (!data) {
    return <p>Error loading data.</p>;
  }

  const { acf } = data;
  const { сolaboration_image, colaboration_text, colaboration_title, colaboration } = acf;

  const imageUrl = typeof сolaboration_image === 'string' ? сolaboration_image : null;
  return (
    <section className='pb-20 xl:pb-136 2xl:pb-40 relative overflow-hidden py-1.5 px-4' data-aos="fade-up">
      <div className="grid-x grid-padding-x items-center py-5 relative w-1440 border-customBorder">
        <div className="cell large-6">
          <div className="max-w-2xl mx-auto mb-20 max-w-sm">
            <h2 className='text-5xl leading-[3.75rem] mb-6'>{colaboration_title}</h2>
            <ul className='colaboration_list'>
              {colaboration.map((item, index) => (
                <li key={index}>
                  <p className='pl-12 text-x mb-4 relative'>{item.title}</p>
                  <p className='text-x text-purpleColor2 mb-8'>{item.text}</p>
                </li>
              ))}
            </ul>
            <div className="rounded-xl w-fit">
              <div className="border-gradient-cut rounded-xl w-fit">
                <div className="border-gradient-content-cut">
                  <button className="text-white px-7 py-4 font-bold rounded-xl relative z-10 bg-color border-2 border-white hover:opacity-[.80]">
                    <a href="/">try it now</a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cell large-6 max-w-md m-auto">
          <p className='text-x text-purpleColor2 mb-8'>{colaboration_text}</p>
          {imageUrl ? (
            <img className='rounded-xl' src={imageUrl} alt="Banner Image" />
          ) : (
            <p>Image not available</p>
          )}
        </div>
      </div>
      <div className='bgHorLine h-px absolute top-5 left-0 w-full'>
        <img className="absolute left-2.5 bt--5 z-10" src={plus} alt="plus" />
        <img className="absolute right-2.5 bt--5 z-10" src={plus} alt="plus" />
      </div>
    </section>
  );
}

export default Colaboration;
