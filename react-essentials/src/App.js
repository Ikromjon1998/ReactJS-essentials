//import logo from './logo.svg';
import './App.css';
//import restaurant from './restaurant.jpeg'
import React, { useEffect, useReducer, useState } from 'react';

// https://api.github.com/users/Ikromjon1998


function App({login}) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if(!login) return;
    setLoading(true);
    fetch("https://api.github.com/users/" + login)
    .then(response => response.json())
    .then(setData)
    .then(() => setLoading(false))
    .catch(setError);
  }, [login]);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;
  if(!data) return null;
  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.location}</p>
      <img alt={data.login} src={data.avatar_url} />
    </div>
  );
  
}

export default App;


// function App() {
//   const [checked, setChecked] = useState(false);

//   function toggle(){
//     setChecked((checked) =>  !checked);
//   }

//   return <>
//     <input 
//       type="checkbox" 
//       value={checked} 
//       onChange={toggle} />
//     <h1>This is {checked ? "checked" : "not checked"}.</h1>
//   </>
// }
