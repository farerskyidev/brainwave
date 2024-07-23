import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Import axios
import icon_01 from "../images/01.png";
import chevron_right from "../images/chevron-right.svg";
import hover_image from "../images/hover_image.png";
import { Link } from 'react-router-dom';
import plus from "../images/plus.svg";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const SliderCards = () => {
  const [pageData, setPageData] = useState(null);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://brainwave.local/wp-json/wp/v2/posts');
        const postsData = await Promise.all(response.data.map(async post => {
          if (post.featured_media !== 0) {
            try {
              const mediaResponse = await axios.get(post._links['wp:featuredmedia'][0].href);
              post.featured_media_url = mediaResponse.data.source_url;
            } catch (error) {
              console.error('Error fetching media for post:', error);
              post.featured_media_url = 'no-img.jpg';
            }
          }
          return post;
        }));
        setPosts(postsData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching posts:', error);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  useEffect(() => {
    const fetchPageData = async () => {
      try {
        const response = await fetch('http://brainwave.local/wp-json/wp/v2/pages/57');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();

        setPageData({ ...data, acf: { ...data.acf } });
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
    <section className='bg-color pt-28 relative overflow-hidden px-4'>
      <div className="max-w-2xl mx-auto">
        <h2 className='text-5xl text-left m:text-center leading-[3.75rem]'>{pageData.acf.slider_cards_title}</h2>
      </div>
      <div className="grid-x grid-padding-x items-center relative w-1440 slider-section py-10 m:py-20 z-20"> 
        <div className='pl-20'>
          <Swiper
            spaceBetween={50}
            slidesPerView={4}
            loop
            navigation={true}
            pagination={{ clickable: true }}
          >
            {posts.map(post => (
              <SwiperSlide key={post.id}>
                <article className='h-full flex flex-wrap slide_card hover:cursor-pointer'>
                  <div className='p-10 slide_card_wrapp w-full'>
                    <div className='z-10 flex flex-wrap h-full relative'>
                      <div>
                        <h5 className='text-2xl mb-5'>{post.title.rendered}</h5>
                        <div className='text-purpleColor' dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} ></div>  
                      </div>
                      <div className='flex items-end w-full'>
                        <div className='w-full flex items-center justify-between'>
                          <img className="" src={icon_01} alt="icon_01" />
                          <Link to={`/post/${post.id}`} className="explore-button flex items-center gap-5 text-xs">
                            Explore More <img src={chevron_right} alt="chevron_right" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='absolute hidden'>
                    <img src={hover_image} alt="hover_image"/>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <svg className='bg_slider' width="242" height="242" viewBox="0 0 242 242" fill="none" xmlns="http://www.w3.org/2000/svg">
          <mask id="mask0_707_5210" maskUnits="userSpaceOnUse" x="0" y="0" width="242" height="242">
            <path d="M242 0H0V242H242V0Z" fill="white"/>
          </mask>
          <g mask="url(#mask0_707_5210)">
            <g filter="url(#filter0_f_707_5210)">
              <path d="M241.244 121H56.2656V294.333H241.244V121Z" fill="#907CFF"/>
            </g>
          </g>
          <defs>
            <filter id="filter0_f_707_5210" x="-193.734" y="-129" width="684.979" height="673.332" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="125" result="effect1_foregroundBlur_707_5210"/>
            </filter>
          </defs>
        </svg>
        <svg className='bg_slider_2' width="242" height="242" viewBox="0 0 242 242" fill="none" xmlns="http://www.w3.org/2000/svg">
          <mask id="mask0_707_5210" maskUnits="userSpaceOnUse" x="0" y="0" width="242" height="242">
            <path d="M242 0H0V242H242V0Z" fill="white"/>
          </mask>
          <g mask="url(#mask0_707_5210)">
            <g filter="url(#filter0_f_707_5210)">
              <path d="M241.244 121H56.2656V294.333H241.244V121Z" fill="#907CFF"/>
            </g>
          </g>
          <defs>
            <filter id="filter0_f_707_5210" x="-193.734" y="-129" width="684.979" height="673.332" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="125" result="effect1_foregroundBlur_707_5210"/>
            </filter>
          </defs>
        </svg>
      </div> 

    </section>
  );
}

export default SliderCards;
