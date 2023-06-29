import React from 'react'

const Input = ({type, className, placeholder, name, value, ...rest}) => {
  return (
    <input type={type} className={className} placeholder={placeholder} name={name} value={value} {...rest}/>
  )
}

export default Input
