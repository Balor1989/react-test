import React, { Component } from "react"
import './Dropdown.css'


class Dropdown extends Component {

    state = {
    visible: false
    }

    toggleElement = () => {
        this.setState(prevState => ({
            visible: !prevState.visible
        }))
    }
    // showElement = () => {
    //     this.setState({
    //         visible: true
    //     })
    // }
    // hideElement = () => {
    //     this.setState({
    //         visible: false
    //     })
    // }

    render() {
        return (
            <div className="Dropdown">
                <button type="button" className="Dropdown__toggle"
                    onClick={this.toggleElement}>
                    {this.state.visible ? "Скрыть" : "Показать"}</button>
             
                
                {this.state.visible && <div className="Dropdown__menu">
                    Выпадающее меню</div>}
            </div>
        );
 }
}
export default Dropdown