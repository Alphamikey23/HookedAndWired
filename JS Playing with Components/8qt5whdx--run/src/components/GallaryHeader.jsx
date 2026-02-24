import React from "react";

function GallaryHeader() {
  return (
    <header>
      {/* 
        TODO: Implement the Header UI here 
        1. Add the logo image (src: https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/Kalvium-Logo.png)
        2. Add the nav links (Home, About, More)
      */}
       <img className="logo" src="https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/Kalvium-Logo.png" alt="Kalvium Logo"></img>
        <nav>
          <ul className='nav_links'>
            <li><a href='#'>Home</a></li>
            <li><a href='#'>About</a></li>
            <li><a href='#'>More</a></li>
          </ul>
        </nav>
        <a className='cta' href='#'><button>Contact</button></a>
      
    </header>
  );
}

export default GallaryHeader;