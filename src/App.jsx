import StudentData from "./data/data.json"
import StudentList from "./Components/StudentList.jsx";
import CohortList from "./Components/CohortList.jsx";
import OneOneSectionJsx from "./Components/One_One_Section.jsx";
import { useState } from "react";


function App() {
  const [students, setStudents] = useState(StudentData)

console.log(students)
  // function handleClick() {
  // }

  return (
    <div className="pageStyle">
      <header>Student Dashboard </header>

      <h2>All Students </h2>
      <p>Total Students:{students.length} </p>
      <div className="container">
        <div className="feedContainer">
          <CohortList />
          <OneOneSection />
        </div>
        <StudentList students={students} />
      </div>
    </div>
  );
}

export default App;
