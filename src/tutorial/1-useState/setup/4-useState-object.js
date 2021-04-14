import React, { useState } from 'react';

const UseStateObject = () => {

  const [person,setPerson] = useState({
    name:'Aniket',
    Age: 24,
    comment:'Some Message'
  });

  // const [name,setName] = useState('Aniket');
  // const [Age,setAge] = useState(24);
  // const [comment,setComment] = useState('Some Message');

  const changeMessage = () => {
    setPerson({...person, comment:'Hello Some Person'});
    // setComment("Hello Person");
  };
  return (
    <>
    <h3>{name}</h3>
    <h3>{Age}</h3>
    <h3>{comment}</h3>
    <button className='btn' onClick={changeMessage}>Change Message</button>
    </>
  );
};

export default UseStateObject;
