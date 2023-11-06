import DateFormat from "../utils/utils"

export default function CV({generalInfo, educationalExperience, workExperience}) {
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
              <h4>{DateFormat(educationItem.startDate)} - {DateFormat(educationItem.endDate)}</h4>
            </div>
          )
        })}
      </div>
      <div className="workSectionCV">
        <h1>Work Experience</h1>
        {workExperience.map((workItem, index) => {
          return <div key={index}>{workItem.companyName}</div>
        })}
      </div>
    </div>
    
  )
}
