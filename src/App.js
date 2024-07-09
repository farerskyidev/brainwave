import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Header from './pages/Header/Header';
import Footer from './pages/Footer/Footer';
import Features from './pages/Features/Features';
import Pricing from './pages/Pricing/Pricing';
import HowToUse from './pages/HowToUse/HowToUse';
import Roadmap from './pages/Roadmap/Roadmap';
import Home from './pages/Home/Home';
import NewAccount from './pages/NewAccount/NewAccount';
import SinglePost from './pages/SinglePost/SinglePost'; 

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://brainwave.local/wp-json/wp/v2/posts');
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className='app-wrapper'>
      <BrowserRouter>
        <div className="App">
          <Header /> 
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/features' element={<Features />} />
            <Route exact path='/pricing' element={<Pricing />} />
            <Route exact path='/how-to-use' element={<HowToUse />} />
            <Route exact path='/roadmap' element={<Roadmap />} />
            <Route exact path='/new-account' element={<NewAccount />} />
            <Route path="/post/:postId" element={<SinglePost />} /> 
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
