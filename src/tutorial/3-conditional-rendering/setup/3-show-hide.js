import React, { useState, useEffect } from 'react';

const ShowHide = () => {
  const [show,setShow]= useState(false);
  return ( 
    <>
    <button className="btn" onClick={()=> setShow(!show)}>
      show/hide
    </button>
    {show && <Items />}
    </>
  );
};

const Items = () => {
  const [size,setSize] = useState(window.innerWidth);

  const checkedSize = () => {
    setSize(window.innerWidth)
  }


  useEffect(() => {
    window.addEventListener('resize',checkedSize)
    return () => {
      window.removeEventListener('resize',checkedSize)
    }
  }, [])

  return (
      <>
        <div>
          <h1>Window</h1>
          <h1>Size:{size}</h1>
        </div>
      </>
  );
};

export default ShowHide;
