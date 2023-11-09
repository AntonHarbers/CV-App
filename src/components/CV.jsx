import '../styles/CV.css';

export default function CV({
  generalInfo,
  educationalExperience,
  workExperience,
}) {
  return (
    <div className="cvContainer">
      <div className="cvPaper">
        <div className="generalSectionCV">
          <h1>{generalInfo.name}</h1>
          <p>{generalInfo.email}</p>
          <p># {generalInfo.phoneNumber}</p>
        </div>
        <div className="educationSectionCV">
          <h1>Education</h1>
          {educationalExperience.map((educationItem, index) => {
            return (
              <div key={index} className="educationItem">
                <h3>{educationItem.typeOfEducation}</h3>

                <h3>{educationItem.schoolName}</h3>
                {educationItem.honors && (
                  <h4>Honors: {educationItem.honors}</h4>
                )}
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
              <div className="workItem" key={index}>
                <h4>{workItem.jobDescription}</h4>

                <h4>{workItem.companyName}</h4>
                {workItem.details && <h4>{workItem.details}</h4>}
                <h4>
                  {workItem.startDate} - {workItem.endDate}
                </h4>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
