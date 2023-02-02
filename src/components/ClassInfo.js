import PropTypes from "prop-types";

const ClassInfo = (props) => {
  const deleteAllStudents = () => {
    props.deleteStudents();
  };
  return (
    <section>
      <h2>Class Information</h2>
      <ul>
        <li>Name: Ocelots</li>
        <li>Number of members: {props.memberCount}</li>
      </ul>
      <button onClick={deleteAllStudents}>Delete All Students!</button>
    </section>
  );
};

ClassInfo.propTypes = {
  memberCount: PropTypes.number,
  deleteStudents: PropTypes.func,
};

export default ClassInfo;
