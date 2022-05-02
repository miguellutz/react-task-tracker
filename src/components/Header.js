import PropTypes from 'prop-types'

const Header = ({ title }) => {
  return (
    <header>
      <h1>{title}</h1>
    </header>
  )
}

Header.defaultProps = {
  title: 'Task Tracker',
}

// CSS in JS
// const headingStyle = {
//   color: 'red',
//   backgroundColor: 'black'
// }

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Header
