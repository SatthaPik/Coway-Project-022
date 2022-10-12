import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Conponents
import Navbar from './components/Navbar';
import Home from './components/Home';
import CardProduc1 from './components/Produc-One';
import CardProduc2 from './components/Produc-Two';
import Footer from './components/Footer';
import Contact from './components/Contact';
import About from './components/About';
import P6320R from './pages/P6320R';
import CHP18AR from './pages/CHP18AR';
import CHP264L from './pages/CHP264L';
import CHP671R from './pages/CHP671R';
import CHP6200N from './pages/CHP6200N';
import CHP7310R from './pages/CHP7310R';
import P300R from './pages/P300R';
import AP1018F from './pages/AP1018f';
import AP1516D from './pages/AP1516D';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Produc-One' element={<CardProduc1 />} />
          <Route path='/Produc-Two' element={<CardProduc2 />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
          <Route path='/P6320R' element={<P6320R />} />
          <Route path='/CHP18AR' element={<CHP18AR />} />
          <Route path='/CHP264L' element={<CHP264L />} />
          <Route path='/CHP671R' element={<CHP671R />} />
          <Route path='/CHP6200N' element={<CHP6200N />} />
          <Route path='/CHP7310R' element={<CHP7310R />} />
          <Route path='/P300R' element={<P300R />} />
          <Route path='/AP1018F' element={<AP1018F />} />
          <Route path='/AP1516D' element={<AP1516D />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
