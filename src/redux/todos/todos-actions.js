import types from "./totos-types";
import shortid from "shortid";

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

// eslint-disable-next-line import/no-anonymous-default-export
export default { addTodo, deleteTodo, toggleCompleted, filterChange };
