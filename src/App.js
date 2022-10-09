import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'


// Conponents
import Navbar from './components/Navbar'
import Home from './components/Home'
import CardProduc1 from './components/Produc-One';
import CardProduc2 from './components/Produc-Two';
import Footer from './components/Footer'
import Contact from './components/Contact'
import About from './components/About'




function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Produc-One" element={<CardProduc1/>} />
        <Route path="/Produc-Two" element={<CardProduc2/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </BrowserRouter>
    <Footer/>
    </>
  );
}

export default App;
