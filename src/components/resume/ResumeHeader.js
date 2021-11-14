const ResumeHeader = (props) => {
  const { first, last, location, email, github } = props.personal;

  return (
    <div>
      <h1>{`${first} ${last}`}</h1>
      <p>{`${location} | ${email} | ${github}`}</p>
    </div>
  );
};

export default ResumeHeader;
