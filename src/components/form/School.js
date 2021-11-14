const School = (props) => {
  return (
    <div className="section">
      <input
        type="text"
        id="university"
        data-id={props.id}
        name="university"
        placeholder="University"
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
        id="degree"
        data-id={props.id}
        name="degree"
        placeholder="Degree"
        onChange={props.onUpdate}
      />
      <input
        type="text"
        id="subject"
        data-id={props.id}
        name="subject"
        placeholder="Subject"
        onChange={props.onUpdate}
      />
      <input
        type="text"
        id="date"
        data-id={props.id}
        name="date"
        placeholder="Date Received"
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

export default School;
