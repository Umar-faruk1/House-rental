import './App.css';
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import Residencies from './pages/residencies/Residencies'
import Notfound from './pages/notFound/NotFound'
import OurValue from './pages/ourValue/OurValue';
import Payment from './pages/payment/Payment';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Details from './pages/details/Details';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='residencies' element={<Residencies/>}/>
        <Route path='ourValue' element={<OurValue/>}/>
        <Route path='payment/:id' element={<Payment/>}/>
        <Route path='details/:id' element={<Details />}/>
        <Route path='*' element={<Notfound/>}/>
      </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
