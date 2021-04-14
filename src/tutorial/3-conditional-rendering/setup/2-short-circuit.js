import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text,setText] = useState('');
  const[isError,setIsError] = useState(false);
  //  const firstValue = text || 'Aniket';
  //  const secondValue = text && 'hello world';

  return <>
    {/* <h1>{firstValue}</h1>
    <h1>value:{secondValue}</h1> */}
    {/* {if(){console.log()}} */}
     <h1>{text ||'Aniket'}</h1>
     <button className='btn' onClick={() => setIsError(!isError)}>
       Toggle Error
     </button>
     {isError && <h1>something went wrong......</h1>}
     {isError ? (
     <p>there is an error..</p>
     ) : (
       <div>
     <h1>there is no error.</h1>
     </div>
     )}
  </>
};

export default ShortCircuit;
