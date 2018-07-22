import React from "react";
import logo from "assets/images/react-logo.svg";

const Banner = () => (
  <section className="hero is-dark">
    <div className="hero-body">
      <div className="container has-text-centered">
        {/* <img src={logo} className="spin" alt="React Logo" width="15%" />
        <h1 className="title has-text-centered">React JS Study Group</h1>
        <h2 className="subtitle has-text-centered">Women Who Code Manila</h2> */}
        <div className="media has-text-centered">
          <div className="media-left">
            <figure className="image is-64by64">
              <img className="spin" src={logo} alt="ReactJS" />
            </figure>
          </div>
          <div className="media-content">
            <p className="title is-4">ReactJS Study Group</p>
            <p className="subtitle is-6">Women Who Code Manila</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Banner;
