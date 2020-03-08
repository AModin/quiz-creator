import React from "react";
import styled from "styled-components";
import StyledButton from "./kit/StyledButton";

const StyledQuizHeader = styled.div`
  width: 100%;
  max-width: 425px;
  padding: 20px 0px;
  background-color: #efedf0;
  border-radius: 15px;
  border-bottom: 1px solid #cecece;
`

const StyledTitle = styled.span`
  font-size: 26px;
`;
const QuizDescription = styled.p`
  font-size: 20px;
  font-style: italic;
`

const QuizHeader = props => {
  return (
    <StyledQuizHeader>
      <StyledTitle>{props.title}</StyledTitle><br/>
      <StyledButton color="#edaf02" height="30px" width="120px" dark>Edit Quiz</StyledButton>
      <QuizDescription>{props.description}
      <br/>date of creation: {props.date}
      </QuizDescription>
    </StyledQuizHeader>
  );
};

export default QuizHeader;
