import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [width,setWidth] = useState(window.innerWidth);
  
  const checkedSize = () => {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    console.log("Hello World")
    window.addEventListener('resize',checkedSize);
    return () => {
      console.log('Cleanup');
      window.removeEventListener('resize',checkedSize);
    }
  }, []);
  console.log('render');
  return (
      <>
      <h1>Screen</h1>
      <h2>{width} PX</h2>
      </>
  );

};

export default UseEffectCleanup;
