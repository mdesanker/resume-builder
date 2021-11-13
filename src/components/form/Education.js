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
    <div>
      <h2>Education</h2>
      {content}
      <button type="button" onClick={props.onNewSchool}>
        Add
      </button>
    </div>
  );
};

export default Education;
