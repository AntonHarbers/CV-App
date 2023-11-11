export default function NewItemFormRow({
  itemName,
  newItem,
  newItemValue,
  setNewItem,
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
          setNewItem({ ...newItem, [propertyName]: e.target.value });
        }}
      />
    </div>
  );
}
