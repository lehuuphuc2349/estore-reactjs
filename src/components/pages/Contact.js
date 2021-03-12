import React from "react";
import BreadCrumb from "../../function/BreadCrumb";
import "./Contact.css";
function Contact() {
  return (
    <>
      <BreadCrumb />
      <div className="contact">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4">
              <div className="contact-info">
                <h2>Our Office</h2>
                <h3>
                  <i className="fa fa-map-marker"></i>K43/3, Le Huu Trac, Son
                  Tra, Da Nang
                </h3>
                <h3>
                  <i className="fa fa-envelope"></i>lephuc2349@gmail.com
                </h3>
                <h3>
                  <i className="fa fa-phone"></i>0905-982-524
                </h3>
                <div className="social">
                  <a href="">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href="">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="">
                    <i className="fab fa-youtube"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="contact-info">
                <h2>Our Store</h2>
                <h3>
                  <i className="fa fa-map-marker"></i>K43/3, Le Huu Trac, Son
                  Tra, Da Nang
                </h3>
                <h3>
                  <i className="fa fa-envelope"></i>lephuc2349@gmail.com
                </h3>
                <h3>
                  <i className="fa fa-phone"></i>0905-982-524
                </h3>
                <div className="social">
                  <a href="">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href="">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="">
                    <i className="fab fa-youtube"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="contact-form">
                <form>
                  <div class="row">
                    <div class="col-md-6">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Your Name"
                      />
                    </div>
                    <div class="col-md-6">
                      <input
                        type="email"
                        class="form-control"
                        placeholder="Your Email"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Subject"
                    />
                  </div>
                  <div class="form-group">
                    <textarea
                      class="form-control"
                      rows="5"
                      placeholder="Message"
                    ></textarea>
                  </div>
                  <div>
                    <button class="btn" type="submit">
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="contact-map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3834.1578942556525!2d108.2341075141698!3d16.057294244024412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314219d5e084bb93%3A0x4d233d044e62af7c!2zMyBMw6ogSOG7r3UgVHLDoWMsIEFuIEjhuqNpIMSQw7RuZywgU8ahbiBUcsOgLCDEkMOgIE7hurVuZyA1NTAwMDAsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1615537319489!5m2!1svi!2s"></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
