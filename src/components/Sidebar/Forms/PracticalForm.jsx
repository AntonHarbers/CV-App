import FormItemRow from '../../../utils/FormItemRow';
import { DeleteIcon, HideIcon, ShowIcon } from '../../../utils/icons';
import { workExperience } from '../../../utils/signals';
import NewWorkItemForm from '../NewItem/NewWorkItemForm';

export default function PracticalForm() {
  const addNewWorkExperience = (newItem) => {
    const newArray = [...workExperience.value, newItem.value];
    workExperience.value = newArray;
  };

  const removeWorkExperience = (idToRemove) => {
    const newArray = workExperience.value.filter(
      (item) => item.id !== idToRemove
    );
    workExperience.value = newArray;
  };

  return (
    <>
      <h2>Work Experience</h2>
      <div className="formContainer">
        {workExperience.value.map((item) => {
          return (
            <div className="formItem" key={item.id}>
              <FormItemRow text={'Company Name:'} content={item.companyName} />
              <FormItemRow
                text={'Job Description:'}
                content={item.jobDescription}
              />
              <FormItemRow text={'Details:'} content={item.details} />
              <FormItemRow text={'Start Date:'} content={item.startDate} />
              <FormItemRow text={'End Date:'} content={item.endDate} />
              <div className="formItemRow">
                <button
                  onClick={() => {
                    item.hidden = !item.hidden;
                    workExperience.value = [...workExperience.value];
                  }}
                >
                  {item.hidden ? HideIcon() : ShowIcon()}
                </button>
                <button
                  onClick={() => {
                    removeWorkExperience(item.id);
                  }}
                >
                  {DeleteIcon()}
                </button>
              </div>
            </div>
          );
        })}
        <NewWorkItemForm addNewWorkExperience={addNewWorkExperience} />
      </div>
    </>
  );
}
