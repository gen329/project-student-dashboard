import React from 'react';
import StudentList from './StudentList';

const Students = ({ students }) => {
  return (
    <div className="students">
      {students.map((student) => <StudentList
        student={student} />
      )}
    </div>
  );
}


export default Students;
