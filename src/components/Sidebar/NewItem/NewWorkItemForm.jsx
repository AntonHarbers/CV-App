import '../../../styles/Form.css';
import { emptyWorkItem } from '../../../utils/data';
import { AddIcon } from '../../../utils/icons';
import { v4 as uuidv4 } from 'uuid';

import NewItemFormRow from '../../../utils/NewItemFormRow';
import { signal } from '@preact/signals-react';

const newItem = signal(emptyWorkItem(uuidv4()));

const resetNewItem = () => {
  newItem.value = emptyWorkItem(uuidv4());
};

export default function NewWorkItemForm({ addNewWorkExperience }) {
  const DataEmpty = () => {
    if (
      newItem.value.jobDescription == '' ||
      newItem.value.companyName == '' ||
      newItem.value.startDate == '' ||
      newItem.value.endDate == ''
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
        newItemValue={newItem.value.companyName}
        placeholderText={'Company Name'}
        labelText={'Company Name:'}
        propertyName={'companyName'}
      />
      <NewItemFormRow
        itemName={'jobDescription'}
        newItem={newItem}
        newItemValue={newItem.value.jobDescription}
        placeholderText={'Job Description'}
        labelText={'Job Description:'}
        propertyName={'jobDescription'}
      />
      <NewItemFormRow
        itemName={'details'}
        newItem={newItem}
        newItemValue={newItem.value.details}
        placeholderText={'Details'}
        labelText={'Details:'}
        propertyName={'details'}
      />

      <NewItemFormRow
        itemName={'startDateWork'}
        newItem={newItem}
        newItemValue={newItem.value.startDate}
        placeholderText={'01.01.2021'}
        labelText={'From:'}
        propertyName={'startDate'}
      />
      <NewItemFormRow
        itemName={'endDateWork'}
        newItem={newItem}
        newItemValue={newItem.value.endDate}
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
