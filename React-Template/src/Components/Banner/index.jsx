import React from 'react';
import "./style.css";
import bannerImage from './head.jpg'
 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faLocationDot, faVideo } from '@fortawesome/free-solid-svg-icons';

function Banner() {
  return (
    <>
      <div className="banner">
        <img src={bannerImage} alt="banner"/>
        <div className="banner-content">
          <h1>From bump to baby <br/>(and everything in between)</h1>
          <p>Match with doulas for your pregnancy and postpartum journey.</p>
        </div>
      </div>
      <div className="container">
        <div className="items">
          <button>
            <FontAwesomeIcon icon={faHeart} /> What type of service?
          </button>
          <button>
            <FontAwesomeIcon icon={faLocationDot} /> Your City or ZIP code
          </button>
          <button>
            <FontAwesomeIcon icon={faVideo} /> Virtual or in person
          </button>
        </div>
        <button className="find-btn"> Find birthworkers →</button>
      </div>
    </>
  );
}

export default Banner;
