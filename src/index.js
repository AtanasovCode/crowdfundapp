import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Crowdfund from './components/Crowdfund';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Crowdfund />
  </React.StrictMode>
);
