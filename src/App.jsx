import StudentData from "./data/data.json"
import StudentList from "./Components/StudentList.jsx";


// import CohortList from "./Components/CohortList.jsx"
import { useState } from "react";


function App() {
  const [students, setStudents] = useState(StudentData)


  // function handleClick() {
  // }

  return (
    <div className="pageStyle">
      <header>Student Dashboard</header>

      <h2>All Students</h2>
      <p>Total Students: </p>
      <StudentList
        students={students} />
    </div>
  );
}

export default App;
