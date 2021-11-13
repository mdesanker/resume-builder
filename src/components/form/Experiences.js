import { useState } from "react";
import uniqid from "uniqid";
import Job from "./Job";

const Experiences = (props) => {
  // const removeJobHandler = (jobId) => {
  //   setJobList((prevState) => {
  //     return prevState.filter((job) => job.id !== jobId);
  //   });
  //   props.onAddExperience(jobList);
  // };

  // const updateJobHandler = (jobData, jobId) => {
  //   setJobList((prevState) => {
  //     return prevState.map((jobItem) =>
  //       jobItem.id === jobId ? { jobDetails: jobData, id: jobId } : jobItem
  //     );
  //   });
  //   props.onAddExperience(jobList);
  // };
  // console.log("Jobs", props.jobs);

  const jobItems = props.jobList.map((job) => (
    <li>
      {
        <Job
          id={job.id}
          key={job.id}
          // onUpdateJob={updateJobHandler}
          // onRemoveJob={removeJobHandler}
        />
      }
    </li>
  ));

  return (
    <div>
      <h2>Experience</h2>
      <ul>{jobItems}</ul>
      {/* {props.jobList.map((job) => (
        <p>job.jobDetails.position</p>
        <Job
          id={job.id}
          key={job.id}
          onUpdateJob={updateJobHandler}
          onRemoveJob={removeJobHandler}
        />
      ))} */}
      <button type="button" onClick={props.onAddNewJob}>
        Add
      </button>
    </div>
  );
};

export default Experiences;
