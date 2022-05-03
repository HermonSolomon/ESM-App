import React from "react";

const Options = ({ answer, index, handleSubmitAnswer }) => {
  console.log(answer.index);
  return (
    <li
      role="button"
      className={`option-div option-div--bg${answer.id}`}
      key={answer.id}
      onClick={() => {
        handleSubmitAnswer(index);
      }} // should submit answer then feedback to appear
    >
      {answer.answer}
    </li>
  );
};

export default Options;
