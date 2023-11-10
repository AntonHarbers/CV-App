import { DeleteIcon, HideIcon, ShowIcon } from '../utils/icons';
import NewEducationItemForm from './NewEducationItemForm';

export default function EducationalForm({
  educationalExperience,
  setEducationalExperience,
}) {
  const addNewEducationalExperience = (newItem) => {
    const newArray = [...educationalExperience, newItem];
    setEducationalExperience(newArray);
  };

  const removeEducationalExperience = (idToRemove) => {
    const newArray = educationalExperience.filter(
      (item) => item.id !== idToRemove
    );
    setEducationalExperience(newArray);
  };

  return (
    <>
      <h2>Education</h2>
      <div className="formContainer">
        <NewEducationItemForm
          addNewEducationalExperience={addNewEducationalExperience}
        />
        {educationalExperience.map((item, index) => {
          return (
            <div className="formItem" key={index}>
              <div className="formItemRow">
                <h4>Type of Education:</h4>
                <h4>{item.typeOfEducation}</h4>
              </div>
              <div className="formItemRow">
                <h4>School Name:</h4>
                <h4>{item.schoolName}</h4>
              </div>
              <div className="formItemRow">
                <h4>Honors:</h4>
                <h4>{item.honors}</h4>
              </div>
              <div className="formItemRow">
                <h4>From:</h4>
                <h4>{item.startDate}</h4>
              </div>{' '}
              <div className="formItemRow">
                <h4>To:</h4>
                <h4>{item.endDate} </h4>
              </div>{' '}
              <div className="formItemRow">
                <button
                  onClick={() => {
                    item.hidden = !item.hidden;
                    setEducationalExperience([...educationalExperience]);
                  }}
                >
                  {item.hidden ? HideIcon() : ShowIcon()}
                </button>
                <button
                  onClick={() => {
                    removeEducationalExperience(item.id);
                  }}
                >
                  {DeleteIcon()}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
