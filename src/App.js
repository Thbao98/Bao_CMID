
import PATHS from './routes/paths';

import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from './components/Header';
import SideTab from './components/Sidetab';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import Slider from './components/Slider';
import Products from './pages/products/Products';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import PARTNER from './pages/partner/Partner';
import Branch from './pages/Branch';
import './App.css';
import HaLong from './pages/products/xi_mang/Ha_Long';
import HaTien from './pages/products/xi_mang/Ha_Tien';
import CamPha from './pages/products/xi_mang/Cam_pha';
import Fico from './pages/products/xi_mang/Fico_ytl';
import Insee from './pages/products/xi_mang/Insee_Lavilla';
import ThangLong from './pages/products/xi_mang/Thang_Long';
import LongSon from './pages/products/xi_mang/Long_Son';
import NghiSon from './pages/products/xi_mang/Nghi_Son';
import Taceco from './pages/products/xi_mang/Taceco';
import Report from './pages/PeriodicReport';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        
        <Routes>
          <Route 
            path={PATHS.HOME}
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
            path={PATHS.PRODUCTS} 
            element={<Products/>}>
              <Route
              index
              element={
                <>
                  <HaLong />
                  <HaTien />
                  <CamPha/>
                  <Fico/>
                  <Insee/>
                  <ThangLong/>
                  <LongSon/>
                  <NghiSon/>
                  <Taceco/>
                </>
              }
              />
              <Route path='xi-mang/long-son' element={<LongSon/>}/>
              <Route path='xi-mang/nghi-son' element={<NghiSon/>}/>
              <Route path='xi-mang/taceco' element={<Taceco/>}/>
              <Route path='xi-mang/thang-long' element={<ThangLong/>}/>
              <Route path='xi-mang/insee-lavilla' element={<Insee/>}/>
              <Route path='xi-mang/fico-ytl' element={<Fico/>}/>
              <Route path='xi-mang/cam-pha' element={<CamPha/>}/>
              <Route path='xi-mang/ha-long' element={<HaLong/>}/>
              <Route path="xi-mang/ha-tien" element={<HaTien />} />
          </Route>

          <Route
            path={PATHS.ABOUT}
            element={<AboutUs/>}/>
          
          <Route
            path={PATHS.CONTACT}
            element={<Contact/>}/>

          <Route 
            path = {PATHS.PARTNER}
            element = {<PARTNER/>}/>

          <Route 
            path = {PATHS.BRANCH}
            element = {<Branch/>}/>

          <Route
            path = {PATHS.REPORT}
            element = {<Report/>}/>
        </Routes>
        
        <Footer />
      </div>

      
    </BrowserRouter>
  );
}

export default App;
