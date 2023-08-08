import "./App.css";
import studentData from "./data.json"
import AllStudents from "./Components/StudentCards.jsx";
import CohortList from "./Components/CohortList.jsx"
import { useState } from "react";


function App() {
  const [student, setStudent] = useState(studentData)
  const [cohort, setCohort] = useState([])
  
  return (
    <div>
      <h1>Student Dashboard</h1>
      <AllStudents />
      <CohortList />
    </div>
  );
}

export default App;
