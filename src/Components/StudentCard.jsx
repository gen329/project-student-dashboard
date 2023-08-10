import React from "react";
import StudentDetails from "./StudentDetails";

const StudentCard = ({ student }) => {
  return (
    <div className="studentCard">
      <img className="img" src={student.profilePhoto}></img>
      <h4>
        {student.names.preferredName} {student.names.surname}
      </h4>
      <span>Email: {student.username}</span>
      <br></br>
      <span>Birthday: {student.dob}</span>
      <br></br>
      <button><StudentDetails/></button>
    </div>
  );
};

export default StudentCard;
