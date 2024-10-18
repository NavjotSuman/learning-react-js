import React from "react";

const Name = ({ placeholder, onNameChange }) => {
  console.log(onNameChange);
  return (
    <div>
      <input
        type="text"
        placeholder={placeholder}
        onChange={(e) => onNameChange(e.target.value)}
      />
    </div>
  );
};

export default Name;
