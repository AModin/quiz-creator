import React from "react";
import QuizStore from "../store/QuizStore";
import { observer } from "mobx-react";
import { Link } from "react-router-dom";
import ResultsStore from "../store/ResultsStore";

const QuizesList = observer(() => {
  const { quizes } = QuizStore;
  const { answersForEachQuiz } = ResultsStore;
  console.log(answersForEachQuiz)
  const quizesIds = Object.keys(quizes);

  return (
    <div className="quizes-list">
      <h1>List of my Quizes </h1>
      <table>
        <thead>
          <tr>
            <th>Quiz</th>
            <th>Results</th>
          </tr>
        </thead>
        <tbody>
          {quizesIds.map(quizId => {
            return (
              <tr key={quizId}>
                <td>
                  <Link to={`/quiz/${quizId}`}>{quizes[quizId].title}</Link>
                </td>
                <td>
                  Results: {" "}
                  {answersForEachQuiz[quizId] ? (
                    <Link to={`/results/${quizId}`}>
                      {answersForEachQuiz[quizId]}
                    </Link>
                  ) : (
                    "0"
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
});

export default QuizesList;
