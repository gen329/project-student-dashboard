import React from 'react';

const StudentCards = ({student}) => {
    return (
      <div id= {student.id} className="studentCard">
        <h4>Name: {student.names.preferredName}</h4>
        <span>Email: {student.username}</span>
        <span>Birthday: {student.dob}</span>
        <span></span>
      </div>
    )
  }


export default StudentCards;
