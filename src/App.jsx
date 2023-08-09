// import "./App.css";
import studentData from "./data/data.json"
// import StudentCards from "./Components/StudentCards.jsx";
import Students from "./Components/Students.jsx";
// import CohortList from "./Components/CohortList.jsx"
import { useState } from "react";


function App() {
  const [students, setStudents] = useState(studentData)
  // const [cohort, setCohort] = useState(students.cohort)

  // function handleClick() {
  // }

  return (
    <div className="pageStyle">
      <header>Student Dashboard</header>
      {/* < CohortList
      cohort={cohort} /> */}
      <h2>All Students</h2>
      <p>Total Students: </p>
      <Students
      students={students}/>
    </div>
  );
}

export default App;
