import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { todosReducer } from "./todos/todos-reducer";

const rootReducer = combineReducers({
	todos: todosReducer,
});

const store = configureStore({ rootReducer });

export default store;
