import { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import PersonalInfo from "./PersonalInfo";
import uniqid from "uniqid";
import Experience from "./Experience";

const Form = (props) => {
  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={submitHandler}>
      <PersonalInfo onUpdate={props.onPersonalUpdate} />
      {/* <Experience onUpdate={props.onExperienceUpdate} /> */}
      <Experience
        onJobInfoUpdate={props.onJobUpdate}
        onNewJob={props.onAddJob}
        onDeleteJob={props.onRemoveJob}
        jobList={props.jobs}
      />
    </form>
  );
};

export default Form;
