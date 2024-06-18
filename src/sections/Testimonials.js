import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Testimonials = () => {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [featureImages, setFeatureImages] = useState({});

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://brainwave.local/wp-json/wp/v2/posts');
        setPosts(response.data);
        setLoading(false);
        const fetchedPosts = response.data.map(post => ({
          // id: post.id,
          // title: post.title.rendered,
          // content: post.content.rendered,
          // categories: post.categories,
          featuredImage: post._embedded && post._embedded['wp:featuredmedia'] ? post._embedded['wp:featuredmedia'][0].source_url : null
        })); // Set loading to false once data is fetched
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
        <p className='text-x text-purpleColor mb-4'>Готові почати</p>
        <h2 className='text-5xl leading-[3.75rem] mb-6'>Що говорить спільнота</h2>
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
 {post.featuredImage && (
                  <img src={post.featuredImage} alt={post.title.rendered} className="w-full h-auto rounded-t-2xl" />
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
