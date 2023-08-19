import React from 'react';

const CohortCard = ({ cohort, selectedCohortSetter }) => {
  const cohortValue = cohort.split(' ').join('');

  const handleClick = () => {
    selectedCohortSetter(cohortValue)
  }

  return (
    <div className='cohortCard' onClick={handleClick}>
      {cohort}
    </div>
  );
};


export default CohortCard;
