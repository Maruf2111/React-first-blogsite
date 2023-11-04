import React from "react"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./Home"
import Service from "./Service"
import About from "./About"
import Contact from "./Contact"
import Navbar from './component/Navbar'
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js"
import Footer from "./component/Footer"

function App() {
  return (
    <>
       <BrowserRouter>
          <Navbar />
           <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/service" element={<Service />}/>
              <Route path="/about" element={<About />}/>
              <Route path="/contact" element={<Contact />}/>
           </Routes>
          <Footer />
       </BrowserRouter>
    </>
  );
}

export default App;
