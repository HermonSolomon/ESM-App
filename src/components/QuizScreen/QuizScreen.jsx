import { React, useState, useRef, useEffect } from "react";
import QuestionList from "../../data.json";
import QuizResult from "../QuizResult/QuizResult";
import Question from "../Question/Question.jsx";
import Feedback from "../Feedback/Feedback";
import { flushSync } from "react-dom";

const QuizScreen = ({ retry }) => {
  const [currQuestionIndex, setCurrQuestionIndex] = useState(0);
  // Saved answers
  const [markedAns, setMarkedAns] = useState(new Array(QuestionList.length));
  const isQuestionEnd = currQuestionIndex === QuestionList.length;
  const [isFeedBackVisible, setIsFeedBackVisible] = useState(false);
  const [isCorrect, setisCorrect] = useState(null);

  // to be called on the feedback button
  const nextQuestion = () => {
    console.log(isFeedBackVisible);
    flushSync(() => {
      setCurrQuestionIndex(currQuestionIndex + 1);
    });
    setIsFeedBackVisible(false);
  };

  const calculateResult = () => {
    let correct = 0;

    QuestionList.forEach((question, index) => {
      if (index === markedAns[index]) {
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
    console.log(ansNum);
    setIsFeedBackVisible(true);
    // temporary arr for marked ans
    const arr1 = markedAns;
    arr1[currQuestionIndex] = ansNum;
    setMarkedAns(arr1);

    if (ansNum < 0) {
      // out of time text goes here
      setisCorrect("time up");
    } else if (ansNum == currQuestionIndex) {
      // correct feedback text goes here
      setisCorrect("correct");
    } else {
      // incorrect feedback goes here
      setisCorrect("incorrect");
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
      {isFeedBackVisible && (
        <Feedback isCorrect={isCorrect} next={() => nextQuestion()} />
      )}
    </div>
  );
};

export default QuizScreen;
