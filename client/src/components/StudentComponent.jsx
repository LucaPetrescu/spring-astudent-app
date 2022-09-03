function StudentComponent(props) {
  return (
    <div className="student-component">
      <p>
        {props.studentLastName} {props.studentFirstName}
      </p>

      {/* <p>Name</p> */}
      <button className="btn btn-danger">Delete</button>
    </div>
  );
}

export default StudentComponent;
