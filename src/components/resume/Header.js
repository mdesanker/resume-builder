import { useState, useEffect } from "react/cjs/react.development";

const Header = (props) => {
  const [personalInfo, setPersonalInfo] = useState({
    first: "",
    last: "",
    location: "",
    email: "",
    github: "",
  });

  useEffect(() => {
    setPersonalInfo(props.personalInfo);
  }, [props.personalInfo]);

  return (
    <div>
      <p>First Name: {personalInfo.first}</p>
      <p>Last Name: {personalInfo.last}</p>
      <p>Location: {personalInfo.location}</p>
    </div>
  );
};

export default Header;
