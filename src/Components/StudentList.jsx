import react from 'react';


const StudentList = ({student}) => {

    return (
      <div className="studentList">
        <h2>Name: {student.name}</h2>
        <p>Email: {student.username}</p>
        <p>Birthday: {student.dob}</p>
        <button>Show More...</button>
        <img src= {student.profilePhoto}></img>
      </div>
    );
  }


export default StudentList;
