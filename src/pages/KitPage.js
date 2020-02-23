import React from "react";
import AddButton from "../components/kit/AddButton";

const QuizPage = props => (
  <div>
    <h1>Kit Page </h1>
    <AddButton type="add">Добавить</AddButton>
    <AddButton>Удалить</AddButton>
  </div>
);

export default QuizPage;
