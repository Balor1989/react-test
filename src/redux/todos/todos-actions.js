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

export default { addTodo };
