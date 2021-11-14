import { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import Form from "./components/form/Form";
import Resume from "./components/resume/Resume";
import uniqid from "uniqid";

function App() {
  // States
  const [personalData, setPersonalData] = useState({
    first: "",
    last: "",
    location: "",
    email: "",
    github: "",
  });

  const [jobList, setJobList] = useState([{ entry: "", id: uniqid() }]);

  const [schoolList, setSchoolList] = useState([{ entry: "", id: uniqid() }]);

  // Handlers
  const changePersonalHandler = (e) => {
    const { name, value } = e.target;
    setPersonalData((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

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
      return [...prevState, { entry: "", id: uniqid() }];
    });
  };

  const removeJobHandler = (e) => {
    setJobList((prevState) => {
      return prevState.filter((job) => job.id !== e.target.dataset.id);
    });
  };

  const changeSchoolListHandler = (e) => {
    const { name, value } = e.target;
    setSchoolList((prevState) => {
      return prevState.map((school) => {
        if (school.id !== e.target.dataset.id) {
          return school;
        } else if (school.id === e.target.dataset.id) {
          const update = { ...school.entry, [name]: value };
          return { entry: update, id: school.id };
        }
      });
    });
  };

  const addSchoolHandler = () => {
    setSchoolList((prevState) => {
      return [...prevState, { entry: "", id: uniqid() }];
    });
  };

  const removeSchoolHandler = (e) => {
    setSchoolList((prevState) => {
      return prevState.filter((school) => school.id !== e.target.dataset.id);
    });
  };

  // useEffect Hooks
  useEffect(() => {
    console.log(personalData);
  }, [personalData]);

  useEffect(() => {
    console.log(jobList);
  }, [jobList]);

  useEffect(() => {
    console.log(schoolList);
  }, [schoolList]);

  return (
    <div>
      <Form
        onPersonalUpdate={changePersonalHandler}
        onJobUpdate={changeJobListHandler}
        onAddJob={addJobHandler}
        onRemoveJob={removeJobHandler}
        jobs={jobList}
        onSchoolUpdate={changeSchoolListHandler}
        onAddSchool={addSchoolHandler}
        onRemoveSchool={removeSchoolHandler}
        schools={schoolList}
      />
      <br />
      <Resume
        personalInfo={personalData}
        jobInfo={jobList}
        schoolInfo={schoolList}
      />
    </div>
  );
}

export default App;
