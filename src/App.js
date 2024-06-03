import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer'
import Home from "./Components/Home"
import About from "./Components/About"
import Service from "./Components/Service"
import Contact from "./Components/Contact"
import Support from "./Components/Support"
import {Route,Routes } from 'react-router-dom'


const App = () => {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/service" element={<Service/>}/>
        <Route path="/support" element={<Support/>}/>
      </Routes>
      <Footer/>
    </div>
    
  );
}


export default App;
