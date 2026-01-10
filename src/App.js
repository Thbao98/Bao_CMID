import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from './components/Header';
import SideTab from './components/Sidetab';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import Slider from './components/Slider';
import Products from './pages/Products';
import AboutUs from './pages/AboutUs';
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
            path='/san-pham' 
            element={<Products/>}/>

          <Route
            path='/gioi-thieu'
            element={<AboutUs/>}/>
        </Routes>
        
        <Footer />
      </div>

      
    </BrowserRouter>
  );
}

export default App;
