const Stats = ({ packingItems }) => {
    const itemCount = packingItems.length;
  
    if (itemCount === 0) {
      return (
        <footer className="stats">
          <em>Start adding some items to your packing list.</em>
        </footer>
      );
    }
  
    const packedItemsCount = packingItems.filter(
      (item) => item.packed === true,
    ).length;
  
    return (
      <footer className="stats">
        <em>
          You have {itemCount} items on your list, and you already packed{" "}
          {packedItemsCount} (
          {itemCount > 0 ? Math.floor((packedItemsCount / itemCount) * 100) : 0}%)
        </em>
      </footer>
    );
  };

  export default Stats;