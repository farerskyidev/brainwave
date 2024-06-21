import React, { useEffect, useState } from 'react';
import axios from 'axios';
import bracket_1 from "../images/bracket_1.png";
import bracket_2 from "../images/bracket_2.png"; 

const Testimonials = () => {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://brainwave.local/wp-json/wp/v2/posts');
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
        setLoading(false); // Ensure loading is set to false in case of error too
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

    fetchPosts();
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
    <section className='bg-color pt-28 relative overflow-hidden pb-40'>
      <div className="mx-auto mb-16 text-center">

        <span className='text-purpleColor relative px-4 text-xs roadmap-span z-10'> 
          <img className="absolute top-0 left-0" src={bracket_2} alt="bracket_2" /> 
          ready to get started
          <img className="absolute top-0 right-0" src={bracket_1} alt="bracket_1" /> 
        </span>
        <h2 className='text-5xl leading-[3.75rem] mb-6'>What the community is saying</h2>
      </div> 
      
      {loading ? (
        <p>Завантаження...</p>
      ) : (
        <div className="grid-x grid-padding-x items-center py-5 relative w-1440 gap-y-8">
          {posts.map(post => (
            <div key={post.id} className="cell large-4 medium-6 small-12">
              <article className="testimonials rounded-2xl">
                <div className="p-10">
                  <p className='text-lg codepro-reg text-purpleColor2' dangerouslySetInnerHTML={{ __html: post.content.rendered }}></p>
                </div>
                <div className="flex justify-between px-10 py-6 testimonials_bottom">
                  <div>
                    <p className='text-lg'>{post.title.rendered}</p>
                    {post.categories.length > 0 ? (
                      post.categories.map(categoryId => (
                        <p key={categoryId} className='text-sm text-purpleColor'>{getCategoryNames([categoryId])}</p>
                      ))
                    ) : (
                      <span className='text-sm text-purpleColor'>Без категорій</span>
                    )} 
                  </div>
                  <div>
                  {post.featured_media_url && (
                    <img src={post.featured_media_url} alt="Feature" />
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
