import React from "react";
import AddButton from "../components/kit/AddButton";
import  TextInput from "../components/kit/TextInput";
 

const QuizPage = props => (
  <div>
    <h1>Kit Page </h1>
    <AddButton variant="add">Добавить</AddButton>
    <AddButton variant="delete">Удалить</AddButton>
    <TextInput type="text" placeholder="Some text"></TextInput>
  </div>
);

export default QuizPage;
