import { useState } from "react";
import PersonalInfo from "./PersonalInfo";

const Form = () => {
  const [personal, setPersonal] = useState();

  const addPersonalInfoHandler = (info) => {
    setPersonal((prevState) => {
      const savedContent = prevState.filter();
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={submitHandler}>
      <PersonalInfo onAddPersonalInfo={addPersonalInfoHandler} />
    </form>
  );
};

export default Form;
