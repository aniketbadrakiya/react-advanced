import React, { useEffect, useRef } from 'react';

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements


const UseRefBasics = () => {

  const refContain = useRef(null);

  const handleSubmit = (e) => {
  e.preventDefault();
  console.log(refContain.current.value);
  }
  console.log(refContain);
  useEffect(() => {
   console.log(refContain.current)
   refContain.current.focus();  
    
  })

  return <> <form className='form' onSubmit = {handleSubmit}>
    <div>
      <input type = 'text' ref={refContain} />
      <button type='submit'>Data</button>
    </div>
  </form>
  </>;
};

export default UseRefBasics;
