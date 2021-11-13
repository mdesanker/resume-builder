import { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import Form from "./components/form/Form";
import Resume from "./components/resume/Resume";
import uniqid from "uniqid";

function App() {
  const [personalData, setPersonalData] = useState({
    first: "",
    last: "",
    location: "",
    email: "",
    github: "",
  });

  const changePersonalHandler = (e) => {
    const { name, value } = e.target;
    setPersonalData((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  useEffect(() => {
    console.log(personalData);
  }, [personalData]);

  const [experienceData, setExperienceData] = useState({
    position: "",
    company: "",
    location: "",
    start: "",
    end: "",
  });

  const changeExperienceHandler = (e) => {
    const { name, value } = e.target;
    setExperienceData((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  useEffect(() => {
    console.log(experienceData);
  }, [experienceData]);

  return (
    <div>
      <Form
        onPersonalUpdate={changePersonalHandler}
        onExperienceUpdate={changeExperienceHandler}
      />
      <br />
      {/* <Resume info={resumeDetails} /> */}
    </div>
  );
}

export default App;
