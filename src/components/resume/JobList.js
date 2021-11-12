import { useState, useEffect } from "react/cjs/react.development";

const JobList = (props) => {
  const [jobList, setJobList] = useState({
    position: "",
    company: "",
    location: "",
    from: "",
    to: "",
  });

  useEffect(() => {
    setJobList(props.experienceInfo);
  }, [props.experienceInfo]);

  return (
    <div>
      <p>Position: {jobList.position}</p>
      <p>Company: {jobList.company}</p>
    </div>
  );
};

export default JobList;
