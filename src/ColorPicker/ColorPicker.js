// import { Component } from 'react/cjs/react.production.min'
import { useState } from 'react';
import './ColorPicker.css'


const ColorPicker = ({ options }) => {
    const [activeOptionIndex, setActiveOptionIndex] = useState(2);
    const {label} = options[activeOptionIndex]
    // const setActiveIndex = index => {
    //     setActiveOptionIndex(index)
    // }

     const addActiveClassName = (index) => {
        const optionClasses = ['ColorPicker__option']
                if (index === activeOptionIndex) {
            optionClasses.push('ColorPicker__option--active')
        }
        return optionClasses.join(' ')
    }

    return (
        <div className="ColorPicker">
            <h2 className="ColorPicker__title">Color Picker</h2>
            <p>Выбран цвет: {label}</p>
            <div>
                {options.map(({ label, color }, index) => {
                    const optionClassName = addActiveClassName(index)
                    return (
                        <button
                            key={label}
                            className={optionClassName}
                            style={{ backgroundColor: color }}
                            onClick={() => setActiveOptionIndex(index)}
                        ></button>
                    )
                })}
            </div>
        </div>
    );
};

export default ColorPicker


// class ColorPicker extends Component {
//     state = {
//         activeOptionIndex: 2,
//     }

//     setActiveIndex = (index) => {
//         this.setState({ activeOptionIndex: index})
//     }

//     addActiveClassName = (index) => {
//         const optionClasses = ['ColorPicker__option']
//                 if (index === this.state.activeOptionIndex) {
//             optionClasses.push('ColorPicker__option--active')
//         }
//         return optionClasses.join(' ')
//     }

//     render() {
//         const { activeOptionIndex } = this.state;
//         const { options } = this.props;

//         const { label } = options[activeOptionIndex];
//         return (
//             <div className="ColorPicker">
//                 <h2 className="ColorPicker__title">Color Picker</h2>
//                 <p>Выбран цвет: {label}</p>
//                 <div>
//                     {options.map(({ label, color }, index) => {
//                         const optionClassName =  this.addActiveClassName(index)
//                         return (
//                         <button
//                             key={label}
//                             className={optionClassName}
//                             style={{ backgroundColor: color }}
//                             onClick={() => this.setActiveIndex(index)}   
//                         ></button>
//                     )
//                     })}
//                 </div>
//             </div>
//         )
//     }
// }
    


// export default ColorPicker