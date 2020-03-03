import React, { useState } from "react";
import StyledRadioButton from "./kit/StyledRadioButton";
import StyledCheckbox from "./kit/StyledCheckbox";

const QuizBody = ({ questions }) => {
  const [checked, changeChecked] = useState(false);
  var body = null;
  if (questions) {
    body = questions.map(quest => (
      <div key={quest.id}>
        <h3>{quest.title}</h3>
        {quest.isSingle ? (
          <ol>
            {quest.variants.map(v => (
              <StyledRadioButton key={v.id} name={quest.title}>
                {v.title}
              </StyledRadioButton>
            ))}
          </ol>
        ) : (
          <ol>
            {quest.variants.map(v => (
              <StyledCheckbox
                key={v.id}
                name={quest.title}
                handleChange={()=>changeChecked(!checked)}
              >
                {v.title}
              </StyledCheckbox>
            ))}
          </ol>
        )}
      </div>
    ));
  }
  return <div>{body}</div>;
};

export default QuizBody;
