import "../../styles/ResumeHeader.css";

const ResumeHeader = (props) => {
  const { first, last, location, email, github } = props.personal;

  return (
    <div className="resume-header">
      <h1 className="resume-name">{`${first} ${last}`}</h1>
      <p className="personal-details">{`${location} | ${email} | ${github}`}</p>
    </div>
  );
};

export default ResumeHeader;
