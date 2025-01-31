import React from "react";
import "./style.css";

function Content() {
  return (
    <div className="content-container">
      <div className="section-1">
        <div className="text">
          <h2><em>Matching with birthworkers</em></h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.
          </p>
        </div>
        <div className="box">
          <img src="https://images.pexels.com/photos/30425649/pexels-photo-30425649/free-photo-of-black-butterfly-on-pink-flower-in-green-foliage.jpeg" alt="Butterfly on flower" />
        </div>
      </div>
      
      <div className="section-2">
        <div className="box">
        <img src="https://images.pexels.com/photos/30425649/pexels-photo-30425649/free-photo-of-black-butterfly-on-pink-flower-in-green-foliage.jpeg" alt="Butterfly on flower" />
        </div>
        <div className="text">
          <h2><em>Easy contracting and payments</em></h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Content;
