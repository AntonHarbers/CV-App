import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import '../styles/Form.css';

export default function NewWorkItemForm({ addNewWorkExperience }) {
  const [newItem, setNewItem] = useState({
    id: uuidv4(),
    companyName: '',
    jobDescription: '',
    startDate: '',
    endDate: '',
  });

  const resetNewItem = () => {
    setNewItem({
      id: uuidv4(),
      companyName: '',
      jobDescription: '',
      startDate: '',
      endDate: '',
    });
  };

  return (
    <form className="newItemForm">
      <div className="newItemFormRow">
        <label htmlFor="companyName">Company Name:</label>
        <input
          className="newFormInput"
          type="text"
          name="companyName"
          placeholder="Company Name"
          id="companyName"
          value={newItem.companyName}
          onChange={(e) => {
            setNewItem({ ...newItem, companyName: e.target.value });
          }}
        />
      </div>
      <div className="newItemFormRow">
        <label htmlFor="jobDescription">Job Description:</label>
        <input
          className="newFormInput"
          placeholder="Job Description"
          type="text"
          name="jobDescription"
          id="jobDescription"
          value={newItem.jobDescription}
          onChange={(e) => {
            setNewItem({ ...newItem, jobDescription: e.target.value });
          }}
        />
      </div>
      <div className="newItemFormRow">
        <label htmlFor="startDateWork">From:</label>
        <input
          className="newFormInput"
          placeholder="01.01.2021"
          type="text"
          name="startDateWork"
          id="startDateWork"
          value={newItem.startDate}
          onChange={(e) => {
            setNewItem({ ...newItem, startDate: e.target.value });
          }}
        />
      </div>
      <div className="newItemFormRow">
        <label htmlFor="endDateWork">To:</label>
        <input
          className="newFormInput"
          type="text"
          name="endDateWork"
          placeholder="01.01.2022"
          id="endDateWork"
          value={newItem.endDate}
          onChange={(e) => {
            setNewItem({ ...newItem, endDate: e.target.value });
          }}
        />
      </div>

      <button
        onClick={(e) => {
          e.preventDefault();

          if (
            newItem.jobDescription == '' ||
            newItem.companyName == '' ||
            newItem.startDate == '' ||
            newItem.endDate == ''
          ) {
            alert('Please fill out all the required Information');
            return;
          }

          addNewWorkExperience(newItem);
          resetNewItem();
        }}
      >
        +
      </button>
    </form>
  );
}
