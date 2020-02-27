import React, { useState } from "react";
// eslint-disable-next-line
import AddButton from "../components/kit/AddButton";
import TextInput from "../components/kit/TextInput";
// eslint-disable-next-line
import StyledAddButton from "../components/kit/StyledAddButton";
import StyledCheckbox from "../components/kit/StyledCheckbox";
import StyledRadioButton from "../components/kit/StyledRadioButton";
import StyledButton from "../components/kit/StyledButton";

import "./kit.css";
import styled from "styled-components";

const ColorBox = styled.div`
  width: 100px;
  height: 30px;
  border: 1px solid black;
  margin: 20px auto;
  background-color: ${props => (props.color ? props.color.toString() : "#fff")};
`;

const QuizPage = props => {
  const [isSingle, setIsSingle] = useState(true);
  const [boxColor, setboxColor] = useState("blue");
  const [textInput, setTextInput] = useState("Stam");

 
  return (
    <div>
      <h1>Kit Page </h1>

      <div className="kit-container">
        <div>
          <h1>StyledButton Testing</h1>
          <h2>{textInput}</h2>
        </div>
        <StyledButton
          dark
          color="#cdcdcd"
          onClick={() => {
            setTextInput(textInput + "1");
          }}
        >
          Button
        </StyledButton>
      </div>
      <div className="kit-container">
        <div>
          <h1>TextInput Testing</h1>
          <h2>{textInput}</h2>
        </div>
        <TextInput
          placeholder="Some text..."
          onChange={event => setTextInput(event.target.value)}
        ></TextInput>
      </div>
      <div className="kit-container">
        <div>
          <h1>Checkbox Testing</h1>
          <h2>{isSingle ? "Single" : "Multiple"}</h2>
        </div>
        <StyledCheckbox
          color="orange"
          checked={isSingle}
          handleChange={()=>setIsSingle(!isSingle)}
        >
          Single
        </StyledCheckbox>
      </div>
      <div className="kit-container">
        <div>
          <h1>Radio Buttons Testing</h1>
          <ColorBox color={boxColor} />
        </div>
        <StyledRadioButton
          // checked={boxColor === "red"}
          defaultChecked={boxColor === "red"}
          name="boxColor"
          onClick={() => setboxColor("red")}
          color="red"
        >
          Red
        </StyledRadioButton>
        <StyledRadioButton
          defaultChecked={boxColor === "blue"}
          name="boxColor"
          onClick={() => setboxColor("blue")}
          color="blue"
        >
          Blue
        </StyledRadioButton>
        <StyledRadioButton
          defaultChecked={boxColor === "green"}
          name="boxColor"
          onClick={() => setboxColor("green")}
          color="green"
        >
          Green
        </StyledRadioButton>
      </div>
    </div>
  );
};

export default QuizPage;
