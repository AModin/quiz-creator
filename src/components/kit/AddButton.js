import React from "react";
import "./add-button.css";

const AddButton = ({ children, type }) => {
  let classes = "icon-btn";
  if (type === "add") {
    classes += " add-btn";
  } else {
    classes += " delete-btn";
  }
  return (
    <div>
      <button className={classes}>
        {type === "add" ? <div className="add-icon" /> : null}

        <div className="btn-txt">{children}</div>
      </button>
    </div>
  );
};

export default AddButton;
