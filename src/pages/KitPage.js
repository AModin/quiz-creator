import React, { useState } from "react";
import AddButton from "../components/kit/AddButton";
import TextInput from "../components/kit/TextInput";
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
  return (
    <div>
      <h1>Kit Page </h1>

      <div className="kit-container">
        <div>
          <h1>Checkbox Testing</h1>
          <h2>{isSingle ? "Single" : "Multiple"}</h2>
        </div>
        <StyledCheckbox
          color={false}
          checked={isSingle}
          onChange={() => setIsSingle(!isSingle)}
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
          checked={boxColor === "red"}
          name="boxColor"
          onClick={()=>setboxColor("red")}
          color="red"
        >
          Red
        </StyledRadioButton>
        <StyledRadioButton
          checked={boxColor === "blue"}
          name="boxColor"
          onClick={()=>setboxColor("blue")}
          color="blue"
        >
          Blue
        </StyledRadioButton>
        <StyledRadioButton
          checked={boxColor === "green"}
          name="boxColor"
          onClick={()=>setboxColor("green")}
          color="green"
        >
          Green
        </StyledRadioButton>
      </div>
    </div>
  );
};

export default QuizPage;
