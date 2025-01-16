import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  // const navigate = useNavigate();
  return (
    <div className="h-screen">
      <div className="text-center h-[60px]  flex items-center justify-around">
        <h3 className="text-2xl font-semibold ">Grocery Inventory</h3>
        <ul className=" flex items-center gap-5 justify-around">
          <li className="text-xl font-medium">
            <Link to="/">Home</Link>
          </li>
          <li className="text-xl font-medium">
            <Link to="/feed">Feed</Link>
          </li>
        </ul>
      </div>
      <form className="p-5 flex flex-col gap-5">
        <input
          className="py-2 px-8 bg-[#eeee] rounded-lg w-full"
          type="text"
          placeholder="Name of the grocery"
        />
        <input
          className="py-2 px-8 bg-[#eeee] rounded-lg w-full"
          type="number"
          placeholder="Grocery quantity"
        />
        <input
          className="py-2 px-8 bg-[#eeee] rounded-lg w-full"
          type="text"
          placeholder="Purchase Date"
        />
        <input
          className="py-2 px-8 bg-[#eeee] rounded-lg w-full"
          type="text"
          placeholder="Expiry Date"
        />
        <button className="w-full py-2 rounded-lg font-medium bg-[#111] text-white">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Home;
