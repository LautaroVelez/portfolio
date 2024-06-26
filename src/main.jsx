import React from 'react';
import ReactDOM from "react-dom/client";
import App from './App.jsx';
import './index.css';
import 'tailwindcss/tailwind.css';
import {HashRouter} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter basename="/portfolio">
      <App />
    </HashRouter>
  </React.StrictMode>,
);
