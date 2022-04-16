import React, { useState } from "react";
import QuestionList from "../data.js";
import QuizResult from "./QuizResult";
import Question from "./Question.jsx";

const QuizScreen = () => {
  const [currQuestionIndex, setCurrQuestionIndex] = useState(0);
  const [markedAns, setMarkedAns] = useState(QuestionList);
  const isQuestionEnd = currQuestionIndex === QuestionList.length;
  return (
    <div className="quiz-screen">
      {/* <h2>QuizScreen</h2> */}
      {isQuestionEnd ? (
        <QuizResult />
      ) : (
        <Question
          questions={QuestionList[currQuestionIndex]}
          totalQuestions={QuestionList.length}
          currQuestionIndex={currQuestionIndex + 1}
          setAnswer={(index) => {
            setMarkedAns((arr) => {
              let newArr = [...arr];
              newArr[currQuestionIndex] = index;
              return newArr;
            });
            setCurrQuestionIndex(currQuestionIndex + 1);
          }}
        />
      )}
    </div>
  );
};

export default QuizScreen;
