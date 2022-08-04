import React from "react";
import image3 from "../images/image3.jpg";
import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";

const Slider = () => {
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={image1} className="d-block w-100 opacity-75" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <div className="mb-10" id="caption">
            <h1>Find nearby Restaurant,Apartments,Hotels....</h1>
            <p>Find great places to stay, eat, shop, or visit the city.</p>
            </div>
              <div className="container">
                <div className="card mt-4">
                  <div className="card-body">
                    <form class="row g-3">
                      <div class="col-auto">
                        <label for="inputPassword2" class="visually-hidden">
                          Password
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="inputPassword2"
                          placeholder="What are you looking for?"
                        />
                      </div>
                      <div class="col-auto">
                        <label for="inputPassword2" class="visually-hidden">
                          Password
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="inputPassword2"
                          placeholder="Location"
                        />
                      </div>
                      <div class="col-auto">
                        <select
                          class="form-select"
                          aria-label="Default select example"
                        >
                          <option selected>Open this select menu</option>
                          <option value="1">Restaurant</option>
                          <option value="2">Apartments</option>
                          <option value="3">Hotels</option>
                        </select>
                      </div>
                      <div class="col-auto">
                        <button type="submit" class="btn btn-outline-danger mb-10">
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
          </div>
        </div>
        <div className="carousel-item">
          <img src={image3} className="d-block w-100 opacity-75" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <div className="mb-10" id="caption">
            <h1>Find nearby Restaurant,Apartments,Hotels....</h1>
            <p>Find great places to stay, eat, shop, or visit the city.</p>
            </div>
              <div className="container">
                <div className="card mt-4">
                  <div className="card-body">
                    <form class="row g-3">
                      <div class="col-auto">
                        <label for="inputPassword2" class="visually-hidden">
                          Password
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="inputPassword2"
                          placeholder="What are you looking for?"
                        />
                      </div>
                      <div class="col-auto">
                        <label for="inputPassword2" class="visually-hidden">
                          Password
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="inputPassword2"
                          placeholder="Location"
                        />
                      </div>
                      <div class="col-auto">
                        <select
                          class="form-select"
                          aria-label="Default select example"
                        >
                          <option selected>Open this select menu</option>
                          <option value="1">Restaurant</option>
                          <option value="2">Apartments</option>
                          <option value="3">Hotels</option>
                        </select>
                      </div>
                      <div class="col-auto">
                        <button type="submit" class="btn btn-outline-danger mb-10">
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
          </div>
        </div>
        <div className="carousel-item">
          <img src={image2} className="d-block w-100 opacity-75" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <div className="mb-10" id="caption">
            <h1>Find nearby Restaurant,Apartments,Hotels....</h1>
            <p>Find great places to stay, eat, shop, or visit the city.</p>
            </div>
              <div className="container">
                <div className="card mt-4">
                  <div className="card-body">
                    <form class="row g-3">
                      <div class="col-auto">
                        <label for="inputPassword2" class="visually-hidden">
                          Password
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="inputPassword2"
                          placeholder="What are you looking for?"
                        />
                      </div>
                      <div class="col-auto">
                        <label for="inputPassword2" class="visually-hidden">
                          Password
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="inputPassword2"
                          placeholder="Location"
                        />
                      </div>
                      <div class="col-auto">
                        <select
                          class="form-select"
                          aria-label="Default select example"
                        >
                          <option selected>Open this select menu</option>
                          <option value="1">Restaurant</option>
                          <option value="2">Apartments</option>
                          <option value="3">Hotels</option>
                        </select>
                      </div>
                      <div class="col-auto">
                        <button type="submit" class="btn btn-outline-danger mb-10">
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden"></span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden"></span>
      </button>
    </div>
  );
};

export default Slider;
