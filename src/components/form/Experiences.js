import { useState } from "react";
import uniqid from "uniqid";
import Job from "./Job";

const Experiences = (props) => {
  const [jobList, setJobList] = useState([{ jobDetails: "", id: uniqid() }]);

  const addJobClickHandler = () => {
    setJobList((prevState) => {
      return [...prevState, { jobDetails: "", id: uniqid() }];
    });
    props.onAddExperience(jobList);
  };

  const removeJobHandler = (jobId) => {
    setJobList((prevState) => {
      return prevState.filter((job) => job.id !== jobId);
    });
    props.onAddExperience(jobList);
  };

  const updateJobHandler = (jobData, jobId) => {
    setJobList((prevState) => {
      return prevState.map((jobItem) =>
        jobItem.id === jobId ? { jobDetails: jobData, id: jobId } : jobItem
      );
    });
    props.onAddExperience(jobList);
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
      <button type="button" onClick={addJobClickHandler}>
        Add
      </button>
    </div>
  );
};

export default Experiences;
