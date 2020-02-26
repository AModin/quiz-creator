import React from "react";
import styled from "styled-components";

// Some seting for button!!!
// dark atribute for white text color 
// color atribute for background color 
// width atribute for button width 
// height atribute for button height 

const ColorButton = styled.button`
  width: ${props => props.width || "150px"};
  height: ${props => props.height || "50px"};
  border: 1px solid #cdcdcd;
  background: white;
  border-radius: 25px;
  font-size: 20px;
  overflow: hidden;
  outline: none;
  color: ${props => (props.dark ? "#fff" : "black")};
  background-color: ${props =>
    props.color ? props.color.toString() : "#2196f3"};
  &:active {
    position: relative;
    top: 2px;
  }
  &:hover {
    -webkit-box-shadow: inset 0px 0px 25px 5px rgba(89, 89, 89, 0.6);
    -moz-box-shadow: inset 0px 0px 25px 5px rgba(89, 89, 89, 0.6);
    box-shadow: inset 0px 0px 25px 5px rgba(89, 89, 89, 0.6);
  }
`;

const StyledButton = ({ children, ...props }) => {
  return <ColorButton {...props}>{children}</ColorButton>;
};

export default StyledButton;
