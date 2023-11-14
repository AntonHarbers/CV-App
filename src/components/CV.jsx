import '../styles/CV.css';
import { forwardRef } from 'react';

// eslint-disable-next-line react/display-name
const CV = forwardRef(
  (
    {
      generalInfo,
      educationalExperience,
      workExperience,
      colors,
      headerPosition,
    },
    ref
  ) => {
    return (
      <div className="cvContainer">
        <div
          ref={ref}
          style={{
            backgroundColor: colors.backgroundColor,
          }}
          className="cvPaper"
        >
          <div
            style={{
              backgroundColor: colors.mainColor,
              alignItems:
                headerPosition == 0
                  ? 'flex-start'
                  : headerPosition == 1
                  ? 'center'
                  : 'flex-end',
              paddingLeft: headerPosition == 0 ? '50px' : null,
              paddingRight: headerPosition == 2 ? '50px' : null,
            }}
            className="generalSectionCV"
          >
            <h1 style={{ color: colors.textColor }}>{generalInfo.name}</h1>
            <h2 style={{ color: colors.textColor }}>{generalInfo.email}</h2>
            <h2 style={{ color: colors.textColor }}>
              {generalInfo.phoneNumber != '' && <span>#</span>}
              {generalInfo.phoneNumber}
            </h2>
          </div>
          <div className="educationSectionCV">
            {educationalExperience.length != 0 &&
              educationalExperience.some((item) => !item.hidden) && (
                <h1 style={{ color: colors.textColor }}>Education</h1>
              )}
            {educationalExperience.map((educationItem, index) => {
              if (!educationItem.hidden) {
                return (
                  <div
                    style={{
                      color: colors.textColor,
                      borderColor: colors.mainColor,
                    }}
                    key={index}
                    className="educationItem"
                  >
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
              }
            })}
          </div>
          <div className="workSectionCV">
            {workExperience.length != 0 &&
              workExperience.some((item) => !item.hidden) && (
                <h1 style={{ color: colors.textColor }}>Work Experience</h1>
              )}
            {workExperience.map((workItem, index) => {
              if (!workItem.hidden) {
                return (
                  <div
                    style={{
                      color: colors.textColor,
                      borderColor: colors.mainColor,
                    }}
                    className="workItem"
                    key={index}
                  >
                    <h4>{workItem.jobDescription}</h4>

                    <h4>{workItem.companyName}</h4>
                    {workItem.details && <h4>{workItem.details}</h4>}
                    <h4>
                      {workItem.startDate} - {workItem.endDate}
                    </h4>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    );
  }
);

// eslint-disable-next-line react-refresh/only-export-components
export default CV;
