import { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import Form from "./components/form/Form";
import Resume from "./components/resume/Resume";
import uniqid from "uniqid";

function App() {
  const [resumeDetails, setResumeDetails] = useState({
    personalInfo: "",
    experienceInfo: "",
    educationInfo: "",
  });

  const [personalData, setPersonalData] = useState({
    first: "",
    last: "",
    location: "",
    email: "",
    github: "",
    id: uniqid(),
  });

  const addResumeDetailsHandler = (info) => {
    setResumeDetails((prevState) => {
      return { ...prevState, ...info };
    });
    // console.log("APP", resumeDetails);
  };

  const changePersonalHandler = (e) => {
    const { name, value } = e.target;

    setPersonalData((prevState) => {
      return { ...prevState, [name]: value };
    });
    // console.log("APP", personalData);
    // props.onAddPersonalInfo(personalData);
  };

  useEffect(() => {
    console.log(personalData);
  }, [personalData]);

  return (
    <div>
      <Form
        onPersonalUpdate={changePersonalHandler}
        onAddDetails={addResumeDetailsHandler}
      />
      <br />
      <Resume info={resumeDetails} />
    </div>
  );
}

export default App;
