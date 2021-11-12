import { useState } from "react";
import PersonalInfo from "./PersonalInfo";

const Form = (props) => {
  const [personal, setPersonal] = useState();

  const addPersonalInfoHandler = (personalInfo) => {
    setPersonal((prevState) => {
      return { ...prevState, personalInfo };
    });
    // console.log("FORM", personal);
    props.onAddDetails(personal);
  };

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={submitHandler}>
      <PersonalInfo onAddPersonalInfo={addPersonalInfoHandler} />
    </form>
  );
};

export default Form;
