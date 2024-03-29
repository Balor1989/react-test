import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import Counter from './Counter/Counter';
// import Dropdown from './Dropdown/Dropdown';
// import colorPickerOptions from './ColorPicker/colorPickerOptions'
// import ColorPicker from './ColorPicker/ColorPicker';
import App from "./App";
import combStore from "./redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.render(
	<React.StrictMode>
		<Provider store={combStore.store}>
			<PersistGate loading={null} persistor={combStore.persistor}>
				<App />
			</PersistGate>
		</Provider>
	</React.StrictMode>,
	document.getElementById("root"),
);

// ReactDOM.render(
// 	<React.StrictMode>
// 		<h1>Test</h1>
// 		<Dropdown />
// 		<p className="title"></p>
// 		<Counter />
// 		<ColorPicker options={colorPickerOptions} />
// 		<App />
// 	</React.StrictMode>,
// 	document.getElementById("root"),
// );

// ReactDOM.render(<App
// />, document.querySelector('#root'))

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
