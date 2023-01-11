import React from "react";

const TagButton = ({ index, tag }) => {
  return (
    <React.Fragment>
      <button className={`tag-button tag-${index}`}>
        {tag}
        <div className="tag-button__horizontal"></div>
        <div className="tag-button__vertical"></div>
      </button>
    </React.Fragment>
  );
};

export default TagButton;
