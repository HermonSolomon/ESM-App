import { React, useState, useRef, useEffect } from "react";
import Options from "../Options/Options.jsx";

const Question = ({ question, currQuestion, answers, handleSubmitAnswer }) => {
  const timer = useRef(null);
  const progressBar = useRef(null);

  useEffect(() => {
    progressBar.current.classList.remove("active");
    setTimeout(() => {
      progressBar.current.classList.add("active");
    }, 0);

    // if timer reaches 0 without any submmistion handleSubmit should display incorrect/timeout feedback
    if (timer.current) {
      clearTimeout(timer.current);
    }
    timer.current = setTimeout(() => {
      handleSubmitAnswer(-1);
    }, 10 * 1000); // 10 secs
  }, [question]);

  return (
    <>
      <div className="progress-bar" ref={progressBar}></div>
      <div className="question">
        <div className="question__count">
          <b>{currQuestion} </b>
        </div>
        <div className="main">
          <div className="title">
            <p>{question.question}</p>
          </div>
          <div className="options">
            {answers.map((answer, index) => {
              // console.log(answer.id);
              return (
                <Options
                  answer={answer}
                  key={index}
                  handleSubmitAnswer={handleSubmitAnswer}
                  index={index}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Question;
