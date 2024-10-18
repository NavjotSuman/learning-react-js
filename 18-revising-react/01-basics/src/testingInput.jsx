import React, { useState } from "react";
import Name from "./input";

export default function TestingInput() {
  const [name, setName] = useState("");
  console.log(name);
  return (
    <div>
      <Name placeholder="You Name" onNameChange={(name) => setName(name)} />
    </div>
  );
}
