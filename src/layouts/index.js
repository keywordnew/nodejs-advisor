import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import { BrowserRouter as Router, Route } from 'react-router-dom' // eslint-disable-line no-unused-vars

import Main from '../components/main'
import Nav from '../components/nav'

const Header = () => (
  <div
    style={{
      margin: '3rem auto',
      maxWidth: 600,
      textAlign: 'center',
    }}
  >
    <h2>
      <Link to="/">
        👩🏾‍🏫 Node.js advisor 👨🏼‍🏫
      </Link>
    </h2>
    <h3>
      <Route path="/" component={Nav} />
    </h3>
  </div>
)

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Node.js advisor"
      meta={[
        { name: 'description', content: 'contribute to Node.js' },
        { name: 'keywords', content: 'Node.js, javascript, developer, web, open source' },
      ]}
    />
    <Header />
    <Main>
      {children()}
    </Main>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func.isRequired,
}

export default TemplateWrapper
