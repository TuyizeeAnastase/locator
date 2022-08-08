import React from "react";
import Slider from "../inc/Slider";
import card1 from "../images/card1.png";
import card2 from "../images/card2.png";
import card3 from "../images/card3.png";

import restaurant from "../images/restaurant.png";
import culture from "../images/culture.png";
import shop from "../images/shop.png";
import hospital from "../images/hospital.png";
import hotel from "../images/hotel.png";
import beauty from "../images/beauty.png"

import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <Slider />
      <section className="section bg-light border-top">
         <div className="container">
            <div className="row">
              <div className="col-md-12 mb-4 text-center">
              <div class="d-flex justify-content-around mr-4">
                <div>
                  <img src={culture} alt="Card" />
                  <h6 style={{marginTop:"5px"}}>Culture</h6>
                </div>
                <div>
                  <img src={restaurant} alt="Card"/>
                  <h6 style={{marginTop:"5px"}}>Restaurant</h6>
                </div>
                <div>
                  <img src={shop} alt="Card"/>
                  <h6 style={{marginTop:"5px"}}>shopping</h6>
                </div>
                <div>
                  <img src={hotel} alt="Card"/>
                  <h6 style={{marginTop:"5px"}}>Hotels</h6>
                </div>
                <div>
                  <img src={hospital} alt="Card"/>
                  <h6 style={{marginTop:"5px"}}>Hospital</h6>
                </div>
                <div>
                  <img src={beauty} alt="Card"/>
                  <h6 style={{marginTop:"5px"}}>Beauty</h6>
                </div>
              </div>
              </div>
            </div>
         </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="underline max-auto"></div>
              <h3 className="main-heading">Most Popular Categories</h3>
              <p>Find great places to stay, eat, shop, or visit the city.</p>
            </div>
            <div class="d-flex justify-content-around mr-4">
              <div className="card" style={{ width: "25rem" }}>
                <img
                  className="card-img-top"
                  style={{ width: "25rem", height: "14rem" }}
                  src={card1}
                  alt="Card"
                />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <div className="underline"></div>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="/#" class="btn btn-outline-danger">
                    See More
                  </a>
                </div>
              </div>
              <div className="card" style={{ width: "25rem" }}>
                <img
                  className="card-img-top"
                  style={{ width: "25rem", height: "14rem" }}
                  src={card2}
                  alt="Card"
                />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <div className="underline"></div>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="/#" class="btn btn-outline-danger">
                    See More
                  </a>
                </div>
              </div>
              <div className="card" style={{ width: "25rem" }}>
                <img
                  className="card-img-top"
                  style={{ width: "25rem", height: "14rem" }}
                  src={card3}
                  alt="Card"
                />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <div className="underline"></div>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="/#" class="btn btn-outline-danger">
                   See More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default Home;
