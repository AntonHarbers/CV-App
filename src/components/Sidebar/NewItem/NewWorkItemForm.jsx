import { useState } from 'react';
import '../../../styles/Form.css';
import { emptyWorkItem } from '../../../utils/data';
import { AddIcon } from '../../../utils/icons';
import { v4 as uuidv4 } from 'uuid';

import NewItemFormRow from '../../../utils/NewItemFormRow';

export default function NewWorkItemForm({ addNewWorkExperience }) {
  const [newItem, setNewItem] = useState(emptyWorkItem(uuidv4()));

  const resetNewItem = () => {
    setNewItem(emptyWorkItem(uuidv4()));
  };

  const DataEmpty = () => {
    if (
      newItem.jobDescription == '' ||
      newItem.companyName == '' ||
      newItem.startDate == '' ||
      newItem.endDate == ''
    ) {
      return true;
    }
    return false;
  };

  return (
    <form className="newItemForm">
      <NewItemFormRow
        itemName={'companyName'}
        newItem={newItem}
        newItemValue={newItem.companyName}
        setNewItem={setNewItem}
        placeholderText={'Company Name'}
        labelText={'Company Name:'}
        propertyName={'companyName'}
      />
      <NewItemFormRow
        itemName={'jobDescription'}
        newItem={newItem}
        newItemValue={newItem.jobDescription}
        setNewItem={setNewItem}
        placeholderText={'Job Description'}
        labelText={'Job Description:'}
        propertyName={'jobDescription'}
      />
      <NewItemFormRow
        itemName={'details'}
        newItem={newItem}
        newItemValue={newItem.details}
        setNewItem={setNewItem}
        placeholderText={'Details'}
        labelText={'Details:'}
        propertyName={'details'}
      />

      <NewItemFormRow
        itemName={'startDateWork'}
        newItem={newItem}
        newItemValue={newItem.startDate}
        setNewItem={setNewItem}
        placeholderText={'01.01.2021'}
        labelText={'From:'}
        propertyName={'startDate'}
      />
      <NewItemFormRow
        itemName={'endDateWork'}
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

          addNewWorkExperience(newItem);
          resetNewItem();
        }}
      >
        {AddIcon()}
      </button>
    </form>
  );
}
