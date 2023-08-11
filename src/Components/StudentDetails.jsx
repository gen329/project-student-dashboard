import React, { useState } from 'react';


export default function StudentDetails({ student }) {
  const [showDetails, setShowDetails] = useState(false)

  function toggleStudentDetails() {
    setShowDetails(!showDetails);
  }

  return (
    <div className="studentDetail" >

      <button onClick={toggleStudentDetails}>
        {showDetails ? "Hide details" : "Show details"}
      </button>
      
      {showDetails ?
        <div>
          <h2>Codewars: </h2>
          <p>Current Total: {student.codewars.current.total}</p>
          <p>Last Week: {student.codewars.current.lastWeek}</p>

          <h2>Scores: </h2>
          <p>Assignments: {student.cohort.scores.assignments}</p>
          <p>Projects:{student.cohort.scores.projects}</p>
          <p>Assessments: {student.cohort.scores.assessments}</p>

          <h2>Certifications: </h2>
          <p>Resume: {student.certifications.resume ? <> ✅ </> : <> ❌ </>} </p>
          <p>LinkedIn: {student.certifications.linkedin ? <> ✅ </> : <> ❌ </>} </p>
          <p>GitHub: {student.certifications.github ? <> ✅ </> : <> ❌ </>} </p>
          <p>Mock Interview: {student.certifications.mockInterview ? <> ✅ </> : <> ❌ </>} </p>
        </div>
        : null
      }
    </div>
  );
}
