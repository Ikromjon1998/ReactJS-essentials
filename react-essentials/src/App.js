//import logo from './logo.svg';
import './App.css';
//import restaurant from './restaurant.jpeg'
import React, { useEffect, useReducer, useState } from 'react';




function App() {
  const [checked, toggle] = useReducer(
    (checked) =>  !checked,false
  );

  return <>
    <input 
      type="checkbox" 
      value={checked} 
      onChange={toggle} />
    <h1>This is {checked ? "checked" : "not checked"}.</h1>
  </>
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
