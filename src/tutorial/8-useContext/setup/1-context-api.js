import React, { useState, useContext } from 'react';
import { data } from '../../../data';
// more components
// fix - context api, redux (for more complex cases)

const peopleContext = React.createContext();
// two components => Provider, Consumer

const ContextAPI = () => {
  const [people, setPeople] = useState(data);
  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };
  return (
    <peopleContext.Provider value={{removePerson ,people}}>
      <h3>Context API / useContext</h3>
      <List />
    </peopleContext.Provider>
  );
};

const List = () => {
  const  mainData = useContext(peopleContext)
  console.log(mainData);
  return (
    <>
      {mainData.people.map((person) => {
        return (
          <SinglePerson
            key={person.id}
            {...person}
          />
        );
      })}
    </>
  );
};

const SinglePerson = ({ id, name }) => {
  const {removePerson}= useContext(peopleContext)

  return (
    <div className='item'>
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>remove</button>
    </div>
  );
};

export default ContextAPI;
