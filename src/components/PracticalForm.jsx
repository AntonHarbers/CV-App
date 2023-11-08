import NewWorkItemForm from './NewWorkItemForm';

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
        {workExperience.map((item, index) => {
          return (
            <div className="formItem" key={index}>
              <div className="formItemRow">
                <h3>Company Name:</h3>
                <h3>{item.companyName}</h3>
              </div>
              <div className="formItemRow">
                <h3>Job Description:</h3>
                <h3>{item.jobDescription}</h3>
              </div>
              <div className="formItemRow">
                <h3>From:</h3>
                <h3>{item.startDate}</h3>
              </div>{' '}
              <div className="formItemRow">
                <h3>To:</h3>
                <h3>{item.endDate} </h3>
              </div>{' '}
              <div className="formItemRow">
                <button
                  onClick={() => {
                    removeWorkExperience(item.id);
                  }}
                >
                  Remove
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
