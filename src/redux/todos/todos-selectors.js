export const getTodos = (state) => {
	const todos = state.todos.items;
	const filter = state.todos.filter;
	const normalizedFilter = filter.toLowerCase();

	return todos.filter(({ text }) =>
		text.toLowerCase().includes(normalizedFilter),
	);
};
