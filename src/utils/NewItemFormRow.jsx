export default function NewItemFormRow({
  itemName,
  newItem,
  newItemValue,
  placeholderText,
  labelText,
  propertyName,
}) {
  return (
    <div className="newItemFormRow">
      <label htmlFor="type">{labelText}</label>
      <input
        className="newFormInput"
        type="text"
        name={itemName}
        id={itemName}
        placeholder={placeholderText}
        value={newItemValue}
        onChange={(e) => {
          console.log(newItem.value);
          newItem.value = { ...newItem.value, [propertyName]: e.target.value };
        }}
      />
    </div>
  );
}
