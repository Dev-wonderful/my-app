import React from 'react';
import './App.css';
import Header from './Header';
import Skills from './skills';
import Project from './project';
import Footer from './footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import { Parallax, ParallaxLayer } from '@react-spring/parallax';
// import image from './assets/blurry-skill-bg.svg'
// import { url } from 'inspector';

function App() {
  React.createElement('div')
  
  return (
    <Router>
      <Routes>
        <Route path='/' 
               element={
                  <div className="App">
                    <Header />
                    <main className='main'>
                      <Skills />
                      <Project />
                    </main>
                    <Footer />
                  </div>
                }
        />
      </Routes>
    </Router>
  );
}

export default App;
