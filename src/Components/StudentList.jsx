import React from 'react';


const StudentList = {(students)} => {
  const name = students.name;
  const userName= students.username;
  const birthday= students.dob;
    return (
      <div className="studentList">
        <h2>Name: {name}</h2>
        <p>Email: {userName}</p>
        <p>Birthday: {birthday}</p>
        <button>Show More...</button>
      </div>
    );
  }


export default StudentList;
