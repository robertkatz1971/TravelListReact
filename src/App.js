import { useState } from "react";
import Logo from "./components/Logo";
import Form from "./components/Form";
import PackingList  from "./components/PackingList";
import Stats from "./components/Stats";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: true },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Razor", quantity: 1, packed: true },
];

const App = () => {
  const [packingItems, setPackingItems] = useState(initialItems);

  const handleAddItem = (item) => {
    setPackingItems((prev) => [...prev, item]);
  };

  const handleChangeItem = (item) => {
    const updatedPackingItems = [
      ...packingItems.filter((pi) => pi.id !== item.id),
      item,
    ].sort((a, b) => a.id - b.id);
    setPackingItems(updatedPackingItems);
  };

  const handleDeleteItem = (id) => {
    setPackingItems((prev) => prev.filter((pi) => pi.id !== id));
  };

  const handleClearItems = () => {
    setPackingItems([]);
  };

  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItem} />
      <PackingList
        items={packingItems}
        onHandleChangeItem={handleChangeItem}
        onHandleDeleteItem={handleDeleteItem}
        onHandleClearItems={handleClearItems}
      />
      <Stats packingItems={packingItems} />
    </div>
  );
};

export default App;


