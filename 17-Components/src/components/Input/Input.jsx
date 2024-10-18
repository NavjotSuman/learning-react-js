import React,{forwardRef} from "react";

// export default function Input({ type = "text", className = "", ...props },ref) {
//   return <input type={type} className={className} {...props} ref={ref} />;
// }

const Input = forwardRef(({ type = "text", className = "", ...props }, ref) => {
  return <input type={type} className={className} {...props} ref={ref} />;
});

export default Input