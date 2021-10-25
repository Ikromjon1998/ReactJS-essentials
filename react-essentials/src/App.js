//import logo from './logo.svg';
import './App.css';
//import restaurant from './restaurant.jpeg'
import React, { useEffect, useReducer, useState } from 'react';

// https://api.github.com/users/Ikromjon1998


function App({login}) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://api.github.com/users/" + login).then(response => response.json()).then(setData);
  }, []);
  if(data) {
    return (<div>
      <h1>{data.name}</h1>
      <p>{data.location}</p>
      <img alt={data.login} src={data.avatar_url} />
    </div>);
  }
  return <div>No User Available</div>
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
