import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

function Nav({ location }) {
  return location.pathname === '/' ? <div><span role="img" aria-label="rocket emoji">🚀</span></div> : <Link to="/"> ⏎</Link>
}

Nav.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
}

export default Nav
