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
// const name = <span>Evgeniy</span>
// const myNameIs = <span>меня зовут</span>


// //jsx выражение
// const jsxElement = <h2>Привет МИР!
//   { myNameIs}  
//   { name}  
// </h2>;
// //jsx выражение

// console.log(jsxElement)
// ReactDOM.render(jsxElement, document.querySelector('#root'))


// 
const images = {
  url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  alt: 'White and Black Long Fur Cat',
  title: 'Title',
  price: 1000,
  author: {
    tag: 'Author',
    url:'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  quantity:10
  }

// const card1 = <div>
//   <img src={images.url} alt={images.alt} width="480" />
//   <h2>{images.title}</h2>
//   <p>Автор: <a href={images.author.url}>{images.author.tag}</a>
//   </p>
//   <p>Цена: {images.price} кредитов</p>
//   <p>Доступность: заканчивается или есть в наличии</p>
//   <button type="button">Добавить в корзину</button>
// </div>;

// const card2 = <div>
//   <img src={images.url} alt={images.alt} width="480" />
//   <h2>{images.title}</h2>
//   <p>Автор: <a href={images.author.url}>{images.author.tag}</a>
//   </p>
//   <p>Цена: {images.price} кредитов</p>
//   <p>Доступность: заканчивается или есть в наличии</p>
//   <button type="button">Добавить в корзину</button>
// </div>;

// const card = <div>
//   {card1}
//   {card2}
// </div>

// ReactDOM.render(card, document.querySelector('#root'))

function Component(props) {
  console.log(props)
  return ( <div>
  <img src={props.url} alt={props.title} width="480" />
    <h2>{props.title}</h2>
  <p>Автор:<a href=""></a>
  </p>
  <p>Цена: кредитов</p>
  <p>Доступность: заканчивается или есть в наличии</p>
  <button type="button">Добавить в корзину</button>
</div>)
}
ReactDOM.render(<Component url={images.url} title={images.title} />, document.querySelector('#root'))