import React, { memo, useRef } from "react";

const Counts = ({name, class:myClass, obj}) => {
  const RenderCount = useRef(0);
  return (
    <>
      <p>
        nothing chnaged here now I have Rerendered.
        <span className="text-red-800 font-bold text-2xl">
          {RenderCount.current++}time(s)
        </span>
      </p>
      <span>name = {name}</span>
      <span>class = {myClass}</span>
      <span>age : {obj.age}</span>
    </>
  );
};

export default memo(Counts);
