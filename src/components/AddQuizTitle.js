import * as React from "react";

const AddQuizTitle = ({ quizTitle, setQuizTitle, onQuizCreate }) => {
  return (
    <div>
      <input
        onChange={e => setQuizTitle(e.currentTarget.value)}
        placeholder="Put title"
        value={quizTitle}
        className="add-title-quiz-input"
      />
    </div>
  );
};

export default AddQuizTitle;
