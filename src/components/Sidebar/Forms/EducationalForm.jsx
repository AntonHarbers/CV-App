import FormItemRow from '../../../utils/FormItemRow';
import { DeleteIcon, HideIcon, ShowIcon } from '../../../utils/icons';
import NewEducationItemForm from '../NewItem/NewEducationItemForm';

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
        {educationalExperience.map((item) => {
          return (
            <div className="formItem" key={item.id}>
              <FormItemRow
                text={'Type of Education:'}
                content={item.typeOfEducation}
              />
              <FormItemRow text={'School Name:'} content={item.schoolName} />
              <FormItemRow text={'Honors:'} content={item.honors} />
              <FormItemRow text={'Start Date:'} content={item.startDate} />
              <FormItemRow text={'End Date:'} content={item.endDate} />
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
