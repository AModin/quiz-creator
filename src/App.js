import React from "react";
import "./styles.css";
import { Link, Route, Switch } from "react-router-dom";
import QuizesList from "./pages/QuizesList";
import QuizPage from "./pages/QuizPage";
import AddQuiz from "./pages/AddQuiz";
import KitPage from "./pages/KitPage";

export default function App() {
  return (
    <div className="App">
      <h1>Teacher Panel</h1>
      <ul>
        <Link to="/quizes-list">List of my Quizes</Link>
        <Link to="/add-quiz">Add new Quiz</Link>
        <Link to="/quiz/12345">Some Quiz</Link>
        <Link to="/kit-page">Kit Page</Link>
      </ul>

      <Switch>
        <Route exact path="/add-quiz" component={AddQuiz} />
        <Route exact path="/quizes-list">
          <QuizesList />
        </Route>
        <Route path="/quiz/:quizId">
          <QuizPage />
        </Route>
        <Route exact path="/kit-page">
          <KitPage />
        </Route>
      </Switch>
    </div>
  );
}
