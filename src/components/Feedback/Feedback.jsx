import React from "react";
import CTAButton from "../Buttons/CTAButton";

const Feedback = ({ next, isCorrect }) => {
  return (
    <div className="feedback popup">
      <div className="feedback__black-fill"></div>
      <div className="feedback__content-box">
        {isCorrect == "correct" ? (
          <div>you answered correct</div>
        ) : isCorrect == "incorrect" ? (
          <div>You're incorrect</div>
        ) : (
          <div>You're out of time</div>
        )}
        <img
          src="imgs/ThatisNotRight-title.svg"
          className="img-responsive"
          alt=""
        />
        <div className="feedback__text">
          Ready for the next question
          <CTAButton modifier="primary_center" text="next" action={next} />
        </div>
      </div>
    </div>
  );
};

export default Feedback;
