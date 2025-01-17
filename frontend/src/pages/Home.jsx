import { useState } from "react";
import "remixicon/fonts/remixicon.css";
import axios from "axios";

const Home = () => {
  const [groceryName, setGroceryName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [purchaseDate, setPurchaseDate] = useState("");
  const [expiryData, setExpiryData] = useState("");

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
        className="p-5 flex mt-3 flex-col gap-5"
      >
        <input
          className="py-2 px-8 bg-[#eeee] text-lg font-normal rounded-lg w-full"
          type="text"
          value={groceryName}
          onChange={(e) => setGroceryName(e.target.value)}
          placeholder="Name of the grocery"
        />
        <input
          className="py-2 px-8 bg-[#eeee] text-lg font-normal rounded-lg w-full"
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          placeholder="Grocery quantity"
        />
        <input
          className="py-2 px-8 bg-[#eeee] text-lg font-normal rounded-lg w-full"
          type="text"
          value={purchaseDate}
          onChange={(e) => setPurchaseDate(e.target.value)}
          placeholder="Purchase Date yyyy-mm-dd"
        />
        <input
          className="py-2 px-8 bg-[#eeee] text-lg font-normal rounded-lg w-full"
          type="text"
          value={expiryData}
          onChange={(e) => setExpiryData(e.target.value)}
          placeholder="Expiry Date yyyy-mm-dd"
        />
        <button
          type="submit"
          className="w-full py-2 rounded-lg font-medium bg-[#111] text-white"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Home;
