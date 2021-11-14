import Body from "./Body";
import ResumeHeader from "./ResumeHeader";
import "../../styles/Resume.css";

const Resume = (props) => {
  return (
    <div className="resume-container">
      <ResumeHeader personal={props.personalInfo} />
      <Body experience={props.jobInfo} education={props.schoolInfo} />
    </div>
  );
};

export default Resume;
