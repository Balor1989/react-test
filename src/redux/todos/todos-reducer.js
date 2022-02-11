import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import actions from "./totos-action";

const items = createReducer([], {
	[actions.addTodo]: (state, action) => [...state, action.payload],
	[actions.deleteTodo]: (state, action) =>
		state.filter(({ id }) => id !== action.payload),
});

const filter = createReducer("", {
	[actions.changeFilter]: (_, payload) => actions.payload,
});

export default combineReducers({ items, filter });
