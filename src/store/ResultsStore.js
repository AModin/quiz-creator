import { observable, decorate, action } from "mobx";


//структура данных
/**
 * {
 *  "quizId": <string> quiz id,
 *  "id": <string>,
 *  "student": <string> name
 *  "answers":[
 *      {
 *          "title": <string>,
 *          "value": [ <array>
 *            ]
 *      }
 *  ]
 * }
 */
class StudentAnswers {
  answers = {};
  answersForEachQuiz = {}

  addAnswers = answer => {
    this.answers[Date.now()] = answer;
    if(this.answersForEachQuiz[answer.quizId]){
      this.answersForEachQuiz[answer.quizId] +=1
    } else{
      this.answersForEachQuiz[answer.quizId] = 1
    }
  };

  deleteAnswer = id => {
    //TO DO Create 
    this.answersForEachQuiz[this.answer.quizId] -= 1
    delete this.answers[id];
  };

  editAnswers = (answersId, editedAnswers) => {
    this.answers[answersId] = editedAnswers;
  };
}

decorate(StudentAnswers, {
  answers: observable,
  answersForEachQuiz: observable,
  addAnswers: action,
  editAnswers: action,
  deleteAnswer: action
});

const ResultsStore = new StudentAnswers();
export default ResultsStore;
