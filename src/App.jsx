import { useEffect, useState } from "react";
import { BrowserRouter, Router, Routes, Link, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Aos from "aos";
import "aos/dist/aos.css";
function App() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <div className="container"> 
              
        <BrowserRouter>
          <Navbar /> 
          <Routes>
        
            <Route index element={<Home />} />

            <Route path="Experience" element={<Experience />} />
            <Route path="Skills" element={<Skills />} />
            <Route path="Projects" element={<Projects />} />
            <Route path="Contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
        

       </div> 

      {/* <div className="container">
        <Navbar />
        <Home />
        <Navbar />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </div> */}
    </>
  );
}

export default App;
