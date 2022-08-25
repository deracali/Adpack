import { useState } from 'react'
import styled from "styled-components";
import Colors from "./assets/Colors";
import HomePage from './assets/pages/HomePage';
import Services from './assets/pages/Services';
import About from './assets/pages/About';
import Contact from './assets/pages/Contact';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const AppEl = styled.div`
  width: 100%;
  margin:0 auto;
  max-width:1140px;
  height:1400px;
  padding:0 4rem;

   @media (max-width: 1166px) {
    padding:0 50px;
  }
   @media (max-width: 646px) {
    padding:0 0px;
  }
`;


function App() {


  return (
    <Router>
      <AppEl>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/Services" element={<Services />} />
          <Route exact path="/About" element={<About />} />
          <Route exact path="/Contact" element={<Contact />} />
        </Routes>
      </AppEl>
    </Router>

  )
}

export default App
