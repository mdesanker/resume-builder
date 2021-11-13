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

  const [jobData, setJobData] = useState({
    position: "",
    company: "",
    location: "",
    from: "",
    to: "",
  });

  const [jobList, setJobList] = useState([
    {
      jobDetails: {},
      id: uniqid(),
    },
  ]);

  const addJobClickHandler = () => {
    setJobList((prevState) => {
      return [...prevState, { jobDetails: "", id: uniqid() }];
    });
  };

  const changePersonalHandler = (e) => {
    const { name, value } = e.target;
    setPersonalData((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  useEffect(() => {
    console.log(personalData);
  }, [personalData]);

  const changeJobHandler = (e) => {
    const { name, value } = e.target;
    setJobList((prevState) => {
      console.log({ ...prevState });
    });
  };

  return (
    <div>
      <Form
        onPersonalUpdate={changePersonalHandler}
        // onJobListUpdate={changeJobHandler}
        onAddJob={addJobClickHandler}
        jobs={jobList}
      />
      <br />
      {/* <Resume info={resumeDetails} /> */}
    </div>
  );
}

export default App;
