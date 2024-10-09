import React from "react";
import { Button } from "../../UI/Button";
import "./footer.css";
import line from "../../assets/footer-line.svg";
import { MdFacebook } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn, FaYoutube, FaInstagram, FaPinterest   } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="col-1">
          <h1>Oxgyen</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
            maxime.
          </p>
        </div>
        <div className="col-2">
          <h2>Socialize With US</h2>
          <ul>
            <li>
              <p>Help</p>
            </li>
            <li>
              <p>Home</p>
            </li>
            <li>
              <p>Dealer</p>
            </li>
          </ul>
        </div>
        <div className="col-3">
          <h2>Socilize with US</h2>
          <div className="media-icons">
            <div className="bg-icon">
              <MdFacebook color="black" size={25} />
            </div>
            <div className="bg-icon">
              <FaXTwitter color="black" size={20} />
            </div>{" "}
            <div className="bg-icon">
              <FaLinkedinIn color="black" size={20} />
            </div>
            <div className="bg-icon">
              <FaYoutube  color="black" size={20} />
            </div>{" "}
            <div className="bg-icon">
              <FaInstagram  color="black" size={20} />
            </div>{" "}
            <div className="bg-icon">
              <FaPinterest  color="black" size={20} />
            </div>
          </div>
          <Button className="footer-btn">Cars World</Button>
        </div>
      </div>
      <img src={line} alt="" />
      <div className="copyright">
        <p>2024</p>
      </div>
    </div>
  );
}
