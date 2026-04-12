// import React, { useEffect, useRef } from "react";
// import pdf from '../components/pdf/Resume.pdf'
// import hero  from './Data/hero.json'
// import Typed from "typed.js";
// const Home = () => {
//   const typedRef=useRef(null)
//   useEffect(() => {
//  const  options = {
//   strings:["Welcome to my profile ","My Name is Syed Dillawar Raza ","I'm Mern Stack Developer","Android Developer (React Native)"],
//   typeSpeed:50,
//   backSpeed:50,
//   loop:true
//  }
//  const typed= new Typed(typedRef.current ,options )

//     return()=>{
//       typed.destroy()
//     }
//   },[])
//   return (
//     <div> 
//       <div className="container home">
//         <div className="container left"
//           data-aos="fade-up-right"
//       data-aos-duration="1000"
//          >
//           <p ref={typedRef}>
//           </p>
//           <a href={pdf} download="Resume.pdf" className="btn btn-outline-warning">Download Resume</a>
//         </div>
//         <div className="container right">
//           <div className="img"
//            data-aos="fade-up-left"
//       data-aos-duration="1000"
//           >
//           <img  src={`./assets/${hero.imgSrc}`} alt="hero" />
//           </div>
        
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;
 import React, { useEffect, useRef } from "react";
import pdf from '../components/pdf/Resume.pdf'
import hero from './Data/hero.json'
import Typed from "typed.js";
import Experience from "./Experience";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";

const Home = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "Welcome to my profile",
        "My Name is Syed Dillawar Raza",
        "I'm Mern Stack Developer",
        "Android Developer (React Native)"
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      
      <section id="home">
        <div className="container home">
          <div className="container left">
            <p ref={typedRef}></p>
            <a href={pdf} download="Resume.pdf" className="btn btn-outline-warning">
              Download Resume
            </a>
          </div>

          <div className="container right">
            <div className="img">
              <img src={`./assets/${hero.imgSrc}`} alt="hero" />
            </div>
          </div>
        </div>
      </section>

   
      <section id="experience"><Experience /></section>
      <section id="skills"><Skills /></section>
      <section id="projects"><Projects /></section>
      <section id="contact"><Contact /></section>
    </>
  );
};

export default Home;