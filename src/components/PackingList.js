import { useState } from "react";
import PackingItem from "./PackingItem";

const PackingList = ({
    items,
    onHandleChangeItem,
    onHandleDeleteItem,
    onHandleClearItems,
  }) => {
  
    const [sortOption, setSortOption] = useState("description");
    let sortedItems = [];
  
    if (items.length === 0) return null;
  
    if (sortOption === "id") {
      sortedItems = items.slice();
    }
    
    if (sortOption === "description") {
      sortedItems = items.toSorted((a, b) => a.description.localeCompare(b.description));
    }
    if (sortOption === "packed") {
      sortedItems = items.toSorted((a, b) => {
        var packedOrder = Boolean(a.packed) - Boolean(b.packed);
        var descriptionOrder = a.description.localeCompare(b.description);
        return packedOrder || descriptionOrder;
      });
    }
   
    return (
      <div className="list">
        <ul>
          {sortedItems.map((item) => (
            <PackingItem
              key={item.id}
              item={item}
              onHandleChangeItem={onHandleChangeItem}
              onHandleDeleteItem={onHandleDeleteItem}
            />
          ))}
        </ul>
        <div className="actions">
          <select value={sortOption} onChange={e =>setSortOption(e.target.value)}>
            <option name="id" value="id">
              SORT BY INPUT ORDER
            </option>
            <option name="description" value="description">
              SORT BY DESCRIPTION
            </option>
            <option name="packed" value="packed">
              SORT BY PACKED STATUS
            </option>
          </select>
          <button onClick={onHandleClearItems}>CLEAR LIST</button>
        </div>
      </div>
    );
  };

  export default PackingList;