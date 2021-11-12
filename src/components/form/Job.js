import { useState } from "react";

const Job = (props) => {
  const [jobData, setJobData] = useState({
    position: "",
    company: "",
    location: "",
    from: "",
    to: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;

    setJobData((prevState) => {
      return { ...prevState, [name]: value };
    });
    props.onUpdateJob(jobData, props.id);
  };

  const removeJobHandler = () => {
    props.onRemoveJob(props.id);
  };

  return (
    <div>
      <input
        type="text"
        id="position"
        name="position"
        value={jobData.position}
        placeholder="Position"
        onChange={changeHandler}
      />
      <input
        type="text"
        id="company"
        name="company"
        value={jobData.company}
        placeholder="Company"
        onChange={changeHandler}
      />
      <input
        type="text"
        id="location"
        name="location"
        value={jobData.location}
        placeholder="Location"
        onChange={changeHandler}
      />
      <input
        type="text"
        id="start"
        name="start"
        value={jobData.start}
        placeholder="Start Date"
        onChange={changeHandler}
      />
      <input
        type="text"
        id="end"
        name="end"
        value={jobData.end}
        placeholder="End Date"
        onChange={changeHandler}
      />
      <button type="button" onClick={removeJobHandler}>
        Remove
      </button>
    </div>
  );
};

export default Job;
