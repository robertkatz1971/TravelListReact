const PackingItem = ({ item, onHandleChangeItem, onHandleDeleteItem }) => {
    const { id, packed, quantity, description } = item;
  
    const handleChangeItem = (e) => {
      onHandleChangeItem({ ...item, packed: e.target.checked });
    };
  
    const handleDeleteItem = () => {
      onHandleDeleteItem(id);
    };
  
    return (
      <li>
        <input
          type="checkbox"
          checked={packed}
          id={id}
          onChange={handleChangeItem}
        />
        <span style={item.packed ? { textDecorationLine: "line-through" } : {}}>
          {quantity} - {description}
        </span>
        <button onClick={handleDeleteItem}>❌</button>
      </li>
    );
  };

  export default PackingItem;