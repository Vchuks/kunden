import React from 'react'
import { Link } from 'react-router-dom'

const TextLinks = ({className, to , children}) => {
  return (
    <Link to={to} className={className}>{children}</Link>
  )
}

export default TextLinks
