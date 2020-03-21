import React from "react";
import "./styles.css";
import { Link, Route, Switch } from "react-router-dom";
import QuizesList from "./pages/QuizesList";
import QuizPage from "./pages/QuizPage";
import AddQuiz from "./pages/AddQuiz";
import KitPage from "./pages/KitPage";
import EndOfTest from "./pages/EndOfTest";
import ResultsPage from "./pages/ResultsPage";

export default function App() {
  return (
    <div className="App">
      <h1>Teacher Panel</h1>
      <ul>
        <Link className="nav-link" to="/quizes-list">List of my Quizes</Link>
        <Link className="nav-link" to="/add-quiz">Add new Quiz</Link>
        <Link className="nav-link" to="/quiz/12345">Some Quiz</Link>
        <Link className="nav-link" to="/kit-page">Kit Page</Link>
      </ul>

      <Switch>
        <Route exact path="/add-quiz" component={AddQuiz} />
        <Route exact path="/quizes-list">
          <QuizesList />
        </Route>
        <Route exact path="/quiz/:quizId" component={QuizPage} />
        <Route exact path="/results/:quizId" component={ResultsPage} />
        <Route exact path="/end-of-test" component={EndOfTest} />
        <Route exact path="/kit-page">
          <KitPage />
        </Route>
      </Switch>
    </div>
  );
}
