import { useState } from 'react';
import '../../../styles/Form.css';
import { emptyEducationItem } from '../../../utils/data';
import { AddIcon } from '../../../utils/icons';
import NewItemFormRow from '../../../utils/NewItemFormRow';
import { v4 as uuidv4 } from 'uuid';

export default function NewEducationItemForm({ addNewEducationalExperience }) {
  const [newItem, setNewItem] = useState(emptyEducationItem(uuidv4()));

  const resetNewItem = () => {
    setNewItem(emptyEducationItem(uuidv4()));
  };

  const DataEmpty = () => {
    if (
      newItem.endDate == '' ||
      newItem.startDate == '' ||
      newItem.schoolName == '' ||
      newItem.typeOfEducation == ''
    ) {
      return true;
    }
    return false;
  };

  return (
    <form className="newItemForm">
      <NewItemFormRow
        itemName={'type'}
        newItem={newItem}
        newItemValue={newItem.typeOfEducation}
        setNewItem={setNewItem}
        placeholderText={'Type of Education'}
        labelText={'Type of Education:'}
        propertyName={'typeOfEducation'}
      />
      <NewItemFormRow
        itemName={'schoolName'}
        newItem={newItem}
        newItemValue={newItem.schoolName}
        setNewItem={setNewItem}
        placeholderText={'School Name'}
        labelText={'School Name:'}
        propertyName={'schoolName'}
      />
      <NewItemFormRow
        itemName={'honors'}
        newItem={newItem}
        newItemValue={newItem.honors}
        setNewItem={setNewItem}
        placeholderText={'Honors'}
        labelText={'Honors:'}
        propertyName={'honors'}
      />
      <NewItemFormRow
        itemName={'startDate'}
        newItem={newItem}
        newItemValue={newItem.startDate}
        setNewItem={setNewItem}
        placeholderText={'01.01.2021'}
        labelText={'From:'}
        propertyName={'startDate'}
      />
      <NewItemFormRow
        itemName={'endDate'}
        newItem={newItem}
        newItemValue={newItem.endDate}
        setNewItem={setNewItem}
        placeholderText={'01.01.2022'}
        labelText={'To:'}
        propertyName={'endDate'}
      />

      <button
        onClick={(e) => {
          e.preventDefault();

          if (DataEmpty()) {
            alert('Please fill out all the required Information');
            return;
          }
          addNewEducationalExperience(newItem);
          resetNewItem();
        }}
      >
        {AddIcon()}
      </button>
    </form>
  );
}
