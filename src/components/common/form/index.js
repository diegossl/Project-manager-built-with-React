import React from 'react'

function Form (props) {
  return (
    <input
      className={props.className}
      type={props.type}
      placeholder={props.placeholder}
    />
  )
}

export default Form