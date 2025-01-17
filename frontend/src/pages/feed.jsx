import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Feed = () => {
  const [groceryList, setGroceryList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  // Fetch grocery data from the backend
  useEffect(() => {
    const fetchGroceryData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/items`
        );
        setGroceryList(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch data.");
        setLoading(false);
      }
    };

    fetchGroceryData();
  }, []);

  // Function to remove a grocery item
  const handleRemove = async (id) => {
    try {
      await axios.delete(`${import.meta.env.VITE_API_URL}/api/delete/${id}`);
      setGroceryList(groceryList.filter((item) => item.id !== id));
    } catch (err) {
      console.error("Failed to remove item", err);
    }
  };

  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h2 className="text-3xl font-semibold mb-6 text-center">Grocery List</h2>

      <div className="grid gap-6 sm:grid-cols-2  lg:grid-cols-3">
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
          <div className="text-center">
            <p className="text-center text-gray-600 col-span-full">
              No grocery items available.
            </p>
            <button
              onClick={() => navigate("/")}
              className="mt-4 bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition-colors duration-300"
            >
              Back to add
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Feed;
