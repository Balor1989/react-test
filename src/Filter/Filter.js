import s from "./Filter.module.css";
import propTypes from "prop-types";
import { connect } from "react-redux";
import todosActions from "../redux/todos/todos-actions";

const Filter = ({ value, onFilterChange }) => (
	<div>
		<h2 className={s.filterTitle}>Find contacts by name</h2>
		<input
			className={s.filterInput}
			type="text"
			value={value}
			onChange={onFilterChange}
		/>
	</div>
);

const mapStateToProps = (state) => ({
	value: state.todos.Filter,
});
const mapDispatchToProps = (dispatch) => ({
	onFilterChange: (event) =>
		dispatch(todosActions.filterChange(event.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

Filter.propTypes = {
	value: propTypes.string,
	onFilterChange: propTypes.func,
};
