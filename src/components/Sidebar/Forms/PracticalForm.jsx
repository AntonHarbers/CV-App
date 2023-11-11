import FormItemRow from '../../../utils/FormItemRow';
import { DeleteIcon, HideIcon, ShowIcon } from '../../../utils/icons';
import NewWorkItemForm from '../NewItem/NewWorkItemForm';

export default function PracticalForm({ workExperience, setWorkExperience }) {
  const addNewWorkExperience = (newItem) => {
    const newArray = [...workExperience, newItem];
    setWorkExperience(newArray);
  };

  const removeWorkExperience = (idToRemove) => {
    const newArray = workExperience.filter((item) => item.id !== idToRemove);
    setWorkExperience(newArray);
  };

  return (
    <>
      <h2>Work Experience</h2>
      <div className="formContainer">
        <NewWorkItemForm addNewWorkExperience={addNewWorkExperience} />
        {workExperience.map((item) => {
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
                    setWorkExperience([...workExperience]);
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
      </div>
    </>
  );
}
