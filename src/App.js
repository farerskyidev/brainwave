import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './pages/Header/Header';
import Footer from './pages/Footer/Footer';
import Features from './pages/Features/Features';
import Pricing from './pages/Pricing/Pricing';
import HowToUse from './pages/HowToUse/HowToUse';
import Roadmap from './pages/Roadmap/Roadmap';
import Home from './pages/Home/Home';
import NewAccount from './pages/NewAccount/NewAccount'; 

export class App extends React.Component {
  render() { 
    return (
      <div className='app-wrapper'>       
        <BrowserRouter>
          <div className="App"> 
            <Header /> 
            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route exact path='/features' element={<Features/>}/>
              <Route exact path='/pricing' element={<Pricing/>}/>
              <Route exact path='/how-to-use' element={<HowToUse/>}/>  
              <Route exact path='/roadmap' element={<Roadmap/>}/>
              <Route exact path='/new-account' element={<NewAccount/>}/>
            </Routes>
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;