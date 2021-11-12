import { useState } from "react";
import Education from "./Education";
import Experiences from "./Experiences";
import PersonalInfo from "./PersonalInfo";

const Form = (props) => {
  const [personal, setPersonal] = useState();

  const addPersonalInfoHandler = (personalInfo) => {
    setPersonal((prevState) => {
      return { ...prevState, personalInfo };
    });
    props.onAddDetails(personal);
  };

  const addExperienceHandler = (experienceInfo) => {
    setPersonal((prevState) => {
      return { ...prevState, experienceInfo };
    });
    props.onAddDetails(personal);
  };

  const addEducationHandler = (educationInfo) => {
    setPersonal((prevState) => {
      return { ...prevState, educationInfo };
    });
    props.onAddDetails(personal);
  };

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={submitHandler}>
      <PersonalInfo onAddPersonalInfo={addPersonalInfoHandler} />
      <Experiences onAddExperience={addExperienceHandler} />
      <Education onAddEducation={addEducationHandler} />
    </form>
  );
};

export default Form;
