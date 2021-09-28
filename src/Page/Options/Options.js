import React, { useState } from "react";

const Options = () => {
  const [state, setState] = useState("hang1");
  const handleChange = (e) => {
    const selectFood = e.target.value;
    setState(selectFood);
  };
  return (
    <div>
      <select onChange={handleChange}>
        <option value="hang1" selected>
          hang1
        </option>
        <option value="hang2">hang2</option>
        <option value="hang3">hang3</option>
      </select>
      {state === "hang1" && <h2>oke hang 1</h2>}
      {state === "hang2" && <h2>oke hang 2</h2>}
      {state === "hang3" && <h2>oke hang 3</h2>}
    </div>
  );
};

export default Options;
