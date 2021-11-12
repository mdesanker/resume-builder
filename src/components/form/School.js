import { useState } from "react";

const School = (props) => {
  const [schoolData, setSchoolData] = useState({
    university: "",
    location: "",
    degree: "",
    subject: "",
    date: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;

    setSchoolData((prevState) => {
      return { ...prevState, [name]: value };
    });
    props.onUpdateSchool(schoolData, props.id);
  };

  const removeSchoolHandler = () => {
    props.onRemoveSchool(props.id);
  };

  return (
    <div>
      <input
        type="text"
        id="university"
        name="university"
        value={schoolData.university}
        placeholder="University"
        onChange={changeHandler}
      />
      <input
        type="text"
        id="location"
        name="location"
        value={schoolData.location}
        placeholder="Location"
        onChange={changeHandler}
      />
      <input
        type="text"
        id="degree"
        name="degree"
        value={schoolData.degree}
        placeholder="Degree"
        onChange={changeHandler}
      />
      <input
        type="text"
        id="subject"
        name="subject"
        value={schoolData.subject}
        placeholder="Subject"
        onChange={changeHandler}
      />
      <input
        type="text"
        id="date"
        name="date"
        value={schoolData.date}
        placeholder="Date Completed"
        onChange={changeHandler}
      />
      <button type="button" onClick={removeSchoolHandler}>
        Remove
      </button>
    </div>
  );
};

export default School;
