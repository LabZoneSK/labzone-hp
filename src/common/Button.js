import React from 'react'

import './Button.scss'

const Button = ({label}) => {
  return <button className="button is-primary">{label}</button>
}

export default Button
