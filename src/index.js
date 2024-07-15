import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './routes/Home';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Explorar from './routes/Explorar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/explorar' element={<Explorar/>} />
          <Route path='/' element={<Home />} />
        </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
