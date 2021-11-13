import { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import Education from "./Education";
import Experiences from "./Experiences";
import PersonalInfo from "./PersonalInfo";
import uniqid from "uniqid";

const Form = (props) => {
  const [personal, setPersonal] = useState();

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
      <PersonalInfo onUpdate={props.onPersonalUpdate} />
      <Experiences
        onAddExperience={addExperienceHandler}
        onAddNewJob={props.onAddJob}
        jobList={props.jobs}
      />
      <Education onAddEducation={addEducationHandler} />
    </form>
  );
};

export default Form;
