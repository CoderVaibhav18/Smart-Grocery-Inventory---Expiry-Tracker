import { useState } from "react";

const Feed = () => {
  const [groceryList, setGroceryList] = useState([
    {
      id: 1,
      name: "Milk",
      purchaseDate: "2025-01-10",
      expiryDate: "2025-01-15",
      quantity: 2,
    },
    {
      id: 2,
      name: "Bread",
      purchaseDate: "2025-01-12",
      expiryDate: "2025-01-14",
      quantity: 1,
    },
    {
      id: 3,
      name: "Eggs",
      purchaseDate: "2025-01-11",
      expiryDate: "2025-01-20",
      quantity: 12,
    },
  ]);

  // Function to remove an item
  const handleRemove = (id) => {
    const updatedList = groceryList.filter((item) => item.id !== id);
    setGroceryList(updatedList);
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h2 className="text-3xl font-semibold mb-6 text-center">Grocery List</h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {groceryList.length > 0 ? (
          groceryList.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-md rounded-lg p-5 flex flex-col justify-between hover:shadow-lg transition-shadow duration-300"
            >
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {item.name}
                </h3>
                <p className="text-sm text-gray-600">
                  <strong>Purchase Date:</strong> {item.purchaseDate}
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Expiry Date:</strong> {item.expiryDate}
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Quantity:</strong> {item.quantity}
                </p>
              </div>

              <button
                onClick={() => handleRemove(item.id)}
                className="mt-4 bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition-colors duration-300"
              >
                Remove
              </button>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600 col-span-full">
            No grocery items available.
          </p>
        )}
      </div>
    </div>
  );
};

export default Feed;
