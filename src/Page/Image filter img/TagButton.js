import React from "react";

const TagButton = ({ name, handleSetTag, tagActive }) => {
  return (
    <div>
      <button
        className={`tag1 ${tagActive ? "active1" : null}`}
        onClick={() => handleSetTag(name)}
      >
        {name.toUpperCase()}
      </button>
    </div>
  );
};

export default TagButton;
