import React from "react";
import styled from "styled-components";

const InputField = styled.input`
  height: 50px;
  border: 1px solid #cdcdcd;
  background: white;
  border-radius: 25px;
  overflow: hidden;
  font-size: 20px;
  padding-left: 20px;
  outline: none;
`;

const TextInput = (props) => {
  return <InputField {...props}></InputField>;
};

export default TextInput;
