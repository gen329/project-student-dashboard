import React from "react";
import StudentDetails from "./StudentDetails";

const StudentCard = ({ student }) => {
  return (
    <div className="studentCard">
      <img className="img" src={student.profilePhoto}></img>
      <h4> {student.names.preferredName} {student.names.surname} </h4>
      <p>Email: {student.username}</p>
      <br></br>
      <p>Birthday: {student.dob}</p>
      <br></br>
      <StudentDetails student={student} />
    </div>
  );
};

export default StudentCard;
