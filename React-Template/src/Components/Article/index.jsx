import React from 'react'
import "./style.css";

function Article() {
  return (
    <div className='bullets'>
      <h3 className='top-section'>Frequently asked questions</h3>
      <hr/>
      <div className="content-container">
      <div className="sub-heading">
      <h2>Has Between launched yet?</h2>
      <hr/>
      </div>
      <div className="mid-section">
        <h2>Will I still own my business if I use <em>Between?</em></h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut iure vitae ut sint quae laboriosam libero et voluptatibus quas necessitatibus.
        </p>
      </div>
      <hr/>
      <div className="sub-heading">
        <h3>What states does Between operate in?</h3>
        <hr/>
      </div>
      </div>
      </div>
   
    
  )
}

export default Article
