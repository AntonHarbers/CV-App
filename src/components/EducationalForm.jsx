import NewEducationItemForm from "./NewEducationItemForm";

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
      <div className="educationFormContainer">
        <NewEducationItemForm
          addNewEducationalExperience={addNewEducationalExperience}
        />
        {educationalExperience.map((item, index) => {
          return (
            <div className="educationFormItem" key={index}>
              <div className="educationFormItemRow">
                <h3>School Name:</h3>
                <h3>{item.schoolName}</h3>
              </div>
              <div className="educationFormItemRow">
                <h3>From:</h3>
                <h3>{item.startDate}</h3>
              </div>{" "}
              <div className="educationFormItemRow">
                <h3>To:</h3>
                <h3>{item.endDate} </h3>
              </div>{" "}
              <div className="educationFormItemRow">
                <h3>Type of Education:</h3>
                <h3>{item.typeOfEducation}</h3>
              </div>
              <div className="educationFormItemRow">
                <button
                  onClick={() => {
                    removeEducationalExperience(item.id);
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
