import StudentData from "./data/data.json"
import StudentList from "./Components/StudentList.jsx";
import CohortList from "./Components/CohortList.jsx";
// import One_One_Section from "./Components/One_One_Section.jsx";
import { useState } from "react";


function App() {
  const [students, setStudents] = useState(StudentData)


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
          {/* <One_One_Section /> */}
        </div>
        <StudentList students={students} />
      </div>
    </div>
  );
}

export default App;
