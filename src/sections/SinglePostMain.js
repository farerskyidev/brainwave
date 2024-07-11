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
return <p>Loading...</p>;
}

if (!post) {
return <p>No post found.</p>;
}

return (
    <div className='bg-color p-28 relative'>
        <div className="grid-x grid-padding-x size-full items-center py-5 relative">
            <div className="cell large-12">
                <h1>{post.title.rendered}</h1>
                <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
            </div>
        </div>
    </div>
);
};

export default SinglePostMain;
