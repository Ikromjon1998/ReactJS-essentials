//import logo from './logo.svg';
import './App.css';
import restaurant from './restaurant.jpeg'
import React, { useState } from 'react';




function App() {
  const [emotion, setEmotion] = useState("Happy");
  console.log(emotion)
  return <>
    <h1>Current emotion: {emotion}.</h1>
    <button onClick={() => setEmotion("happy")}>Happy</button>
    <button onClick={() => setEmotion("frustrated")}>Frustrate</button>
    <button onClick={() => setEmotion("enthusiastic")}>Enthuse</button>
  </>
}

export default App;
