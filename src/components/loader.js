import React, { useState, useEffect } from 'react';
import "../App.css"

const LoaderComponent = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  // Yüzdeyi simüle etmek için bir state ekleyin

  return (
    <div className="zuzia-heart" show={loading} >
        <div className="heart ">
    <div><div></div></div>
    </div></div>
  );
};

export default LoaderComponent;
