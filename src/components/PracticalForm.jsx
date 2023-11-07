import NewWorkItemForm from './NewWorkItemForm'

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
      <div className="workFormContainer">
        <NewWorkItemForm addNewWorkExperience={addNewWorkExperience}  />
        {workExperience.map((item, index) => {
          return (
            <div className="workFormItem" key={index}>
              <div className="workFormItemRow">
                <h3>School Name:</h3>
                <h3>{item.companyName}</h3>
              </div>
              <div className="workFormItemRow">
                <h3>Type of Education:</h3>
                <h3>{item.jobDescription}</h3>
              </div>
              <div className="workFormItemRow">
                <h3>From:</h3>
                <h3>{item.startDate}</h3>
              </div>{" "}
              <div className="workFormItemRow">
                <h3>To:</h3>
                <h3>{item.endDate} </h3>
              </div>{" "}
              <div className="workFormItemRow">
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
