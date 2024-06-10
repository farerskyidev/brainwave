import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import BrowserRouter, Routes, and Route
import Header from './components/Header/Header';
import Features from './components/Features/Features'; // Import Features component
import Pricing from './components/Pricing/Pricing'; // Import Pricing component
import HowToUse from './components/HowToUse/HowToUse'; // Import HowToUse component
import Roadmap from './components/Roadmap/Roadmap'; // Import Roadmap component
import NewAccount from './components/NewAccount/NewAccount'; 

export class App extends React.Component {
  render() {
    return (
      <div className='app-wrapper w-1920'> 
        <h1 className='text-3xl text-white'>123</h1>
        
        <BrowserRouter>
          <div className="App">
            <Header />
            <Routes>
              <Route exact path='/features' element={<Features/>}/>
              <Route exact path='/pricing' element={<Pricing/>}/>
              <Route exact path='/how-to-use' element={<HowToUse/>}/>
              <Route exact path='/roadmap' element={<Roadmap/>}/>
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;