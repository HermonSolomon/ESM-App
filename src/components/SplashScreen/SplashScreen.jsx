import React from "react";
import MainContainer from "../../layouts/ContentContainer";
// import Logo from '../../assets/imgs/primary-logo'
import CTAButton from "../Buttons/CTAButton";

const SplashScreen = ({ start }) => {
  return (
    <div className="page splash-screen">
      <CTAButton modifier="primary" text="Begin" start={start} />
    </div>
  );
};

export default SplashScreen;
