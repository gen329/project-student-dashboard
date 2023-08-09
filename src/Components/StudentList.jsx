import React from 'react';
import StudentCard from './StudentCard.jsx';

const StudentList = ({ students }) => {
  return (
    <div className="students">
      {students.map((student) => <StudentCard student={student} />)}
    </div>
  );
}


export default StudentList;
