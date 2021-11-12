import { useState } from "react";
import Form from "./components/form/Form";
import Resume from "./components/resume/Resume";

function App() {
  const [resumeDetails, setResumeDetails] = useState({
    personalInfo: "",
    experienceInfo: "",
    educationInfo: "",
  });

  const addResumeDetailsHandler = (info) => {
    setResumeDetails((prevState) => {
      return { ...prevState, ...info };
    });
    console.log("APP", resumeDetails);
  };

  return (
    <div>
      <Form onAddDetails={addResumeDetailsHandler} />
      <br />
      <Resume info={resumeDetails} />
    </div>
  );
}

export default App;
