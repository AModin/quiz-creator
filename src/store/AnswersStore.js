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

  addAnswers = answer => {
    this.answers[Date.now()] = answer;
  };

  deleteAnswer = id => {
    //TO DO Create 
    
    delete this.answers[id];
  };

  editAnswers = (answersId, editedAnswers) => {
    this.answers[answersId] = editedAnswers;
  };
}

decorate(StudentAnswers, {
  answers: observable,
  addAnswers: action,
  editAnswers: action,
  deleteAnswer: action
});

const AnswersStore = new StudentAnswers();
export default AnswersStore;
