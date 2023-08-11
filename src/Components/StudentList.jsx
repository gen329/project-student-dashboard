import React from 'react';
import StudentCard from './StudentCard.jsx';

const StudentList = ({ students }) => {
  console.log(students.length, "array or not?")
  return (
    <div className="students">
      {students.map((student) => <StudentCard student={student} />)}
    </div>
  );
}


export default StudentList;
