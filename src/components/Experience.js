import { useState } from "react";
import uniqid from "uniqid";

const Experience = (props) => {
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
    // console.log(perosnalData);
    // props.onAddPersonalInfo(personalData);
  };

  return (
    <div>
      <h2>Experience</h2>
      <input
        type="text"
        id="position"
        name="position"
        value={experienceData.first}
        placeholder="First Name"
        onChange={changeHandler}
      />
    </div>
  );
};

export default Experience;
