import uniqid from "uniqid";

const Body = (props) => {
  const experience = props.experience.map((job) => {
    const { position, company, location, start, end } = job.entry;
    return (
      <li key={uniqid()}>
        <div>
          <h3>{position}</h3>
          <p>
            {start} - {end}
          </p>
        </div>
        <div>
          <p>{company}</p>
          <p>{location}</p>
        </div>
      </li>
    );
  });

  const education = props.education.map((job) => {
    const { university, location, degree, subject, date } = job.entry;
    return (
      <li key={uniqid()}>
        <div>
          <h3>{university}</h3>
          <p>{date}</p>
        </div>
        <div>
          <p>
            {degree} - {subject}
          </p>
          <p>{location}</p>
        </div>
      </li>
    );
  });

  return (
    <div>
      <h2>Work Experience</h2>
      <ul>{experience}</ul>
      <h2>Education</h2>
      <ul>{education}</ul>
    </div>
  );
};

export default Body;
