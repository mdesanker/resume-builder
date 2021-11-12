import { useState } from "react";
import uniqid from "uniqid";
import Job from "./Job";

const Experiences = (props) => {
  // const [numJobs, setNumJobs] = useState(1);

  // const clickHandler = () => {
  //   setNumJobs((prevState) => prevState + 1);
  //   console.log(numJobs);
  // };

  const [jobList, setJobList] = useState([
    { job: "Job 1", id: uniqid() },
    { job: "Job 2", id: uniqid() },
  ]);

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

  return (
    <div>
      <h2>Experience</h2>
      {jobList.map((job) => (
        <Job id={job.id} key={job.id} onRemoveJob={removeJobHandler} />
      ))}
      {/* {[...Array(numJobs)].map((_, i) => (
        <Job key={i} id={i} />
      ))} */}
      <button type="button" onClick={clickHandler}>
        Add
      </button>
    </div>
  );
};

export default Experiences;
