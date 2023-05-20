import React from "react";
import { AppBar, Toolbar } from "@mui/material";

const Footer = () => {
  return (
    <footer className="foot">
      <ul>
        <li>
          <a href="/">
            <div>Home</div>
          </a>
        </li>
        <li>
          <a href="/products">
            <div>Products</div>
          </a>
        </li>
        <li>
          <a href="/company">
            <div>Company</div>
          </a>
        </li>
        <li>
          <a href="/join-us">
            <div>Join us</div>
          </a>
        </li>
        <li><a href="/contact-us">
          <div>Contact Us</div>
        </a></li>
        <li><a href="/terms-of-use">
          <div>Terms of Use</div>
        </a></li>
        <li><a href="/privacy-policy">
          <div>Privacy Policy</div>
        </a></li>
      </ul>
    </footer>
  );
}

export default Footer;

