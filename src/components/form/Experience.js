import Job from "./Job";

const Experience = (props) => {
  const content = props.jobList.map((job) => {
    // console.log("Exp", job.id);
    return <Job id={job.id} key={job.id} onUpdate={props.onJobInfoUpdate} />;
  });

  return (
    <div>
      <h2>Experience</h2>
      {content}
    </div>
  );
};

export default Experience;
