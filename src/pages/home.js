import React from 'react';
import Profile from "../components/profile.js";


function Home({ home }) {
  return (
    <div className={home ? "home active" : "home"}>
      <div className='hontainer home'>
        <Profile />
        <p>
          <a href="/about" className="a-btn">About</a>
          <a href="/contact" className="a-btn">Contact</a>
        </p>
      </div>
    </div>
  );
}

export default Home;
