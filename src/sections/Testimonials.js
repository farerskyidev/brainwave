import React, { useEffect, useState } from 'react';
import axios from 'axios';
import bracket_1 from "../images/bracket_1.png";
import bracket_2 from "../images/bracket_2.png"; 
import noImg from "../images/no-img.jpg";


const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await axios.get('http://brainwave.local/wp-json/wp/v2/testimonials');
        const testimonialsData = await Promise.all(response.data.map(async testimonial => {
          if (testimonial.featured_media !== 0) {
            try {
              const mediaResponse = await axios.get(testimonial._links['wp:featuredmedia'][0].href);
              testimonial.featured_media_url = mediaResponse.data.source_url;
            } catch (error) {
              console.error('Error fetching media for testimonial:', error);
              testimonial.featured_media_url = 'no-img.jpg'; // Set a default or placeholder image URL
            }
          }
          return testimonial;
        }));
        setTestimonials(testimonialsData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching testimonials:', error);
        setLoading(false);
      }
    };

    const fetchCategories = async () => {
      try {
        const response = await axios.get('http://brainwave.local/wp-json/wp/v2/categories');
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchTestimonials();
    fetchCategories(); 
  }, []);

  const getCategoryNames = (categoryIds) => {
    const names = [];
    categoryIds.forEach(categoryId => {
      const category = categories.find(cat => cat.id === categoryId);
      if (category) {
        names.push(category.name);
      } 
    });
    return names.join(', ');
  };

  return (
    <section className='pt-28 relative overflow-hidden pb-40' data-aos="fade-up">
      <div className="mx-auto mb-16 text-center">
        <span className='text-purpleColor relative px-4 text-xs roadmap-span z-10'> 
          <img className="absolute top-0 left-0" src={bracket_2} alt="bracket_2" /> 
          ready to get started
          <img className="absolute top-0 right-0" src={bracket_1} alt="bracket_1" /> 
        </span>
        <h2 className='text-5xl leading-[3.75rem] mb-6'>What the community is saying</h2>
      </div> 
      
      {loading ? (
        <p></p>
      ) : (
        <div className="grid-x grid-padding-x items-center py-5 relative w-1440 gap-y-8"> 
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="cell large-4 medium-6 small-12">
              <article className="testimonials rounded-2xl">
                <div className="p-10">
                  <p className='text-lg codepro-reg text-purpleColor2' dangerouslySetInnerHTML={{ __html: testimonial.content.rendered }}></p>
                </div>
                <div className="flex justify-between px-10 py-6 testimonials_bottom">
                  <div>
                    <p className='text-lg'>{testimonial.title.rendered}</p>
                    {testimonial.categories.length > 0 ? (
                      testimonial.categories.map(categoryId => (
                        <p key={categoryId} className='text-sm text-purpleColor'>{getCategoryNames([categoryId])}</p>
                      ))
                    ) : (
                      <span className='text-sm text-purpleColor'>No categories</span>
                    )} 
                  </div>
                  <div>
                  {testimonial.featured_media_url ? (
                      <img src={testimonial.featured_media_url} alt="Featured Media" style={{ maxWidth: '100%', height: 'auto' }} />
                    ) : (
                      <img src={noImg} alt="No Image Available" style={{ maxWidth: '60px', height: '60px' }} />
                    )}
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      )}


    </section>
  );
}

export default Testimonials;
