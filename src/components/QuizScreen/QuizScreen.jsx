import { React, useState, useRef, useEffect } from "react";
import QuestionList from "../../data.json";
import QuizResult from "../QuizResult/QuizResult";
import Question from "../Question/Question.jsx";
import Feedback from "../Feedback/Feedback";

const QuizScreen = ({ retry }) => {
  const [currQuestionIndex, setCurrQuestionIndex] = useState(0);
  const [markedAns, setMarkedAns] = useState(new Array(QuestionList.length));
  const isQuestionEnd = currQuestionIndex === QuestionList.length;
  const [isFeedBackVisible, setIsFeedBackVisible] = useState(false);

  // to be called on the feedback button
  function nextQuestion() {
    // flushSync(() => {
    setCurrQuestionIndex(currQuestionIndex + 1);
    // });
  }

  const calculateResult = () => {
    let correct = 0;

    QuestionList.forEach((question, currQuestionIndex) => {
      if (question.correct === markedAns[currQuestionIndex]) {
        correct++;
      }
      console.log(question.correct);
    });

    return {
      total: QuestionList.length,
      correct: correct,
      percentage: Math.trunc((correct / QuestionList.length) * 100),
    };
  };

  const handleSubmitAnswer = (ansNum) => {
    // setIsFeedBackVisible(true);
    // temporary arr for marked ans
    const arr1 = markedAns;
    arr1[currQuestionIndex] = ansNum;
    setMarkedAns(arr1);

    if (ansNum < 0) {
      // out of time text goes here
    } else if (ansNum == currQuestionIndex) {
      // correct feedback text goes here
    } else {
      // incorrect feedback goes here
    }
  };

  return (
    <div className="quiz-screen page">
      {isQuestionEnd ? (
        <QuizResult result={calculateResult()} retry={retry} />
      ) : (
        <Question
          question={QuestionList[currQuestionIndex]}
          answers={QuestionList}
          currQuestion={currQuestionIndex + 1}
          handleSubmitAnswer={handleSubmitAnswer}
        />
      )}
      {/*Popup*/}
      {isFeedBackVisible && <Feedback>{/* feedback modal */}</Feedback>}
    </div>
  );
};

export default QuizScreen;
