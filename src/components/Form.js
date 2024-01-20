import { useState, useRef } from "react";

const Form = ({ onAddItem }) => {
    const [itemQuantity, setItemQuantity] = useState(1);
    const [itemDescription, setItemDescription] = useState("");
    const txtDescription = useRef();
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      if (!itemDescription) {
        alert("Error: Description is missing!");
        txtDescription.current?.focus();
        return;
      }
  
      onAddItem({
        id: Date.now(),
        description: itemDescription,
        quantity: itemQuantity,
        packed: false,
      });
      setItemDescription("");
      setItemQuantity(1);
      txtDescription.current?.focus();
    };
  
    return (
      <form onSubmit={handleSubmit} className="add-form">
        <h3>What do you need for your trip? ✈️</h3>
        <select
          name="itemCount"
          id="itemCount"
          value={itemQuantity}
          onChange={(e) => setItemQuantity(Number(e.target.value))}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="item..."
          value={itemDescription}
          onChange={(e) => setItemDescription(e.target.value)}
          ref={txtDescription}
        />
        <button type="submit">ADD</button>
      </form>
    );
  };

  export default Form;