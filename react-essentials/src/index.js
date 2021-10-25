import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import { buildQueries } from '@testing-library/dom';
// import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <App authorized={true} />,
  document.getElementById('root')
);

// ReactDOM.render(
//   React.createElement("h1", {style: {color: "blue"}}, "Hello everyone!"),
//   document.getElementById('root')
// );
