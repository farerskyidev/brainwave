import React, { useEffect, useState } from 'react';
import axios from 'axios';

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
        <div className="grid-x grid-padding-x relative w-1440 gap-y-24 pt-20">
          {posts.map(post => (
            <div key={post.id} className="cell large-4 medium-4 small-12">
              {post.featured_media_url && (
                <img src={post.featured_media_url} alt="Feature" />
              )}
              <figure className='mt-8'>
                <h5>{post.title.rendered}</h5>
                {/* Виправлення помилки: використовуйте post.acf.data, якщо це поле є в ACF */}
                <p>{post.acf.data}</p>
                <div className='text-purpleColor mt-4 feature-text' dangerouslySetInnerHTML={{ __html: post.content.rendered }}></div>
              </figure>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default RoadmapSection;
