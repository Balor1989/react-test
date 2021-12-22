import propTypes from "prop-types";
 
function Section({title, children}) {
    return <div>
        {title && <h2>{title}</h2>}
        {children}
    </div>

}

Section.propTypes = {
    title: propTypes.string.isRequired,
    children: propTypes.node
}

export default Section