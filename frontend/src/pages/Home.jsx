import { useState } from "react";
import "remixicon/fonts/remixicon.css";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [groceryName, setGroceryName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [purchaseDate, setPurchaseDate] = useState("");
  const [expiryData, setExpiryData] = useState("");

  // const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    const groceryData = {
      name: groceryName,
      quantity: quantity,
      purchase_date: purchaseDate,
      expiry_date: expiryData,
    };
    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}/api/add`,
      groceryData
    );
    if (response.status === 200) {
      alert("Grocery item added successfully");
      console.log(response.data.message);

      setGroceryName("");
      setQuantity("");
      setPurchaseDate("");
      setExpiryData("");
    }
  };

  return (
    <div>
      <form
        onSubmit={(e) => submitHandler(e)}
        className="p-5 flex mt-3 flex-col"
      >
        <h3 className="text-xl font-medium mb-2">Name of grocery</h3>
        <input
          className="py-2 px-8 mb-5 bg-[#eeee] text-lg font-normal rounded-lg w-full"
          type="text"
          value={groceryName}
          onChange={(e) => setGroceryName(e.target.value)}
          placeholder="Name of the grocery"
        />
        <h3 className="text-xl font-medium mb-2">Quantity</h3>
        <input
          className="py-2 px-8 mb-5 bg-[#eeee] text-lg font-normal rounded-lg w-full"
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          placeholder="Grocery quantity"
        />
        <h3 className="text-xl font-medium mb-2">Purchase Date</h3>
        <input
          className="py-2 px-8 mb-5 bg-[#eeee] text-lg font-normal rounded-lg w-full"
          type="date"
          value={purchaseDate}
          onChange={(e) => setPurchaseDate(e.target.value)}
          placeholder="Purchase Date"
        />
        <h3 className="text-xl font-medium mb-2">Expiry Data</h3>
        <input
          className="py-2 px-8 mb-5 bg-[#eeee] text-lg font-normal rounded-lg w-full"
          type="date"
          value={expiryData}
          onChange={(e) => setExpiryData(e.target.value)}
          placeholder="Expiry Date"
        />
        <button
          type="submit"
          className="w-full mb-5 py-3 rounded-lg font-medium bg-[#111] text-white"
        >
          Submit
        </button>
        <Link
          to="/feed"
          className="w-full text-center mb-5 py-3 rounded-lg font-medium bg-red-500 text-white"
        >
          Show all Grocery Items
        </Link>
      </form>
    </div>
  );
};

export default Home;
