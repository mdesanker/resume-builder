import Job from "./Job";

const Experience = (props) => {
  const content = props.jobList.map((job) => {
    return (
      <Job
        id={job.id}
        key={job.id}
        onUpdate={props.onJobInfoUpdate}
        onRemove={props.onDeleteJob}
      />
    );
  });

  return (
    <div className="section category">
      <h2>Experience</h2>
      {content}
      <button type="button" className="btn add-btn" onClick={props.onNewJob}>
        Add
      </button>
    </div>
  );
};

export default Experience;
