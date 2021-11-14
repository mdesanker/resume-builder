import School from "./School";

const Education = (props) => {
  const content = props.schoolList.map((school) => {
    return (
      <School
        id={school.id}
        key={school.id}
        onUpdate={props.onSchoolInfoUpdate}
        onRemove={props.onDeleteSchool}
      />
    );
  });

  return (
    <div className="section category">
      <h2>Education</h2>
      {content}
      <button type="button" className="btn add-btn" onClick={props.onNewSchool}>
        Add
      </button>
    </div>
  );
};

export default Education;
