// import React from "react";
// import { Link } from "react-router-dom";
// const Navbar = () => {
//   return (
//     <>
//       <div className="container nav_bar" 
//       data-aos="fade-down"
//       data-aos-duration="1000"
//       >
//         <div className="left nav_item">Portfolio</div>
//         <div className="right">
 
//          <Link to="/" className="nav_item">Home</Link>
//          <Link to="/Skills" className="nav_item">Skills</Link>
//          <Link to="/Projects" className="nav_item">Project</Link>
//          <Link to="/contact" className="nav_item">Contact</Link>

           
//         </div>
//       </div>
//     </>
//   );
// };

// export default Navbar;
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  return (
    <div className="container nav_bar">
      <div className="left nav_item">Portfolio</div>

      <div className="right">
        {location.pathname === "/" ? (
          <>
            <a href="#home" className="nav_item">Home</a>
            <a href="#skills" className="nav_item">Skills</a>
            <a href="#projects" className="nav_item">Project</a>
            <a href="#contact" className="nav_item">Contact</a>
          </>
        ) : (
          <>
            <Link to="/" className="nav_item">Home</Link>
            <Link to="/Skills" className="nav_item">Skills</Link>
            <Link to="/Projects" className="nav_item">Project</Link>
            <Link to="/Contact" className="nav_item">Contact</Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;