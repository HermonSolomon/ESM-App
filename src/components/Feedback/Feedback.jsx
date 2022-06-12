import React from "react";
import CTAButton from "../Buttons/CTAButton";
import InCorrectTitle from "../../assets/imgs/ThatisNotRight-title.svg";
import CorrectTitle from "../../assets/imgs/YesYouGotit-title.svg";
import TimesUp from "../../assets/imgs/TimeIsUp-Title.svg";

const Feedback = ({ next, isCorrect }) => {
  return (
    <div className="feedback popup">
      <div className="feedback__black-fill"></div>
      <div className="feedback__content-box">
        {isCorrect == "correct" ? (
          <img src={CorrectTitle} className="img-responsive" alt="" />
        ) : isCorrect == "incorrect" ? (
          <img src={InCorrectTitle} className="img-responsive" alt="" />
        ) : (
          <img src={TimesUp} className="img-responsive" alt="" />
        )}

        <div className="feedback__text">
          Ready for the next question?
          <CTAButton modifier="primary_center" text="next" action={next} />
        </div>
      </div>
    </div>
  );
};

export default Feedback;
