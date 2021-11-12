import { useState } from "react";

const PersonalInfo = () => {
  const [perosnalData, setPersonalData] = useState({
    first: "",
    last: "",
    location: "",
    email: "",
    github: "",
  });

  const changeHandler = (e) => {
    console.log("name", e.target.name);
    console.log("value", e.target.value);
    const { name, value } = e.target;

    setPersonalData((prevState) => {
      return { ...prevState, [name]: value };
    });
    console.log(perosnalData);
  };

  return (
    <div>
      <input
        type="text"
        id="first"
        name="first"
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
