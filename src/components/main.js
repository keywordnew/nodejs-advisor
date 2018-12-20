import React from 'react'

export default ({ children }) => ( // eslint-disable-line react/prop-types
  <div
    style={{
      margin: '3rem auto',
      maxWidth: 600,
      padding: '0 1rem',
      textAlign: 'center',
    }}
  >
    {children}
  </div>
)
