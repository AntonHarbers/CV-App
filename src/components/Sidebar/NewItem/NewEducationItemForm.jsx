import '../../../styles/Form.css';
import { emptyEducationItem } from '../../../utils/data';
import { AddIcon } from '../../../utils/icons';
import NewItemFormRow from '../../../utils/NewItemFormRow';
import { v4 as uuidv4 } from 'uuid';
import { signal } from '@preact/signals-react';

const newItem = signal(emptyEducationItem(uuidv4()));

const resetNewItem = () => {
  newItem.value = emptyEducationItem(uuidv4());
};
export default function NewEducationItemForm({ addNewEducationalExperience }) {
  const DataEmpty = () => {
    if (
      newItem.value.endDate == '' ||
      newItem.value.startDate == '' ||
      newItem.value.schoolName == '' ||
      newItem.value.typeOfEducation == ''
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
        newItemValue={newItem.value.typeOfEducation}
        placeholderText={'Type of Education'}
        labelText={'Type of Education:'}
        propertyName={'typeOfEducation'}
      />
      <NewItemFormRow
        itemName={'schoolName'}
        newItem={newItem}
        newItemValue={newItem.value.schoolName}
        placeholderText={'School Name'}
        labelText={'School Name:'}
        propertyName={'schoolName'}
      />
      <NewItemFormRow
        itemName={'honors'}
        newItem={newItem}
        newItemValue={newItem.value.honors}
        placeholderText={'Honors'}
        labelText={'Honors:'}
        propertyName={'honors'}
      />
      <NewItemFormRow
        itemName={'startDate'}
        newItem={newItem}
        newItemValue={newItem.value.startDate}
        placeholderText={'01.01.2021'}
        labelText={'From:'}
        propertyName={'startDate'}
      />
      <NewItemFormRow
        itemName={'endDate'}
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
          addNewEducationalExperience(newItem);
          resetNewItem();
        }}
      >
        {AddIcon()}
      </button>
    </form>
  );
}
