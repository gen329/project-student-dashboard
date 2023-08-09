import React from 'react';

const StudentCard = ({student}) => {
    return (
      <div className="studentCard">
        <h4>Name: {student.names.preferredName} {student.names.middleName} {student.names.surname}</h4>
        <span>Email: {student.username}</span><br></br>
        <span>Birthday: {student.dob}</span><br></br>
        <button> Show More </button>
      </div>
    )
  }


export default StudentCard;
