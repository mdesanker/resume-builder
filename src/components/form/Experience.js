const Experience = (props) => {
  return (
    <div>
      <h2>Experience</h2>
      <input
        type="text"
        id="position"
        name="position"
        placeholder="Position"
        onChange={props.onUpdate}
      />
      <input
        type="text"
        id="company"
        name="company"
        placeholder="Company"
        onChange={props.onUpdate}
      />
      <input
        type="text"
        id="location"
        name="location"
        placeholder="City, State"
        onChange={props.onUpdate}
      />
      <input
        type="text"
        id="start"
        name="start"
        placeholder="Start Date"
        onChange={props.onUpdate}
      />
      <input
        type="text"
        id="end"
        name="end"
        placeholder="End Date"
        onChange={props.onUpdate}
      />
    </div>
  );
};

export default Experience;
