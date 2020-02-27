import React from "react";
import styled from "styled-components";

const CheckboxContainer = styled.label`
  display: inline-block;
  position: relative;
  padding-left: 35px;
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
    height: 0;
    width: 0;
  }
  &:hover input ~ span {
    background-color: rgb(83, 83, 83);
  }

  /* When the checkbox is checked, add a blue background */
  & input:checked ~ span {
    background-color: ${props =>
      props.color ? props.color.toString() : "#2196f3"};
    /* background-color: #2196f3; */
  }
  & input:checked ~ span:after {
    display: block;
  }

  /* Style the checkmark/indicator */
  & span:after {
    left: 8px;
    top: 3px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 5px 5px 0;
    border-radius: 3px;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;
const CheckboxCheckmark = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #cdcdcd;
  border-radius: 5px;
  &:after {
    content: "";
    position: absolute;
    display: none;
  }
`;

const StyledCheckbox = ({ children, color, ...props }) => (
  <CheckboxContainer color={color}>
    {children}
    <input type="checkbox" {...props} />
    <CheckboxCheckmark></CheckboxCheckmark>
  </CheckboxContainer>
);

export default StyledCheckbox;
