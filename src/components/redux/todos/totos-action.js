import { createAction } from "@reduxjs/toolkit";
import shortid from "shortid";

const ADD = "todos/add";
const DELETE = "todos/delete";

const addTodo = createAction(ADD, (text) => {
	return {
		payload: {
			id: shortid.generate(),
			text,
			completed: false,
		},
	};
});

const deleteTodo = createAction(DELETE);

export default { deleteTodo, addTodo };
