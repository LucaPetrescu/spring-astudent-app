import { useState, useEffect, useMemo, createRef } from "react";
import { list } from "../helpers/APIRoutes";
import axios from "axios";
import StudentComponent from "./StudentComponent";

function StudentList() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      const results = await axios.get(list);
      setStudents(results.data);
    };
    fetchStudents();
  }, []);
  console.log(students);

  return (
    <div className="student-list">
      {students.map((student) => {
        return (
          <StudentComponent
            studentLastName={student.lastName}
            studentFirstName={student.firstName}
          />
        );
      })}
      {/* <StudentComponent /> */}
    </div>
  );
}

export default StudentList;
