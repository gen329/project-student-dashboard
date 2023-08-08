// import "./App.css";
import studentData from "./data/data.json"
// import StudentCards from "./Components/StudentCards.jsx";
import Students from "./Components/Students.jsx";
// import CohortList from "./Components/CohortList.jsx"
import { useState } from "react";


function App() {
  const [students, setStudents] = useState(studentData)
  // const [cohort, setCohort] = useState([])

  return (
    <div className="pageStyle">
      <h1>Student Dashboard</h1>
      <Students
      students={students}/>
    </div>
  );
}

export default App;
