import { useState } from "react";
import Form from "./components/Form";

function App() {
  const [resumeDetails, setResumeDetails] = useState([]);

  const addResumeDetailsHandler = (info) => {
    setResumeDetails((prevState) => {
      return [...prevState, info];
    });
    console.log(resumeDetails);
  };

  return (
    <div>
      <Form onAddDetails={addResumeDetailsHandler} />
    </div>
  );
}

export default App;
