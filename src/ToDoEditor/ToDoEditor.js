import { Component } from "react";

class ToDoEditor extends Component{
    state = {
        message: ""
    }

    handleChange = e => {
        this.setState({ message: e.currentTarget.value });
    };

    handleSubmit = e => {
        e.preventDefault()
        this.props.onSubmit(this.state.message)
        this.setState({message: ""})
    }
    


    render() {
        return(
        <form className="ToDoEditor" onSubmit={this.handleSubmit}>
            <textarea
                value={ this.state.message }
                onChange={this.handleChange}>
            </textarea>
            <button type="submit">Создать</button>
     </form>
        )}
}

export default ToDoEditor