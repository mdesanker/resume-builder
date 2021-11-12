import { useState } from "react";
import uniqid from "uniqid";

const Job = (props) => {
  const [experienceData, setExperienceData] = useState({
    position: "",
    company: "",
    location: "",
    from: "",
    to: "",
    id: uniqid(),
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;

    setExperienceData((prevState) => {
      return { ...prevState, [name]: value };
    });
    // props.onAddExperience(experienceData);
    console.log(experienceData);
  };

  const clickHandler = () => {
    props.onRemoveJob(props.id);
  };

  return (
    <div>
      <input
        type="text"
        id="position"
        name="position"
        value={experienceData.position}
        placeholder="Position"
        onChange={changeHandler}
      />
      <input
        type="text"
        id="company"
        name="company"
        value={experienceData.company}
        placeholder="Company"
        onChange={changeHandler}
      />
      <input
        type="text"
        id="location"
        name="location"
        value={experienceData.location}
        placeholder="Location"
        onChange={changeHandler}
      />
      <input
        type="text"
        id="start"
        name="start"
        value={experienceData.start}
        placeholder="Start Date"
        onChange={changeHandler}
      />
      <input
        type="text"
        id="end"
        name="end"
        value={experienceData.end}
        placeholder="End Date"
        onChange={changeHandler}
      />
      <button type="button" onClick={clickHandler}>
        Remove
      </button>
    </div>
  );
};

export default Job;
