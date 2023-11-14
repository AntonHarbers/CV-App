import '../styles/CV.css';
import { forwardRef } from 'react';
import {
  backgroundColor,
  educationalExperience,
  generalInfo,
  headerPosition,
  mainColor,
  textColor,
  workExperience,
} from '../utils/signals';

// eslint-disable-next-line react/display-name
const CV = forwardRef((props, ref) => {
  return (
    <div className="cvContainer">
      <div
        ref={ref}
        style={{
          backgroundColor: backgroundColor.value,
        }}
        className="cvPaper"
      >
        <div
          style={{
            backgroundColor: mainColor.value,
            alignItems:
              headerPosition.value == 0
                ? 'flex-start'
                : headerPosition.value == 1
                ? 'center'
                : 'flex-end',
            paddingLeft: headerPosition.value == 0 ? '50px' : null,
            paddingRight: headerPosition.value == 2 ? '50px' : null,
          }}
          className="generalSectionCV"
        >
          <h1 style={{ color: textColor.value }}>{generalInfo.value.name}</h1>
          <p style={{ color: textColor.value }}>{generalInfo.value.email}</p>
          <p style={{ color: textColor.value }}>
            {generalInfo.value.phoneNumber != '' && <span>#</span>}
            {generalInfo.value.phoneNumber}
          </p>
        </div>
        <div className="educationSectionCV">
          {educationalExperience.value.length != 0 &&
            educationalExperience.value.some((item) => !item.hidden) && (
              <h1 style={{ color: textColor.value }}>Education</h1>
            )}
          {educationalExperience.value.map((educationItem, index) => {
            if (!educationItem.hidden) {
              return (
                <div
                  style={{
                    color: textColor.value,
                    borderColor: mainColor.value,
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
          {workExperience.value.length != 0 &&
            workExperience.value.some((item) => !item.hidden) && (
              <h1 style={{ color: textColor.value }}>Work Experience</h1>
            )}
          {workExperience.value.map((workItem, index) => {
            if (!workItem.hidden) {
              return (
                <div
                  style={{
                    color: textColor.value,
                    borderColor: mainColor.value,
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
});

// eslint-disable-next-line react-refresh/only-export-components
export default CV;
