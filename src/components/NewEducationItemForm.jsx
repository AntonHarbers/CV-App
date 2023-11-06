import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import '../styles/EducationForm.css'
import DateFormat from "../utils/utils";

export default function NewEducationItemForm({ addNewEducationalExperience }) {

// form validation needed

  const [newItem, setNewItem] = useState({
    id: uuidv4(),
    schoolName: "Test",
    startDate: Date.now(),
    endDate: Date.now(),
    typeOfEducation: "Test",
  });

  const resetNewItem = () => {
    setNewItem({
      id: uuidv4(),
      schoolName: "Test",
      startDate: Date.now(),
      endDate: Date.now(),
      typeOfEducation: "Test",
    });
  };

  return (
    <form className="newEducationItemForm">
      <div className="newItemFormRow">
        <label htmlFor="type">Type of Education:</label>
        <input className="newEducationFormInput" type="text" name="type" id="type" value={newItem.typeOfEducation} onChange={(e) => {
            setNewItem({...newItem, typeOfEducation: e.target.value})
        }} />
      </div>
      <div className="newItemFormRow">
        <label htmlFor="schoolName">School Name:</label>
        <input className="newEducationFormInput" type="text" name="schoolName" id="schoolName" value={newItem.schoolName} onChange={(e) => {
            setNewItem({...newItem, schoolName: e.target.value})
        }} />
      </div>
      <div className="newItemFormRow">
        <label htmlFor="startDate">From:</label>
        <input className="newEducationFormInput" type="date" name="startDate" id="startDate" value={newItem.startDate} onChange={(e) => {
            setNewItem({...newItem, startDate: e.target.value})
        }} />
      </div>
      <div className="newItemFormRow">
        <label htmlFor="endDate">To:</label>
        <input className="newEducationFormInput" type="date" name="endDate" id="endDate" value={newItem.endDate} onChange={(e) => {
            setNewItem({...newItem, endDate: e.target.value})
        }} />
      </div>

      <button
        onClick={(e) => {
          e.preventDefault();
          addNewEducationalExperience(newItem);
          resetNewItem();
        }}
      >
        +
      </button>
    </form>
  );
}
