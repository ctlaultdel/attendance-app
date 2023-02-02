import { useState } from "react";
import StudentList from "./components/StudentList";
import studentDataSet from "./data/studentData";

// container component:
// holds and manages student data and passes to children components
function App() {
  // create studentData state with imported studentDataSet
  const [studentData, setStudentData] = useState(studentDataSet);

  // Function to update studentData
  const updateStudentData = (updatedStudent) => {
    // we have to make a new outer reference & copy existing values
    // for react to see the change and trigger a re-render
    const students = studentData.map((student) => {
      if (student.id === updatedStudent.id) {
        return updatedStudent;
      } else {
        return student;
      }
    });
    setStudentData(students);
  };

  return (
    <main>
      <h1>Attendance</h1>
      <StudentList
        students={studentData}
        // make updateStudentData function available for other components to use
        onUpdateStudent={updateStudentData}
      ></StudentList>
    </main>
  );
}

export default App;
