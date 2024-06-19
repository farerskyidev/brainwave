
import props from "../images/props.svg";
import grid from "../images/grid.svg";
import img_1 from "../images/01.png";


import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FeaturesSection = () => {

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://brainwave.local/wp-json/wp/v2/features');
        const postsData = await Promise.all(response.data.map(async post => {
          // Fetch featured media URL if featured_media is not 0
          if (post.featured_media !== 0) {
            const mediaResponse = await axios.get(`http://brainwave.local/wp-json/wp/v2/media/${post.featured_media}`);
            post.featured_media_url = mediaResponse.data.source_url;
          }
          return post;
        }));
        setPosts(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching posts:', error);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);
    
  return (
    <section className='bg-color relative overflow-hidden pb-20 pt-20'>
      <div className="grid-x grid-padding-x justify-center py-5 relative w-1440 items-center justify-between">
        <div className="cell large-6 medium-6 small-12 max-w-lg">
          <h1>Main features of Brainwave</h1>
          <p className='text-xl text-oldLavender mb-8'>Here are some of the core features of Brainwavethat make it stand out from other chat applications</p>
        </div>
        <div className="cell large-6 medium-6 small-12">
          <img src={props} alt="props" />
        </div>
      </div> 
      <div>  
        <img className="absolute top-1 right-1" src={grid} alt="grid" />
      </div>
      {loading ? (
        <p>Завантаження...</p>
      ) : (
        <div className="grid-x grid-padding-x relative w-1440 gap-y-24 pt-20">
          {posts.map(post => (
            <div key={post.id} className="cell large-4 medium-4 small-12">
              {post.featured_media_url && (
                <img src={post.featured_media_url} alt="Feature" />
              )} 
              <figure className='mt-8'>
                <h5>{post.title.rendered}</h5> 
                <div className='text-purpleColor mt-4 feature-text' dangerouslySetInnerHTML={{ __html: post.content.rendered }}></div>
              </figure>
            </div>
          ))}
        </div>
      )}
    </section> 
  );
}

export default FeaturesSection;
