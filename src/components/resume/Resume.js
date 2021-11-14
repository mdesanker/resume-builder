import Body from "./Body";
import Header from "./Header";

const Resume = (props) => {
  return (
    <div>
      <h1>Resume Output</h1>
      <Header personal={props.personalInfo} />
      <Body experience={props.jobInfo} education={props.schoolInfo} />
    </div>
  );
};

export default Resume;
