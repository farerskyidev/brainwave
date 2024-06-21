import React, { useEffect, useState } from 'react';
import axios from 'axios';
import bracket_1 from "../images/bracket_1.png";
import bracket_2 from "../images/bracket_2.png"; 



const RoadmapSection = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://brainwave.local/wp-json/wp/v2/roadmap');
        const postsData = await Promise.all(response.data.map(async post => {
          // Fetch featured media URL if featured_media is not 0
          if (post.featured_media !== 0) {
            const mediaResponse = await axios.get(`http://brainwave.local/wp-json/wp/v2/media/${post.featured_media}`);
            post.featured_media_url = mediaResponse.data.source_url;
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

  return (
    <section className='bg-color relative overflow-hidden pb-20 pt-20'>
      {loading ? (
        <p>Завантаження...</p>
      ) : (
        <div className="grid-x grid-padding-x relative w-1440 pt-20">
          {posts.map(post => (
            <div key={post.id} className="cell large-12 medium-12 small-12">
              <div className="grid-x grid-padding-x">
                <div className="cell large-4 small-12 pt-10 pb-10">
                  <div className='text-center mt-10 relative'> 
                    <span className='text-purpleColor relative px-4 text-xs roadmap-span z-10'> 
                      <img className="absolute top-0 left-0" src={bracket_2} alt="bracket_2" /> 
                      {post.acf.data}
                      <img className="absolute top-0 right-0" src={bracket_1} alt="bracket_1" /> 
                    </span>
                    <div className='roadmap-span-wrapp'></div>
                  </div>
                </div>
                <div className="cell large-8 small-12 pt-10 pb-10 border-b border-l border-customBorder">
                  <figure className='mt-8 flex items-start gap-x-4'>
                    <div>
                      {post.featured_media_url && (
                        <img src={post.featured_media_url} alt="Feature" />
                      )}
                    </div>
                    <div className='w-fit'>
                      <h5>{post.title.rendered}</h5>
                      <div className='text-purpleColor mt-6 feature-text' dangerouslySetInnerHTML={{ __html: post.content.rendered }}></div>
                    </div>
                  </figure>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default RoadmapSection;
