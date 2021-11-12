import { useState } from "react";
import uniqid from "uniqid";
import Job from "./Job";

const Experiences = (props) => {
  const [numJobs, setNumJobs] = useState(1);

  const clickHandler = () => {
    setNumJobs((prevState) => prevState + 1);
    console.log(numJobs);
  };

  return (
    <div>
      <h2>Experience</h2>
      {[...Array(numJobs)].map((_, i) => (
        <Job key={i} id={i} />
      ))}
      <button type="button" onClick={clickHandler}>
        Add
      </button>
    </div>
  );
};

export default Experiences;
