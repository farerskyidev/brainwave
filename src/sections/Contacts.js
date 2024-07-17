import React from 'react';

const Contacts = ({data}) => {

  if (!data) {
    console.error('Data not provided');
    return <p>Error loading data.</p>;
  }

  const { acf } = data;
  const { title_contacts, text_contacts, repeater_contacts, image_contacts } = acf;

  const imageUrl = typeof image_contacts === 'string' ? image_contacts : null;

  return (
    <section className='bg-color relative overflow-hidden pb-28 pt-28 justify-between'>
      <div className="grid-x grid-padding-x justify-center py-5 relative w-1440 items-center">
        <div className="cell large-6 medium-6 small-12">
          {imageUrl ? (
            <img className='rounded-xl' src={imageUrl} alt="Banner Image" />
          ) : (
            <p>Image not available</p>
          )}
        </div>
        <div className="cell large-6 medium-6 small-12 max-w-2xl">
          <div className="mx-auto mb-8">
            <h2 className='text-5xl leading-[3.75rem] mb-6'>{title_contacts}</h2>
            <p className='text-x text-purpleColor mb-4'>{text_contacts}</p>
          </div> 
          <article> 
            {repeater_contacts.map((item, index) => (
              <section key={index} className='flex align-middle gap-x-2 py-8 border-b border-whiteColor-15'>
                <div>
                  <img src={item.image.url} alt="icon" />
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
