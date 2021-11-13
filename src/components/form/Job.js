const Job = (props) => {
  return (
    <div>
      <input
        type="text"
        id="position"
        data-id={props.id}
        name="position"
        placeholder="Position"
        onChange={props.onUpdate}
      />
      <input
        type="text"
        id="company"
        data-id={props.id}
        name="company"
        placeholder="Company"
        onChange={props.onUpdate}
      />
      <input
        type="text"
        id="location"
        data-id={props.id}
        name="location"
        placeholder="City, State"
        onChange={props.onUpdate}
      />
      <input
        type="text"
        id="start"
        data-id={props.id}
        name="start"
        placeholder="Start Date"
        onChange={props.onUpdate}
      />
      <input
        type="text"
        id="end"
        data-id={props.id}
        name="end"
        placeholder="End Date"
        onChange={props.onUpdate}
      />
    </div>
  );
};

export default Job;
