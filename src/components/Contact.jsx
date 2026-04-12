import React from "react";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { FaGithub } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <div className="container contact">
        <h1>CONTACT ME</h1>
        <div className="contact-icon"
         data-aos="zoom-in"
      data-aos-duration="1000"
        >
          <a href="https://www.linkedin.com/in/syed-dillawar-raza-bukhari-732363265/" className="item">
            <FaLinkedin className="icons" />
          </a>
          <a href="" className="item">
            <FaGithub  className="icons"/>
          </a>
          <a href="mailto:syeddilawarrazabukhari@gmail.com" className="item">
            <CgMail  className="icons"/>
          </a>
          {/* <a href="" className="item">
            <FaWhatsapp  className="icons"/>
          </a> */}
          <a href="" className="item">
            <FaInstagramSquare  className="icons"/>
          </a>
          <a href="https://www.facebook.com/dillki.wafa" className="item">
            <FaFacebook  className="icons"/>
          </a>
          <a href="" className="item">
            <FaTiktok  className="icons"/>
          </a>
          <a href="" className="item">
            <FaYoutube className="icons" />
          </a>
        </div>
      </div>
    </>
  );
};
export default Contact;
