//import logo from './logo.svg';
import './App.css';
//import restaurant from './restaurant.jpeg'
import React, { useEffect, useState } from 'react';




function App() {
  const [emotion, setEmotion] = useState("Happy");
  const [secondary, setSecondary] = useState("tired");
  useEffect(() => {
    console.log("It's " + emotion + " around here!");
  }, [emotion]);
  useEffect(() => {
    console.log("It's " + secondary + " around here!");
  }, [secondary])

  console.log(emotion)
  return <>
    <h1>Current emotion: {emotion} and {secondary}.</h1>
    <button onClick={() => setEmotion("happy")}>Make Happy</button>
    <button onClick={() => setSecondary("crabby")}>Make crabby</button>
    <button onClick={() => setEmotion("frustrated")}>Frustrate</button>
    <button onClick={() => setEmotion("enthusiastic")}>Enthuse</button>
  </>
}

export default App;
