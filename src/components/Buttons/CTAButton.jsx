import React from "react";

const CTAButton = ({ modifier, action, text }) => {
  return (
    <>
      <button className={`btn btn--${modifier}`} onClick={() => action()}>
        {text}
      </button>
    </>
  );
};

export default CTAButton;
