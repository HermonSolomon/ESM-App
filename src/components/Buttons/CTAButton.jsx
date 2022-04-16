import React from "react";

const CTAButton = ({ modifier, start, text }) => {
  return (
    <>
      <button className={`btn btn--${modifier}`} onClick={start}>
        {text}
      </button>
    </>
  );
};

export default CTAButton;
