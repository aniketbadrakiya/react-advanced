import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';
const MultipleReturns = () =>{

  const[isLoading,setLoading] = useState(true);
  const[isError,setIsError] = useState(false);
  const[users,setUsers] = useState('default user');

  useEffect(() => {
    fetch(url)
      .then((respon) => { 
         if(respon.status >=200 && respon.status<=200) {
           return respon.json()
         } 
         else{
           setLoading(false)
           setIsError(true);
            throw new Error(respon.statusText)
         }
      })
      .then((users) => {
        const{login} = users
        setUsers(login)
        setLoading(false)
      })
      .catch(error => console.log(error))
  }, [])

  if(isLoading){
    return <div>
      <h1>Loading....</h1>
    </div>;
  }
  if(isError) {
      return <div>
        <h1>Error...</h1>
      </div>
  }

  return <div>
    <h1>{users}</h1>
  </div>;
};

export default MultipleReturns;
