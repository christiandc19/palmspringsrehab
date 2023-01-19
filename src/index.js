import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {BrowserRouter, Routes, Route} from 'react-router-dom'

import TreatmentPage from './routes/TreatmentPage'
import MissionPage from './routes/MissionPage'
import AboutPage from './routes/AboutPage'
import InsurancePage from './routes/InsurancePage'
import ContactPage from './routes/ContactPage'
import Php from './routes/PHP';
import Iop from './routes/IOP';
import Op from './routes/OP';
import Jobs from './routes/JOBS';




ReactDOM.render(
  <BrowserRouter basename={window.location.pathname || ''} >
    <Routes>
      <Route exact path='/' element={<App />} />
      <Route exact path='/php' element={<Php />} />
      <Route exact path='/iop' element={<Iop />} />
      <Route exact path='/op' element={<Op />} />
      <Route exact path='/jobs' element={<Jobs />} />


      <Route exact path='/treatment' element={<TreatmentPage />} />
      <Route exact path='/mission' element={<MissionPage />} />
      <Route exact path='/about-us' element={<AboutPage />} />
      <Route exact path='/insurance' element={<InsurancePage />} />
      <Route exact path='/contact' element={<ContactPage />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

