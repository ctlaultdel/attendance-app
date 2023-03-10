import { useState } from "react";
import ClassInfo from "./components/ClassInfo";
import StudentList from "./components/StudentList";
import NewStudentForm from "./components/NewStudentForm";
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

  // Function to delete studentData
  const deleteAllStudentData = () => {
    setStudentData([]);
  };

  // Function to add new student data
  const addStudentData = (newStudent) => {
    // duplicate student list
    const newStudentList = [...studentData];
    // generate next valid student id
    const nextId = Math.max(...newStudentList.map((student) => student.id)) + 1;

    newStudentList.push({
      id: nextId,
      nameData: newStudent.nameData,
      emailData: newStudent.emailData,
      isPresentData: false,
    });
    setStudentData(newStudentList);
  };

  return (
    <main>
      <h1>Attendance</h1>
      <ClassInfo
        memberCount={studentData.length}
        deleteStudents={deleteAllStudentData}
      ></ClassInfo>
      <StudentList
        students={studentData}
        // make updateStudentData function available for other components to use
        onUpdateStudent={updateStudentData}
      ></StudentList>
      <NewStudentForm addStudentCallback={addStudentData}></NewStudentForm>
    </main>
  );
}

export default App;
