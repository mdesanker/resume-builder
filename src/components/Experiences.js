import { useState } from "react";
import uniqid from "uniqid";
import Job from "./Job";

const Experiences = (props) => {
  const [jobList, setJobList] = useState([
    { job: "Job 1", id: uniqid() },
    { job: "Job 2", id: uniqid() },
  ]);

  // TODO: Pass job data back to experience component

  const clickHandler = () => {
    setJobList((prevState) => {
      // TODO: organize job list
      return [{ job: "Job", id: uniqid() }, ...prevState];
    });
    console.log(jobList);
  };

  const removeJobHandler = (jobId) => {
    setJobList((prevState) => {
      return prevState.filter((job) => job.id !== jobId);
    });
    console.log(jobList);
  };

  const updateJobHandler = (jobData, jobId) => {
    setJobList((prevState) => {
      return prevState.map((jobItem) => {
        if (jobItem.id === jobId) {
          return { job: jobData, id: jobId };
        } else {
          return jobItem;
        }
      });
    });
    console.log(jobList);
  };

  return (
    <div>
      <h2>Experience</h2>
      {jobList.map((job) => (
        <Job
          id={job.id}
          key={job.id}
          onUpdateJob={updateJobHandler}
          onRemoveJob={removeJobHandler}
        />
      ))}
      <button type="button" onClick={clickHandler}>
        Add
      </button>
    </div>
  );
};

export default Experiences;
