import './App.css';
import Header from './Components/Header';
//import ReactDOM from "react-dom/client"
//import { createBrowserRouter, RouterProvider, } from "react-router-dom";
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
    </div>
    
  );
}

// const appRouter = createBrowserRouter(
//   [
//     {
//       path: "/",
//       element: <App />
//     },
//     {
//       path: "/",
//       element: <Home />
//     },
//     {
//       path: "/about",
//       element: <About />
//     },
//     {
//       path: "/contact",
//       element: <Contact />
//     },
//     {
//       path: "/service",
//       element: <Service />
//     },
//     {
//       path: "/support",
//       element: <Support />
//     }

//   ]
// )

// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(<RouterProvider router={appRouter} />)

export default App;
