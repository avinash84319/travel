import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import Nav from './components/Head';
import Foot from './components/footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Nav />
    <App />
    <Foot />
  </div>
);

