// PostDetail.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const SinglePostMain = () => {
const { postId } = useParams();
const [post, setPost] = useState(null);
const [loading, setLoading] = useState(true);

useEffect(() => {
const fetchPost = async () => {
    try {
    const response = await axios.get(`http://brainwave.local/wp-json/wp/v2/posts/${postId}`);
    setPost(response.data);
    setLoading(false);
    } catch (error) {
    console.error('Error fetching post:', error);
    setLoading(false);
    }
};

fetchPost();
}, [postId]);

if (loading) {
return;
}

if (!post) {
return <p>No post found.</p>;
}

return (
    <div className='p-28 relative' data-aos="fade-up">
        <div className="grid-x grid-padding-x size-full items-center py-5 relative">
            <div className="cell large-12">
                <h1 className='mb-8'>{post.title.rendered}</h1>
                <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
            </div>
        </div>
    </div>
);
};

export default SinglePostMain;
