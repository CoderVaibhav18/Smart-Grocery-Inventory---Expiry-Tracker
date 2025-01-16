import React from "react";
import { Link } from "react-router-dom";

const Feed = () => {
  return (
    <div>
      <div className="text-center h-[60px] flex items-center justify-around">
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
    </div>
  );
};

export default Feed;
