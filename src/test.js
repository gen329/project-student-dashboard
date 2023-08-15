const cohorts = ['Winter2025', 'Winter2026', 'Summer2026', 'Summer2025', 'Spring2025', 'Fall2025', 'Spring2026', 'Fall2026'];

const separatedCohorts = cohorts.map(cohort => {
  const season = cohort.slice(0, -4);
  const year = cohort.slice(-4);
  return `${season} ${year}`
});
console.log(separatedCohorts)