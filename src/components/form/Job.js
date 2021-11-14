const Job = (props) => {
  return (
    <div className="section">
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
      <button
        type="button"
        className="btn remove-btn"
        data-id={props.id}
        onClick={props.onRemove}
      >
        Remove
      </button>
    </div>
  );
};

export default Job;
