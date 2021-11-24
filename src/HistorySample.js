import React from "react";
import { useNavigate , usePrompt } from "react-router-dom";

const HistorySample = () => {
  //const history = useHistory();
  const navigate = useNavigate();
  const handleGoBack = () => {
    //history.goback();
    navigate(-1);
  };

  const handleGoHome = () => {
    navigate("/");
  };





  return (
    <div>
      <button onClick={handleGoBack}>뒤로</button>
      <button onClick={handleGoHome}>홈으로</button>
    </div>
  );
};

export default HistorySample;
