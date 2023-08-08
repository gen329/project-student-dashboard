// import "./App.css";
import studentData from "./data/data.json"
import StudentCards from "./Components/StudentCards.jsx";
import StudentList from "./Components/StudentList.jsx";
// import CohortList from "./Components/CohortList.jsx"
import { useState } from "react";


function App() {
  const [students, setStudents] = useState(studentData)
  // const [cohort, setCohort] = useState([])

  return (
    <div className="pageStyle">
      <h1>Student Dashboard</h1>
      <StudentList 
      students={students}/>
      {/* <CohortList
      cohort={student.cohort} /> */}
    </div>
  );
}

export default App;
