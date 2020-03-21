import React from "react";
import QuizStore from "../store/QuizStore";
import { observer } from "mobx-react";
import { toJS } from "mobx";
import { Link } from "react-router-dom";

const QuizesList = observer(() => {
  const { quizes } = QuizStore;
  const quizesIds = Object.keys(quizes);
  console.log(toJS(QuizStore));
  return (
    <div className="quizes-list">
      <h1>List of my Quizes </h1>
      {/* {quizesIds?.map(quizId => {
        return (
          <Link to={`/quiz/${quizId}`} key={quizId}>
            {quizes[quizId].title}
          </Link>
        );
      })} */}
      <table>
        <tr>
          <th>Quiz</th>
          <th>Results</th>
        </tr>
        {quizesIds.map(quizId => {
          return (
            <tr>
              <td>
                <Link to={`/quiz/${quizId}`} key={quizId}>
                  {quizes[quizId].title}
                </Link>
              </td>
              <td>
                <Link to={`/results/${quizId}`}>results</Link>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
});

export default QuizesList;
