import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <section className="section footer bg-dark text-white">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h6>Company information</h6>
            <hr />
            <p className="text-white mb-1">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div className="col-md-4">
            <h6>Contact </h6>
            <hr />
            <div>
              <p className="text-white mb-1">KK3Rd3 Kigali, Rwanda</p>
            </div>
            <div>
              <p className="text-white mb-1">+250787499115/25282101</p>
            </div>
            <div>
              <p className="text-white mb-1">info@locator.rw</p>
            </div>
          </div>
          <div className="col-md-4">
            <h6>NewsLetter</h6>
            <hr />
            <form class="row g-3">
              <div class="col-auto">
                <label for="inputPassword2" class="visually-hidden">
                  Password
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="inputPassword2"
                  placeholder="enter email"
                />
              </div>
              <div class="col-auto">
                <button type="submit" class="btn btn-danger mb-3">
                  Subscribe
                </button>
              </div>
            </form>
            <h6>Social media</h6>
            <a href="https://www.youtube.com/c/jamesqquick"
        className="youtube social">
        <FontAwesomeIcon icon={faYoutube} size="2x" />
      </a>
      <a href="https://www.facebook.com/learnbuildteach/"
        className="facebook social">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <a href="https://www.twitter.com/jamesqquick" className="twitter social">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      <a href="https://www.instagram.com/learnbuildteach"
        className="instagram social">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
