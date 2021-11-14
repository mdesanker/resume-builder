import PersonalInfo from "./PersonalInfo";
import Experience from "./Experience";
import Education from "./Education";
import "../../styles/Form.css";

const Form = (props) => {
  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="form-container">
      <form onSubmit={submitHandler}>
        <PersonalInfo onUpdate={props.onPersonalUpdate} />
        <Experience
          onJobInfoUpdate={props.onJobUpdate}
          onNewJob={props.onAddJob}
          onDeleteJob={props.onRemoveJob}
          jobList={props.jobs}
        />
        <Education
          onSchoolInfoUpdate={props.onSchoolUpdate}
          onNewSchool={props.onAddSchool}
          onDeleteSchool={props.onRemoveSchool}
          schoolList={props.schools}
        />
      </form>
    </div>
  );
};

export default Form;
