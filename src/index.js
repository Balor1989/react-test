import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Counter from './Counter/Counter';
import Dropdown from './Counter/Dropdown/Dropdown';
// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Dropdown />
    {/* <Counter initialValue = {10} /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

