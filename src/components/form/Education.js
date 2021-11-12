import { useState } from "react";
import uniqid from "uniqid";
import School from "./School";

const Education = (props) => {
  const [schoolList, setSchoolList] = useState([
    { schoolDetails: "", id: uniqid() },
  ]);

  const addSchoolClickHandler = () => {
    setSchoolList((prevState) => {
      return [...prevState, { schoolDetails: "", id: uniqid() }];
    });
    props.onAddEducation(schoolList);
  };

  const removeSchoolHandler = (schoolId) => {
    setSchoolList((prevState) => {
      return prevState.filter((school) => school.id !== schoolId);
    });
    props.onAddEducation(schoolList);
  };

  const updateSchoolHandler = (schoolData, schoolId) => {
    setSchoolList((prevState) => {
      return prevState.map((schoolItem) =>
        schoolItem.id === schoolId
          ? { schoolDetails: schoolData, id: schoolId }
          : schoolItem
      );
    });
    props.onAddEducation(schoolList);
  };

  return (
    <div>
      <h2>Education</h2>
      {schoolList.map((job) => (
        <School
          id={job.id}
          key={job.id}
          onUpdateSchool={updateSchoolHandler}
          onRemoveSchool={removeSchoolHandler}
        />
      ))}
      <button type="button" onClick={addSchoolClickHandler}>
        Add
      </button>
    </div>
  );
};

export default Education;
