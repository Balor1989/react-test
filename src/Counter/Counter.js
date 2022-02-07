import { useState, useEffect} from "react";



const Counter = () => {
    
    const [counterA, setCounterA] = useState(0);
    const [counterB, setCounterB] = useState(0);

    const handleCounterAIncrement = () => {
        setCounterA(prevState => prevState + 1);
    }
       const handleCounterBIncrement = () => {
        setCounterB(prevState => prevState + 1);
    }
    useEffect(() => {
        const total = counterB + counterA;
        document.title=`Всего кликнули ${total} раз`
    }, [counterA, counterB])

    return (
        <>
            <button type="button" onClick={handleCounterAIncrement}>
                Кликнули CounterA {counterA} раз
            </button>
            <button type="button" onClick={handleCounterBIncrement}>
                Кликнули CounterB {counterB} раз
            </button>
        </>
    );
}

export default Counter

// class Counter extends React.Component {
    
    
//     static defaultProps = {
//         initialValue: 0,
//     }
//     static propTypes = {
//          initialValue: propTypes.number.isRequired
//      }
     
//     state = {
//         value: this.props.initialValue,
//     };
    

//     increment = () => {
//         this.setState(prevState => {
//             return {
//                 value: prevState.value + 1
//             }
//         })
//         console.log('Увеличить')
//     };
//     decrement = () => {
//         this.setState(prevState => ({
//             value: prevState.value - 1
//         }))
//         console.log('Уменьшить')
//     }
    
//     render() {
//         return (
//             <div className="Counter">
//                 <span className="Counter__value">{this.state.value}</span>

//                 <Controls
//                     onIncrement={this.increment}
//                     onDecrement={this.decrement}
//                 />
//             </div>   
//         )
//     }
// }

// export default Counter