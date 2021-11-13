import PersonalInfo from "./PersonalInfo";
import Experience from "./Experience";
import Education from "./Education";

const Form = (props) => {
  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
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
  );
};

export default Form;
