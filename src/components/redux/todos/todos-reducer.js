import { createReducer } from "@reduxjs/toolkit";
import actions from "./totos-action";

export const items = createReducer([], {
	[actions.addTodo]: (state, action) => [...state, action.payload],
	[actions.deleteTodo]: (state, action) =>
		state.filter(({ id }) => id !== action.payload),
});
