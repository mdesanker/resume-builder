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

  // const [experienceData, setExperienceData] = useState({
  //   position: "",
  //   company: "",
  //   location: "",
  //   start: "",
  //   end: "",
  // });

  // const changeExperienceHandler = (e) => {
  //   const { name, value } = e.target;
  //   setExperienceData((prevState) => {
  //     return { ...prevState, [name]: value };
  //   });
  // };

  // useEffect(() => {
  //   console.log(experienceData);
  // }, [experienceData]);

  const [jobList, setJobList] = useState([{ entry: "", id: uniqid() }]);

  const changeJobListHandler = (e) => {
    const { name, value } = e.target;
    setJobList((prevState) => {
      return prevState.map((job) => {
        if (job.id !== e.target.dataset.id) {
          return job;
        } else if (job.id === e.target.dataset.id) {
          const update = { ...job.entry, [name]: value };
          return { entry: update, id: job.id };
        }
      });
    });
  };

  const addJobHandler = () => {
    setJobList((prevState) => {
      return [{ entry: "", id: uniqid() }, ...prevState];
    });
  };

  const removeJobHandler = (e) => {
    setJobList((prevState) => {
      return prevState.filter((job) => job.id !== e.target.dataset.id);
    });
  };

  useEffect(() => {
    console.log(jobList);
  }, [jobList]);

  return (
    <div>
      <Form
        onPersonalUpdate={changePersonalHandler}
        onJobUpdate={changeJobListHandler}
        onAddJob={addJobHandler}
        onRemoveJob={removeJobHandler}
        jobs={jobList}
        // onExperienceUpdate={changeExperienceHandler}
      />
      <br />
      {/* <Resume info={resumeDetails} /> */}
    </div>
  );
}

export default App;
