import { useState } from "react";
import uniqid from "uniqid";

const PersonalInfo = (props) => {
  const [personalData, setPersonalData] = useState({
    first: "",
    last: "",
    location: "",
    email: "",
    github: "",
    id: uniqid(),
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;

    setPersonalData((prevState) => {
      return { ...prevState, [name]: value };
    });
    props.onAddPersonalInfo(personalData);
  };

  return (
    <div>
      <h2>Personal Information</h2>
      <input
        type="text"
        id="first"
        name="first"
        value={personalData.first}
        placeholder="First Name"
        onChange={changeHandler}
      />
      <input
        type="text"
        id="last"
        name="last"
        placeholder="Last Name"
        onChange={changeHandler}
      />
      <input
        type="text"
        id="location"
        name="location"
        placeholder="City, State"
        onChange={changeHandler}
      />
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Email"
        onChange={changeHandler}
      />
      <input
        type="text"
        id="github"
        name="github"
        placeholder="GitHub"
        onChange={changeHandler}
      />
    </div>
  );
};

export default PersonalInfo;
