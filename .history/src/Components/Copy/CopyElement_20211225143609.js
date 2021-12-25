import React from "react";

const CopyElement = ({ data, setData }) => {
  return (
    <>
      <div>
        <h3>{data}</h3>
        <CopyToClipboard text={data}>
          <button
            className="btn"
            onClick={() => toast("Text Copied", { position: "top-right" })}
            style={{ textAlign: "center", cursor: "pointer" }}
          >
            Copy Text
          </button>
        </CopyToClipboard>
        <button
          className="btn btn-clear"
          onClick={() => setData("")}
          style={{ textAlign: "center", cursor: "pointer" }}
        >
          Clear
        </button>
        <Toaster />
      </div>
    </>
  );
};

export default CopyElement;
