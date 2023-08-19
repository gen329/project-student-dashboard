import React from "react";
import CohortCard from "./CohortCard.jsx";
import studentData from "../data/data.json";

const CohortList = ({selectedCohortSetter}) => {
  const cohortList = [...new Set(studentData.map(student => student.cohort.cohortCode)) ]
    .map(cohort => {
        const season = cohort.slice(0, -4);
        const year = cohort.slice(-4);
        return `${season} ${year}`
      });

  return (
    <div className="CohortList">
      {cohortList.map(cohort=> <CohortCard cohort={cohort} selectedCohortSetter={selectedCohortSetter}/>)}
    </div>
  );
}

export default CohortList;
