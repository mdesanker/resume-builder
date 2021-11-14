import Body from "./Body";
import ResumeHeader from "./ResumeHeader";

const Resume = (props) => {
  return (
    <div>
      <ResumeHeader personal={props.personalInfo} />
      <Body experience={props.jobInfo} education={props.schoolInfo} />
    </div>
  );
};

export default Resume;
