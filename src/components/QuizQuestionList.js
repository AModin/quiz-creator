import * as React from "react";
import IosClose from "react-ionicons/lib/IosClose";
import AddVariant from "../components/AddVariant";
import IosRadioButtonOff from "react-ionicons/lib/IosRadioButtonOff";
import { observer } from "mobx-react";
import styled from "styled-components";

const QuizQuestionList = observer(({ questionsList }) => {
  const addVariantToQuestion = (questionId, variant) => {
    questionsList.forEach(item => {
      if (item.id === questionId) {
        item.variants.push(variant);
      }
    });
  };

  const removeQuestionFromList = id => {
    questionsList = questionsList.filter(item => {
      return item.id !== id;
    });
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
            <Title>
              <TitleValue>
                {question.title}{" "}
                <RemoveButton onClick={() => removeQuestionFromList(question.id)}>
                  <IosClose color="red"/>
                </RemoveButton>
              </TitleValue>
            </Title>
            {question?.variants.map(item => {
              return (
                <VariantRow key={item.id}>
                  <IosRadioButtonOff />
                  {item.title}
                </VariantRow>
              );
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
});

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center
`

const TitleValue = styled.h3`
  display: flex;
  align-items: center;
  justify-content: center
`

const RemoveButton = styled.button`
  cursor: pointer;
  border: none;
  background: transparent;
`

const VariantRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
`

export default QuizQuestionList;
