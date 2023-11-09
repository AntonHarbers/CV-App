import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import '../styles/Form.css';

export default function NewEducationItemForm({ addNewEducationalExperience }) {
  const [newItem, setNewItem] = useState({
    id: uuidv4(),
    schoolName: '',
    honors: '',
    startDate: '',
    endDate: '',
    typeOfEducation: '',
  });

  const resetNewItem = () => {
    setNewItem({
      id: uuidv4(),
      schoolName: '',
      honors: '',
      startDate: '',
      endDate: '',
      typeOfEducation: '',
    });
  };

  return (
    <form className="newItemForm">
      <div className="newItemFormRow">
        <label htmlFor="type">Type of Education:</label>
        <input
          className="newFormInput"
          type="text"
          name="type"
          id="type"
          placeholder="Type of Education"
          value={newItem.typeOfEducation}
          onChange={(e) => {
            setNewItem({ ...newItem, typeOfEducation: e.target.value });
          }}
        />
      </div>
      <div className="newItemFormRow">
        <label htmlFor="schoolName">School Name:</label>
        <input
          className="newFormInput"
          type="text"
          name="schoolName"
          placeholder="Name of School"
          id="schoolName"
          value={newItem.schoolName}
          onChange={(e) => {
            setNewItem({ ...newItem, schoolName: e.target.value });
          }}
        />
      </div>
      <div className="newItemFormRow">
        <label htmlFor="honors">Honors:</label>
        <input
          className="newFormInput"
          type="text"
          name="honors"
          placeholder="Honors received"
          id="honors"
          value={newItem.honors}
          onChange={(e) => {
            setNewItem({ ...newItem, honors: e.target.value });
          }}
        />
      </div>
      <div className="newItemFormRow">
        <label htmlFor="startDate">From:</label>
        <input
          className="newFormInput"
          type="text"
          name="startDate"
          id="startDate"
          placeholder="01.01.2021"
          value={newItem.startDate}
          onChange={(e) => {
            setNewItem({ ...newItem, startDate: e.target.value });
          }}
        />
      </div>
      <div className="newItemFormRow">
        <label htmlFor="endDate">To:</label>
        <input
          className="newFormInput"
          type="text"
          name="endDate"
          id="endDate"
          placeholder="01.01.2022"
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
            newItem.endDate == '' ||
            newItem.startDate == '' ||
            newItem.schoolName == '' ||
            newItem.typeOfEducation == ''
          ) {
            alert('Please fill out all the required Information');
            return;
          }
          addNewEducationalExperience(newItem);
          resetNewItem();
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="addIcon"
        >
          <path
            fillRule="evenodd"
            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </form>
  );
}
