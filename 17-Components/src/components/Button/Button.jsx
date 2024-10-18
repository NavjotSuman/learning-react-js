import React, { forwardRef, memo } from 'react'



const Button = ({
  type="button",
  className="",
  children="Submit",
  ...props
},ref) => {
  console.log(`Button rendered : ${children}`)
  return (
    <button type={type} className={`bg-black text-white ${className} `} {...props} ref={ref}>{children}</button>
  )
}

export default memo(forwardRef(Button));

// export default function Button({
//     type="button",
//     className="",
//     children="Submit",
//     ...props
// }) {
//   return (
//     <button type={type} className={`bg-black text-white ${className} `} {...props}>{children}</button>
//   )
// }
