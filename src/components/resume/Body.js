import uniqid from "uniqid";
import "../../styles/ResumeBody.css";

const Body = (props) => {
  const experience = props.experience.map((job) => {
    const { position, company, location, start, end } = job.entry;
    return (
      <li className="section-entry" key={uniqid()}>
        <div className="entry-top">
          <h3>{position}</h3>
          <p>
            {start} - {end}
          </p>
        </div>
        <div className="entry-bottom">
          <p>{company}</p>
          <p>{location}</p>
        </div>
      </li>
    );
  });

  const education = props.education.map((job) => {
    const { university, location, degree, subject, date } = job.entry;
    return (
      <li className="section-entry" key={uniqid()}>
        <div className="entry-top">
          <h3>{university}</h3>
          <p>{date}</p>
        </div>
        <div className="entry-bottom">
          <p>
            {degree} - {subject}
          </p>
          <p>{location}</p>
        </div>
      </li>
    );
  });

  return (
    <div className="resume-body">
      <div className="resume-section">
        <h2 className="section-header">Work Experience</h2>
        <ul>{experience}</ul>
      </div>
      <div className="resume-section">
        <h2 className="section-header">Education</h2>
        <ul>{education}</ul>
      </div>
    </div>
  );
};

export default Body;
