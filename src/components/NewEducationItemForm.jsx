import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import '../styles/Form.css'

export default function NewEducationItemForm({ addNewEducationalExperience }) {

  const [newItem, setNewItem] = useState({
    id: uuidv4(),
    schoolName: "",
    startDate: "",
    endDate: "",
    typeOfEducation: "",
  });
  

  const resetNewItem = () => {
    setNewItem({
      id: uuidv4(),
      schoolName: "",
      startDate: "",
      endDate: "",
      typeOfEducation: "",
    });
  };

  return (
    <form className="newItemForm">
      <div className="newItemFormRow">
        <label htmlFor="type">Type of Education:</label>
        <input className="newFormInput" type="text" name="type" id="type" placeholder="Type of Education" value={newItem.typeOfEducation} onChange={(e) => {
            setNewItem({...newItem, typeOfEducation: e.target.value})
        }} />
      </div>
      <div className="newItemFormRow">
        <label htmlFor="schoolName">School Name:</label>
        <input className="newFormInput" type="text" name="schoolName" placeholder="Name of School" id="schoolName" value={newItem.schoolName} onChange={(e) => {
            setNewItem({...newItem, schoolName: e.target.value})
        }} />
      </div>
      <div className="newItemFormRow">
        <label htmlFor="startDate">From:</label>
        <input className="newFormInput" type="text" name="startDate" id="startDate" placeholder="01.01.2021" value={newItem.startDate} onChange={(e) => {
            setNewItem({...newItem, startDate: e.target.value})
        }} />
      </div>
      <div className="newItemFormRow">
        <label htmlFor="endDate">To:</label>
        <input className="newFormInput" type="text" name="endDate" id="endDate" placeholder="01.01.2022" value={newItem.endDate} onChange={(e) => {
            setNewItem({...newItem, endDate: e.target.value})
        }} />
      </div>

      <button
        onClick={(e) => {
          e.preventDefault();

          if(newItem.endDate == "" || newItem.startDate == "" || newItem.schoolName == "" || newItem.typeOfEducation == ""){
            alert("Please fill out all the required Information");
            return;
          }
          addNewEducationalExperience(newItem);
          resetNewItem();
        }}
      >
        +
      </button>
    </form>
  );
}
