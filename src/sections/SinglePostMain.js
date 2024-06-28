import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function SinglePostMain() {
    const { postId } = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`https://brainwave.local/wp-json/wp/v2/posts/${postId}`)
            .then(response => {
                setPost(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching single post:', error);
                setLoading(false);
            });
    }, [postId]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!post) {
        return <div>No post found.</div>;
    }

    return (
        <section className='bg-color pt-28 relative overflow-hidden pb-72'>
            <div className="grid-x grid-padding-x items-center relative w-1440 gap-y-8"> 
                <div className="cell large-12">
                    <h2 className='mb-10'>{post.title.rendered}</h2>
                    <div dangerouslySetInnerHTML={{ __html: post.content.rendered }}></div>
                </div>
            </div> 
        </section>
    );
}

export default SinglePostMain;
