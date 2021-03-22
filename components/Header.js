import PropTypes from 'prop-types';
import Button from './Button'

const Header = ({title, menu}) => {
  const onClick  = (e) => {
  console.log(e)
 }

 return (
  <header className="header"> 
    <h1>{title}</h1>
    <Button color='green' text='Add' onClick={onClick}/>
  </header>
 )
}

Header.defaultProps = {
 title: 'Task Tracker',
 menu: 'Machines'
}

Header.propTypes = {
 title: PropTypes.string.isRequired,
 menu: PropTypes.string
}

export default Header
