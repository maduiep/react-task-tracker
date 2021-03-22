import PropTypes from 'prop-types';

const Button = ({color, text, onClick}) => {

 return <button 
 onClick={onClick}
 style={btnColor} 
 className="btn">{text}
 </button>
 
}

Button.defaultProps = {
 color: 'green',
}

Button.propTypes = {
 color: PropTypes.string,
 text: PropTypes.string
}

const btnColor = {
 backgroundColor: 'green'
}

export default Button
