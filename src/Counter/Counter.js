import React from "react"
import propTypes from "prop-types";
import Controls from "./Controls";

class Counter extends React.Component {
    
    
    static defaultProps = {
        initialValue: 0,
    }
    static propTypes = {
         initialValue: propTypes.number.isRequired
     }
     
    state = {
        value: this.props.initialValue,
    };
    

    increment = () => {
        this.setState(prevState => {
            return {
                value: prevState.value + 1
            }
        })
        console.log('Увеличить')
    };
    decrement = () => {
        this.setState(prevState => ({
            value: prevState.value - 1
        }))
        console.log('Уменьшить')
    }
    
    render() {
        return (
            <div className="Counter">
                <span className="Counter__value">{this.state.value}</span>

                <Controls
                    onIncrement={this.increment}
                    onDecrement={this.decrement}
                />
            </div>   
        )
    }
}

export default Counter