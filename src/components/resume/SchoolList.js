import { useState, useEffect } from "react/cjs/react.development";

const SchoolList = (props) => {
  const [schoolList, setSchoolList] = useState({
    university: "",
    location: "",
    degree: "",
    subject: "",
    date: "",
  });

  useEffect(() => {
    setSchoolList(props.educationInfo);
  }, [props.educationInfo]);

  return (
    <div>
      <p>University: {schoolList.university}</p>
      <p>location: {schoolList.location}</p>
    </div>
  );
};

export default SchoolList;
