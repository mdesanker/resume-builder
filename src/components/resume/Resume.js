import { useState, useEffect } from "react";
import JobList from "./JobList";
import Header from "./Header";
import SchoolList from "./SchoolList";

const Resume = (props) => {
  const [resumeDetails, setResumeDetails] = useState({
    personalInfo: "",
    experienceInfo: [],
    educationInfo: [],
  });

  useEffect(() => {
    setResumeDetails(props.info);
  }, [props.info]);

  return (
    <div>
      <h1>Resume Output</h1>
      <Header personalInfo={resumeDetails.personalInfo} />
      {resumeDetails.experienceInfo.length > 0
        ? resumeDetails.experienceInfo.map((job) => (
            <JobList key={job.id} id={job.id} experienceInfo={job.jobDetails} />
          ))
        : ""}
      {resumeDetails.educationInfo.length > 0
        ? resumeDetails.educationInfo.map((school) => (
            <SchoolList
              key={school.id}
              id={school.id}
              educationInfo={school.schoolDetails}
            />
          ))
        : ""}
    </div>
  );
};

export default Resume;
