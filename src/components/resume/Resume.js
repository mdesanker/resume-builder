import { useState, useEffect } from "react";

const Resume = (props) => {
  const [reusmeDetails, setResumeDetails] = useState({
    personalInfo: "",
    experienceInfo: "",
    educationInfo: "",
  });

  useEffect(() => {
    setResumeDetails(props.info);
  }, [props.info]);

  return (
    <div>
      <h1>Resume Output</h1>
      {reusmeDetails.personalInfo.first}
      {reusmeDetails.personalInfo.last}
      {reusmeDetails.personalInfo.location}
    </div>
  );
};

export default Resume;
