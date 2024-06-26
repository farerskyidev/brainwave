// src/components/SinglePost.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const SinglePost = () => {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const postsResponse = await axios.get('http://brainwave.local/wp-json/wp/v2/testimonials');
        setPosts(postsResponse.data);

        const categoriesResponse = await axios.get('https://brainwave.local/wp-json/wp/v2/categories');
        setCategories(categoriesResponse.data);

        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>Testimonials</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <h3>{post.title.rendered}</h3>
            <p>Categories: 
              {post.categories.map(categoryId => {
                // categoryId is an array with a single element, extract the first element
                const categoryIdValue = categoryId[0];
                const category = categories.find(cat => cat.id === parseInt(categoryIdValue));
                return (
                  <span key={categoryIdValue}>
                    {category && category.name}
                  </span>
                );
              })}
            </p>
            <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SinglePost;
