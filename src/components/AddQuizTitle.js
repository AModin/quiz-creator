import * as React from "react";
import TextInput from "./kit/TextInput";

const AddQuizTitle = ({ quizTitle, setQuizTitle, onQuizCreate }) => {
  return (
    <div>
      <TextInput
        onChange={e => setQuizTitle(e.currentTarget.value)}
        placeholder="Put title"
        value={quizTitle}
        className="add-title-quiz-input"
      />
    </div>
  );
};

export default AddQuizTitle;
