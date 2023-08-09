import React from 'react';
import StudentCards from './StudentCard';

const Students = ({ students }) => {
  return (
    <div className="students">
      {students.map((student) => <StudentCard
        student={student} />
      )}
    </div>
  );
}


export default Students;
