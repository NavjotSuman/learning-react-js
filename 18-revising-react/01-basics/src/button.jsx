import React from 'react'

const Button = (props) => {
    console.log(props)
  return (
    <div>
        <button type="submit">{props.children}</button>
    </div>
  )
}

export default Button