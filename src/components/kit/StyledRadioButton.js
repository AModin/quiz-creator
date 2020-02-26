import React from "react";
import styled from "styled-components";

const RadioContainer = styled.label`
  display: inline-block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 20px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  & input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }
  &:hover input ~ span {
    background-color: rgb(83, 83, 83);
  }

  /* When the radio button is checked, add a blue background */
  & input:checked ~ span {
    background-color: ${props =>
      props.color ? props.color.toString() : "#2196f3"};
  }
  /* Show the indicator (dot/circle) when checked */
  & input:checked ~ span:after {
    display: block;
  }

  /* Style the indicator (dot/circle) */
  & span:after {
    top: 9px;
    left: 9px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: white;
  }
`;

const RadioCheckMark = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #cdcdcd;
  border-radius: 50%;

  &:after {
    content: "";
    position: absolute;
    display: none;
  }
`;

const StyledRadioButton = ({ children, color, ...props }) => {
  return (
    <RadioContainer color={color}>
      {children}
      <input type="radio" {...props} />
      <RadioCheckMark></RadioCheckMark>
    </RadioContainer>
  );
};

export default StyledRadioButton;
