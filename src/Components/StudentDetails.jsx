import React, { useState } from 'react';


export default function StudentDetails({ student }) {
  const [showDetails, setShowDetails] = useState(false)
  function toggleStudentDetails() {
    setShowDetails(!showDetails);
  }

  return (
    <div className='studentDetail'>
      <button onClick={toggleStudentDetails}>
        {!showDetails ? "Show details" : "Hide details"}
      </button>
      {showDetails ? (
        <>
          <p>Codewars {student.codewars}</p>
          <p>Scores {student.cohort.scores}</p>
          <p>Certifications {student.certifications}</p>
        </>
      ) : null}
    </div>
  );
}


