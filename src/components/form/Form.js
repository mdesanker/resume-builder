import { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import Education from "./Education";
import Experiences from "./Experiences";
import PersonalInfo from "./PersonalInfo";
import uniqid from "uniqid";

const Form = (props) => {
  const [personal, setPersonal] = useState();

  // const [personalData, setPersonalData] = useState({
  //   first: "",
  //   last: "",
  //   location: "",
  //   email: "",
  //   github: "",
  //   id: uniqid(),
  // });

  const addPersonalInfoHandler = (personalInfo) => {
    setPersonal((prevState) => {
      return { ...prevState, personalInfo };
    });
    console.log("FORM", personal);
    props.onAddDetails(personal);
  };

  // useEffect(() => {
  //   console.log("Effect", personal);
  // }, [personal]);

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

  // const changeHandler = (e) => {
  //   const { name, value } = e.target;

  //   setPersonalData((prevState) => {
  //     return { ...prevState, [name]: value };
  //   });
  //   console.log("Outside", personalData);
  //   // props.onAddPersonalInfo(personalData);
  // };

  return (
    <form onSubmit={submitHandler}>
      <PersonalInfo
        // data={personalData}
        onUpdate={props.onPersonalUpdate}
        onAddPersonalInfo={addPersonalInfoHandler}
      />
      <Experiences onAddExperience={addExperienceHandler} />
      <Education onAddEducation={addEducationHandler} />
    </form>
  );
};

export default Form;
