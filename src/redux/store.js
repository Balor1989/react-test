// import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./todos/todos-reducer";
import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
	todos: todosReducer,
});

const store = configureStore({ reducer: rootReducer });

export default store;
