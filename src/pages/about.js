import React from 'react';
import SpotifyPlayerCard from "../components/spotify.js";
import Profile from "../components/profile.js";


function About({about}) {

    return (
      <div className={about ? "about active" : "about"}>
        <div className='hontainer about'>
        <Profile />
          <br/>
          <SpotifyPlayerCard/>
          <br/><br/>
          <p>
            <a href="/" className="a-btn">Home</a>
            <a href="/contact" className="a-btn">Contact</a>
          </p>
        </div>
      </div>
    );
}
export default About;