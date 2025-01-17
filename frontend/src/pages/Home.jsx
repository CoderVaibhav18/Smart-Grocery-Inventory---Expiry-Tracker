import React from "react";
import "remixicon/fonts/remixicon.css";
import { Link } from "react-router-dom";

const Home = () => {
  const submitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
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
          placeholder="Name of the grocery"
          name="name"
        />
        <input
          className="py-2 px-8 bg-[#eeee] text-lg font-normal rounded-lg w-full"
          type="number"
          placeholder="Grocery quantity"
          name="quantity"
        />
        <input
          className="py-2 px-8 bg-[#eeee] text-lg font-normal rounded-lg w-full"
          type="text"
          placeholder="Purchase Date yyyy-mm-dd"
          name="purchase_date"
        />
        <input
          className="py-2 px-8 bg-[#eeee] text-lg font-normal rounded-lg w-full"
          type="text"
          placeholder="Expiry Date yyyy-mm-dd"
          name="expiry_date"
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
