import * as React from "react";
import IosClose from "react-ionicons/lib/IosClose";
import AddVariant from "../components/AddVariant";

const QuizQuestionList = ({ questionsList = [], setQuestionToTheList }) => {
  const addVariantToQuestion = (questionId, variant) => {
    let updatedQuestion = questionsList.filter(item => {
      return item.id === questionId;
    })[0];
    const updatedQuestionsList = questionsList.filter(item => {
      return item.id !== questionId;
    });
    updatedQuestion.variants.push(variant);
    const qustionListToAdd =
      updatedQuestionsList.length > 0 ? updatedQuestionsList : [];
    setQuestionToTheList([updatedQuestion, ...qustionListToAdd]);
  };

  const removeQuestionFromList = id => {
    const updatedList = questionsList.filter(item => {
      return item.id !== id;
    });
    setQuestionToTheList(updatedList);
  };

  const onAddVariantHandler = (title, questionId) => {
    const newVariant = {
      title: title,
      id: Date.now()
    };
    addVariantToQuestion(questionId, newVariant);
  };
  return (
    <div>
      {questionsList?.map(question => {
        return (
          <div key={question.id}>
            <div>
              {question.title}
              <IosClose onClick={() => removeQuestionFromList(question.id)} />
            </div>
            {question?.variants.map(item => {
              return <div key={item.id}>{item.title}</div>;
            })}
            <div>
              <AddVariant
                onAddVariantHandlerCallback={onAddVariantHandler}
                questionId={question.id}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default QuizQuestionList;
