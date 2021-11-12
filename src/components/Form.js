import { useState } from "react";
import Experiences from "./Experiences";
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

  const addExperienceHandler = (experienceInfo) => {
    setPersonal((prevState) => {
      return { ...prevState, experienceInfo };
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
      <Experiences onAddExperience={addExperienceHandler} />
    </form>
  );
};

export default Form;
