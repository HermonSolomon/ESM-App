import React from "react";
import CTAButton from "../Buttons/CTAButton";

const QuizResult = ({ result, retry }) => {
  return (
    <div className="result-screen">
      <h2>Result: {result.percentage}%</h2>
      <p>
        Selected {result.correct} correct options out of {result.total}{" "}
        questions
      </p>
      <button className="btn-retry" onClick={retry}>
        Retry
      </button>
      {/* <CTAButton modifier="primary" text="Retry" onClick={retry} /> */}
    </div>
  );
};

export default QuizResult;
