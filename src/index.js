// import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


// Обычное создание

// const myNameIs = React.createElement('p', { children: 'меня зовут' });
// const name = React.createElement('p', {children:'Evgeniy'})
// const element = React.createElement('h1', { x: 10, children: ['Hello World!',myNameIs, name]});
// console.log(element)

// ReactDOM.render(element, document.querySelector('#root'))


// С помощью JSX элемента
const name = <span>Evgeniy</span>
const myNameIs = <span>меня зовут</span>


//jsx выражение
const jsxElement = <h2>Привет МИР!
  { myNameIs}  
  { name}  
</h2>;
//jsx выражение

console.log(jsxElement)
ReactDOM.render(jsxElement, document.querySelector('#root'))