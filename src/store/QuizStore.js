import { observable, decorate, action } from "mobx";

//структура данных
/**
 * {
 *  "id": <string> quiz id,
 *  "title": <number> quiz title
 *  "questions":[
 *      {
 *          "title": <string>,
 *          "isSingle": <boolean> true, false
 *          "id": <number>
 *          "varaiants": [ <array>
 *              { id: 1, title: '1945'},
 *              { id: 2, title: '1944'},
 *              { id: 3, title: '1956'},
 *              { id: 4, title: '1937'}
 *            ]
 *      }
 *  ]
 * }
 */
//страницы приложения
/**
 * admin panel
 *   |add-quiz
 *   |results of testing
 *   |quizes-list
 *   |quiz/quizId
 */

class Quiz {
  quizes = {};

  aqqQuiz = quiz => {
    //TO DO: check that quiz structure is correct
    this.quizes[Date.now()] = quiz;
  };

  deleteQuiz = quizId => {
    //TO DO Create confirmation dialog
    delete this.quizes[quizId];
  };

  editQuiz = (quizId, editedQuiz) => {
    this.quizes[quizId] = editedQuiz;
  };
}

decorate(Quiz, {
  quizes: observable,
  addQuiz: action,
  editQuiz: action,
  deleteQuiz: action
});

const QuizStore = new Quiz();
export default QuizStore;
