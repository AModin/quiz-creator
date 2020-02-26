import React from "react";
import AddButton from "../components/kit/AddButton";
import  TextInput from "../components/kit/TextInput";
import StyledAddButton from "../components/kit/StyledAddButton";
import StyledCheckbox from "../components/kit/StyledCheckbox";
import StyledRadioButton from "../components/kit/StyledRadioButton";
 

const QuizPage = props => (
  <div>
    <h1>Kit Page </h1>
    <AddButton variant="add">Добавить</AddButton>
    <AddButton variant="delete">Удалить</AddButton>
    <TextInput type="text" placeholder="Some text"></TextInput>
    <StyledAddButton variant="add">Add</StyledAddButton>
    <StyledAddButton >Delete</StyledAddButton><br/>
    <StyledCheckbox color={false}>Single</StyledCheckbox>
    <StyledRadioButton name="rad" color="red">One</StyledRadioButton>
    <StyledRadioButton name="rad" color="red">Two</StyledRadioButton>
    <StyledRadioButton name="rad" color="red">Tree</StyledRadioButton>
  </div>
);

export default QuizPage;
