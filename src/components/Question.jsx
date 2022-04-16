import { React, useState, useRef, useEffect } from "react";
import { flushSync } from "react-dom";

const Question = ({
  questions,
  totalQuestions,
  currQuestionsIndex,
  setAnswer,
}) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const timer = useRef(null);
  const progressBar = useRef(null);

  const nextQuestion = () => {
    if (timer.current) {
      clearInterval(timer.current);
    }
    flushSync(() => {
      setAnswer(selectedOption);
    });
    setSelectedOption(null);
  };

  useEffect(() => {
    progressBar.current.classlist.remove("active");
    setTimeout(() => {
      progressBar.current.classlist.add("active");
    }, 0);
    timer.current = setTimeout(nextQuestion, 10 * 1000); // 10 secs
    return nextQuestion();
  }, [questions]);

  return (
    <div className="question">
      <div className="progress-bar" ref={progressBar}></div>
      <div className="question-count">
        <b>{currQuestionsIndex / totalQuestions}</b>
      </div>

      <div className="main">
        <div className="title">
          <span>Q:</span>
          <p>{questions.title}</p>
        </div>
        <div className="options">
          {questions.options.map((option, index) => {
            return (
              <div
                className={index === selectedOption ? "option active" : option}
                key={index}
                onClick={() => setSelectedOption(index)}
              >
                {option}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Question;
