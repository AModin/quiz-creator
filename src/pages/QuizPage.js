import React, { useState } from "react";
import QuizStore from "../store/QuizStore";
import { toJS } from "mobx";
import { observer } from "mobx-react";
import StyledRadioButton from "../components/kit/StyledRadioButton";
import StyledButton from "../components/kit/StyledButton";
import StyledCheckbox from "../components/kit/StyledCheckbox";

const QuizPage = observer(props => {
  const [checkbox, handleCheckbox] = useState(false);

  const quizId = props.match.params.quizId;
  // console.log(toJS(QuizStore));
  const quiz = toJS(QuizStore).quizes[quizId];

  if (quiz) {
    var questions = quiz.questions.map(quest => (
      <div key={quest.id}>
        <h3>{quest.title}</h3>
        {quest.isSingle ? (
          <ol>
            {quest.variants.map(v => (
              <StyledRadioButton key={v.id} name={quest.title}>
                {v.title}
              </StyledRadioButton>
            ))}
          </ol>
        ) : (
          <ol>
            {quest.variants.map(v => (
              <StyledCheckbox
                key={v.id}
                name={quest.title}
                handleChange={handleCheckbox}
              >
                {v.title}
              </StyledCheckbox>
            ))}
          </ol>
        )}
      </div>
    ));
  }
  return quiz ? (
    <div>
      <h1>
        Quiz Page {quizId} and {quiz.id}
      </h1>
      <h2>{quiz.title}</h2>
      <button>Edit Quiz</button>
      {questions}
      <StyledButton dark color="green">
        Submit Quiz
      </StyledButton>
    </div>
  ) : (
    <div>
      <h1>Quiz not find</h1>
    </div>
  );
});

export default QuizPage;
