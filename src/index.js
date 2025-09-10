import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app/app.tsx'; // ✅ O caminho correto para o seu componente principal
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();