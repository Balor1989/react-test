import types from "./totos-types";
import shortid from "shortid";
import { type } from "@testing-library/user-event/dist/type";

const addTodo = (text) => ({
	type: types.ADD,
	payload: {
		id: shortid.generate(),
		text,
		completed: false,
	},
});

const deleteTodo = (todoId) => ({
	type: types.DELETE,
	payload: todoId,
});

const toggleCompleted = (todoId) => ({
	type: types.TOGGLE_COMPLETED,
	payload: todoId,
});

const filterChange = (value) => ({
	type: types.CHANGE_FILTER,
	payload: value,
});

export default { addTodo, deleteTodo, toggleCompleted, filterChange };
