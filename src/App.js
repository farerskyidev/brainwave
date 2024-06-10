import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Features from './components/Features/Features';
import Pricing from './components/Pricing/Pricing';
import HowToUse from './components/HowToUse/HowToUse';
import Roadmap from './components/Roadmap/Roadmap';
import Home from './components/Home/Home';
import NewAccount from './components/NewAccount/NewAccount'; 

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
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;