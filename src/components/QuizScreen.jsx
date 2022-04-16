import React, { useState } from "react";
import QuestionList from "../data.js";
import QuizResult from "./QuizResult.jsx";
import Question from "./Question";

const QuizScreen = () => {
  // const [currQuestionIndex, setCurrQuestionIndex] = useState[0]
  // const [markedAns, setMarkedAns] = useState(QuestionList)
  // const isQuestionEnd = currQuestionIndex === QuestionList.length
  return (
    <div className="quiz-screen">
      <h2>QuizScreen</h2>
      {/* {
        isQuestionEnd ? (
          <QuizResult />
        ) : (
          <Question 
          question={QuestionList[currQuestionIndex]}/>
        )
      } */}
    </div>
  );
};

export default QuizScreen;
