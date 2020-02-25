import React from "react";
import styled from "styled-components";

const Button = styled.button`
  width: 50px;
  height: 50px;
  border: 1px solid #cdcdcd;
  background: white;
  border-radius: 25px;
  overflow: hidden;
  position: relative;
  transition: width 0.2s ease-in-out;
  &:hover {
    width: 160px;
  }
  &::before,
  &::after {
    transition: width 0.2s ease-in-out, border-radius 0.2s ease-in-out;
    content: "";
    position: absolute;
    height: 4px;
    width: 10px;
    top: calc(50% - 2px);
    background: ${(props)=> (props.variant === "add")? "green": "red"};
  }
  &::after {
    right: 14px;
    overflow: hidden;
    border-top-right-radius: 2px;
    border-bottom-right-radius: 2px;
  }
  &::before {
    left: 14px;
    border-top-left-radius: 2px;
    border-bottom-left-radius: 2px;
  }
  
  &:hover::before,
  &:hover::after {
    width: 4px;
    border-radius: 2px;
  }
  &:hover .btn-txt {
    opacity: 1;
  }
  &:focus {
    outline: none;
  }
  &:hover .add-icon::before {
    left: 15px;
    height: 4px;
    top: calc(50% - 2px);
  }
  &:hover .add-icon::after {
    right: 15px;
    height: 4px;
    top: calc(50% - 2px);
  }
`;
const AddIcon = styled.div`
&::after,
&::before {
  transition: all 0.2s ease-in-out;
  content: "";
  position: absolute;
  height: 20px;
  width: 2px;
  top: calc(50% - 10px);
  background: green;
  overflow: hidden;
}
&::before {
  left: 22px;
  border-top-left-radius: 2px;
  border-bottom-left-radius: 2px;
}
&::after {
  right: 22px;
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
}
`;
const BtnText = styled.div`
  opacity: 0;
  transition: opacity 0.2s;
  color: rgb(118, 118, 118);
  font-size: 18px;
`;

const StyledAddButton = ({ children, variant, ...props }) => {
  return (
    <Button variant={variant}  {  ...props}>
      {/* <div className="add-icon" /> */}
      {variant === "add" ? <AddIcon className="add-icon" /> : null}

      <BtnText className="btn-txt">{children}</BtnText>
    </Button>
  );
};

export default StyledAddButton;
