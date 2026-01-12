import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from './components/Header';
import SideTab from './components/Sidetab';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import Slider from './components/Slider';
import Products from './pages/Products';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import './App.css';
//import './pages/Products'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        
        <Routes>
          <Route 
            path='/'
            element={
              <>
                <div className="carousel-container">
                <Carousel />
                </div>
                
                <div className="side-tab">
                <SideTab />
                </div>

                <div className="Slider">
                <Slider />
                </div>
              </>
            }>
          </Route>

          <Route 
            path='/he-thong-kinh-doanh' 
            element={<Products/>}/>

          <Route
            path='/gioi-thieu'
            element={<AboutUs/>}/>
          
          <Route
            path='/lien-he'
            element={<Contact/>}/>
        </Routes>
        
        <Footer />
      </div>

      
    </BrowserRouter>
  );
}

export default App;
