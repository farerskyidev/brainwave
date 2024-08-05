import React from 'react';
import { createRoot } from 'react-dom/client';
import 'foundation-sites/dist/css/foundation.min.css'; 
import App from './App';
import './index.css'; 
import AOS from 'aos';
import 'aos/dist/aos.css';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

AOS.init();
