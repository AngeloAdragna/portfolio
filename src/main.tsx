import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../../portfolio/src/App';

console.log('main.tsx is running');
console.log(document.getElementById('root'));
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);