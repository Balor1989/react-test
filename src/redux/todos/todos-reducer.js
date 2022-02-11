import { combineReducers } from "redux";
import initTodos from "../../ToDoList/todos.json";
import types from "./totos-types";

const items = (state = initTodos, { type, payload }) => {
	switch (type) {
		case types.ADD:
			return [...state, payload];
		default:
			return state;
	}
};

const filter = (state = "", action) => {
	return state;
};

export default combineReducers({
	items,
	filter,
});
