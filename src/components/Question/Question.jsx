import { React, useState, useRef, useEffect } from "react";
import { flushSync } from "react-dom";
import Options from "../Options/Options.jsx";

const Question = ({
  question,
  totalQuestions,
  currQuestion,
  answers,
  setAnswer,
}) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const timer = useRef(null);
  const progressBar = useRef(null);

  function nextQuestion() {
    if (timer.current) {
      clearInterval(timer.current);
    }
    flushSync(() => {
      setAnswer(selectedOption);
    });
    setSelectedOption(null);
  }

  useEffect(() => {
    // progressBar.current.classlist.remove("active");
    // setTimeout(() => {
    //   progressBar.current.classlist.add("active");
    // }, 0);
    timer.current = setTimeout(nextQuestion, 10 * 1000); // 10 secs
    return nextQuestion;
  }, [question]);

  return (
    <div className="question">
      <div className="progress-bar" ref={progressBar}></div>
      <div className="question-count">
        <b>{currQuestion} </b>
      </div>
      <div className="main">
        <div className="title">
          <p>{question.question}</p>
        </div>
        <div className="options">
          {answers.map((answer, index) => (
            <Options
              answer={answer}
              key={index}
              setSelectedOption={setSelectedOption}
              nextQuestion={nextQuestion}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Question;
