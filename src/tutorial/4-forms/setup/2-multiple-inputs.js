import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange
// dynamic object keys

const ControlledInputs = () => {
  const [person,setPerson]= useState({firstName:'',email:'',Age:''});
  const [people, setPeople] = useState([]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;     
    setPerson({ ...person,[name]: value})
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if(person.firstName && person.email && person.Age) {
      const newPerson = {...person, id: new Date().getTime().toString()}
      setPeople([...people, newPerson]);
      setPerson({ firstName: '', email: '', Age: '' });
    }
  }
  
  return (
    <>
      <article>
        <form className='form'>
          <div className='form-control'>
            <label htmlFor='firstName'>Name : </label>
            <input
              type='text'
              id='firstName'
              name='firstName'
              value={person.firstName}
              onChange={handleChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='email'>Email : </label>
            <input
              type='email'
              id='email'
              name='email'
              value={person.email}
              onChange={handleChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='Age'>Age : </label>
            <input
              type='text'
              id='Age'
              name='Age'
              value={person.Age}
              onChange={handleChange}
            />
          </div>
          <button type='submit' onClick={handleSubmit}>add person</button>
        </form>
        {people.map((person, index) => {
          const { id, firstName, email,Age } = person;
          return (
            <div className='item' key={id}>
              <h4>{firstName}</h4>
              <p>{email}</p>
              <p>{Age}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default ControlledInputs;
