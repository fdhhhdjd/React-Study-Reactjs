import React from "react";

const TagButton = ({ name, handleSetTag, tagActive }) => {
  return (
    <div>
      <button
        className={`tag ${tagActive ? "active" : null}`}
        onClick={() => handleSetTag(name)}
      >
        {name.toUpperCase()}
      </button>
    </div>
  );
};

export default TagButton;
