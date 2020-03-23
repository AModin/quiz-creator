import React from "react";
import QuizStore from "../store/QuizStore";
import { observer } from "mobx-react";
import ResultsStore from "../store/ResultsStore";
import { toJS } from "mobx";

const ResultsPage = observer(props => {
  const { answers } = ResultsStore
  const { quizes } = QuizStore
  const quizId = props.match.params.quizId;
  const title = quizes[quizId].title
  let answersList = []

  for(const answerId in answers){
    
    if(answers[answerId].quizId == quizId){
      answersList.push(answers[answerId])
    }
  }


  return  <div >
      <h1>Results Page for: {title}</h1>
      {answersList.map(result =>
        <div key={result.id}>
          <h3>Name: {result.student}</h3>
      <div>Answers:{result.answers.map(answer=>(
        <p key={answer.title}>
          {answer.title}: {answer.value}
        </p>
      )

      )}</div>
          <hr/>
        </div>
      )}
    </div>
});

export default ResultsPage;
