import React from "react";
import payment from "./images/payment-method.png";
import security1 from "./images/godaddy.svg";
import security2 from "./images/norton.svg";
import security3 from "./images/ssl.svg";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="cotainer-fluid">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="footer-widget">
              <h2>Get In Touch</h2>
              <div className="contact-info">
                <p>
                  <i className="fa fa-map-marker"></i>K43/3 Estore, Son Tra, Da
                  Nang
                </p>
                <p>
                  <i class="fa fa-envelope"></i>lephuc2349@gmail.com
                </p>
                <p>
                  <i class="fa fa-phone"></i>0905-982-524
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="footer-widget">
              <h2>Follow Us</h2>
              <div className="contact-info">
                <div className="social">
                  <a href="">
                    <i class="fab fa-twitter"></i>
                  </a>
                  <a href="">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                  <a href="">
                    <i class="fab fa-linkedin-in"></i>
                  </a>
                  <a href="">
                    <i class="fab fa-instagram"></i>
                  </a>
                  <a href="">
                    <i class="fab fa-youtube"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <div class="footer-widget">
              <h2>Company Info</h2>
              <ul>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Terms & Condition</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="footer-widget">
              <h2>Purchase Info</h2>
              <ul>
                <li>
                  <a href="">Pyament Policy</a>
                </li>
                <li>
                  <a href="">Shipping Policy</a>
                </li>
                <li>
                  <a href="">Return Policy</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row align-items-center payment">
          <div className="col-md-6">
            <div className="payment-method">
              <h2>We Apcept: </h2>
              <img src={payment} alt="" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="payment-security">
              <h2>Secured By: </h2>
              <img src={security1} alt="" />
              <img src={security2} alt="" />
              <img src={security3} alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* Bottom Start */}
      <div class="footer-bottom">
        <div class="container">
          <div class="row">
            <div class="col-md-6 copyright">
              <p>
                Copyright &copy;
                <a
                  target="_blank"
                  href="https://www.facebook.com/huuphuc23499/"
                >
                  StarkLee
                </a>
                . All Rights Reserved
              </p>
            </div>

            <div class="col-md-6 template-by">
              <p>
                Design By
                <a
                  target="_blank"
                  href="https://www.facebook.com/huuphuc23499/"
                >
                  {" "}
                  StarkLee
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
