import React, { useState } from "react";
import QuestionList from "../../data.json";
import QuizResult from "../QuizResult/QuizResult";
import Question from "../Question/Question.jsx";

const QuizScreen = ({ retry }) => {
  const [currQuestionIndex, setCurrQuestionIndex] = useState(0);
  const [markedAns, setMarkedAns] = useState(new Array(QuestionList.length));
  const isQuestionEnd = currQuestionIndex === QuestionList.length;

  const calculateResult = () => {
    let correctNum = 0;

    QuestionList.forEach((question, index) => {
      if (question.correct === question.answer) {
        correctNum++;
      }
      console.log(question.correct);
    });

    return {
      total: QuestionList.length,
      correct: correctNum,
      percentage: Math.trunc(correctNum / QuestionList.length) * 100,
    };
  };

  return (
    <div className="quiz-screen page">
      {isQuestionEnd ? (
        <QuizResult result={calculateResult()} retry={retry} />
      ) : (
        <Question
          question={QuestionList[currQuestionIndex]}
          answers={QuestionList}
          totalQuestions={QuestionList.length}
          currQuestion={currQuestionIndex + 1}
          setAnswer={(index) => {
            setMarkedAns((arr) => {
              let newArr = [...arr];
              newArr[currQuestionIndex - 1] = index;
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
