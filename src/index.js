import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
 import { BrowserRouter } from 'react-router-dom';
// import { createBrowserRouter,RouterProvider, } from "react-router-dom";
// import Home from "./Components/Home"
// import About from "./Components/About"
// import Service from "./Components/Service"
// import Contact from "./Components/Contact"
// import Support from "./Components/Support"
// import Header from "./Components/Header"


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




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    {/* <RouterProvider router={appRouter}> */}
    <App />
    </BrowserRouter>
    {/* </RouterProvider> */}
  </React.StrictMode>
);





// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
