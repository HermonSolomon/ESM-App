import React from "react";

const Options = ({ answer, index, setSelectedOption, nextQuestion }) => {
  return (
    <div
      className={"option-div"}
      key={index}
      // onClick={() => setSelectedOption(index)}
      onClick={nextQuestion}
    >
      {answer.answer}
    </div>
  );
};

export default Options;
