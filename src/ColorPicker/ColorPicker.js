import './ColorPicker.css'


const ColorPicker = ({ options }) => (
    <div className="ColorPicker">
        <h2 className="ColorPicker__title">Color Picker</h2>
        <div>
            {options.map(({ label, color }) => (
                <p key={label}
                    className="ColorPicker__option"
                    style={{ backgroundColor: color }}
                ></p>
            ))}
        </div>
    </div>
)

export default ColorPicker