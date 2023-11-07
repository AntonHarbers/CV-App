export default function CV({
  generalInfo,
  educationalExperience,
  workExperience,
}) {
  return (
    <div>
      <div className="generalSectionCV">
        <h1>General Information</h1>
        <p>{generalInfo.name}</p>
        <p>{generalInfo.email}</p>
        <p>{generalInfo.phoneNumber}</p>
      </div>
      <div className="educationSectionCV">
        <h1>Education</h1>
        {educationalExperience.map((educationItem, index) => {
          return (
            <div key={index}>
              <h4>{educationItem.schoolName}</h4>
              <h4>{educationItem.typeOfEducation}</h4>
              <h4>
                {educationItem.startDate} - {educationItem.endDate}
              </h4>
            </div>
          );
        })}
      </div>
      <div className="workSectionCV">
        <h1>Work Experience</h1>
        {workExperience.map((workItem, index) => {
          return (
            <div key={index}>
              <h4>{workItem.companyName}</h4>
              <h4>{workItem.jobDescription}</h4>
              <h4>
                {workItem.startDate} - {workItem.endDate}
              </h4>
            </div>
          );
        })}
      </div>
    </div>
  );
}
