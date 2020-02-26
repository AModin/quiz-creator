import React from "react";
import "./add-button.css";

const AddButton = ({ children, variant, ...props } ) => {
  let classes = "icon-btn";
  if (variant === "add") {
    classes += " add-btn";
  } else {
    classes += " delete-btn";
  }
  return (
    
      <button className={classes} {...props}>
        {variant === "add" ? <div className="add-icon" /> : null}

        <div className="btn-txt">{children}</div>
      </button>
  );
};

export default AddButton;
