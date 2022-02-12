//Redux-reducer

// import { combineReducers } from "redux";
// import initTodos from "../../ToDoList/todos.json";
// import types from "./totos-types";

// const items = (state = initTodos, { type, payload }) => {
// 	switch (type) {
// 		case types.ADD:
// 			return [...state, payload];
// 		case types.DELETE:
// 			return state.filter((todo) => todo.id !== payload);
// 		case types.TOGGLE_COMPLETED:
// 			return state;
// 		default:
// 			return state;
// 	}
// };

// const filter = (state = "", { type, payload }) => {
// 	switch (type) {
// 		case types.CHANGE_FILTER:
// 			return payload;
// 		default:
// 			return state;
// 	}
// };

// export default combineReducers({
// 	items,
// 	filter,
// });

//Redux toolkit-reducer
import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import initTodos from "../../ToDoList/todos.json";
import actions from "./todos-actions";

const items = createReducer(initTodos, {
	[actions.addTodo]: (state, { payload }) => [...state, payload],
	[actions.deleteTodo]: (state, { payload }) =>
		state.filter((todo) => todo.id !== payload),
	[actions.toggleCompleted]: (state, { payload }) =>
		state.map((todo) =>
			todo.id === payload
				? { ...todo, completed: !todo.completed }
				: todo,
		),
});

const filter = createReducer("", {
	[actions.filterChange]: (_, { payload }) => payload,
});

export default combineReducers({
	items,
	filter,
});
