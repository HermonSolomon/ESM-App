import React from "react";

const Options = ({ answer, index, nextQuestion }) => {
  console.log(answer.index);
  return (
    <li
      className={`option-div option-div--bg${answer.id}`}
      key={answer.id}
      onClick={nextQuestion}
    >
      {answer.answer}
    </li>
  );
};

export default Options;
