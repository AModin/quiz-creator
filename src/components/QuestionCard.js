import React, { useState } from "react";
import StyledCheckbox from "./kit/StyledCheckbox";
import StyledRadioButton from "./kit/StyledRadioButton";

const QuestionCard = ({ question, updateAnswers }) => {
  const [answer, setAnswer] = useState([]);
  const isSingle = question.isSingle;

  const handleCheckboxes = title => {
    let newAnswer = [...answer];

    if (answer.includes(title)) {
      newAnswer = answer.filter(a => a !== title);
    } else {
      newAnswer.push(title);
    }
    setAnswer(newAnswer);
    updateAnswers(question.title, newAnswer)
  };
  const handleRadiobuttons = title => {
    let newAnswer = [];

    newAnswer.push(title);

    setAnswer(newAnswer);
    updateAnswers(question.title, newAnswer)
  };

  const variants = (
    <ol>
      {!isSingle
        ? question.variants.map(v => (
            <StyledCheckbox
              key={v.id}
              name={question.title}
              handleChange={() => handleCheckboxes(v.title)}
            >
              {v.title}
            </StyledCheckbox>
          ))
        : question.variants.map(v => (
            <StyledRadioButton
              key={v.id}
              name={question.title}
              onChange={() => handleRadiobuttons(v.title)}
            >
              {v.title}
            </StyledRadioButton>
          ))}
    </ol>
  );
  return (
    <div>
      <h3>{question.title}</h3>
      <div>{variants}</div>
      <div>
        <p>Answers: {answer.join(", ")}</p>
      </div>
    </div>
  );
};

export default QuestionCard;
