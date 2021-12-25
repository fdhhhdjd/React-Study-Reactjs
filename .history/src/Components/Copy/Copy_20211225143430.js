import React from "react";
import { useState } from "react";

const Copy = () => {
  const [value, setValue] = useState("");
  const [data, setData] = useState("");
  return (
    <>
      <div className="App">
        <h2>React Copy Clipboard</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Text to Copy"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </form>
        {data && <CopyElement data={data} setData={setData} />}
      </div>
    </>
  );
};

export default Copy;
