import React from "react";


const CohortList = ({cohort}) => {

    return (
      <div className="CohortList">
        <h2>Choose a Class by Start Date</h2>
        <li>{cohort}</li>
      </div>
    );
  }



export default CohortList;
