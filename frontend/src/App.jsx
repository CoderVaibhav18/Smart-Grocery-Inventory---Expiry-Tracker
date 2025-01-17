import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Feed from "./pages/feed";

function App() {
  return (
    <div className="h-screen w-screen">
      <div className="text-center p-5 flex items-center justify-between">
        <h3 className="text-2xl font-semibold ">Grocery Inventory</h3>
        <ul className="flex items-center gap-5  justify-around">
          <li className="text-xl font-medium">
            <Link to="/">Home</Link>
          </li>
          <li className="text-xl font-medium">
            <Link to="/feed">Feed</Link>
          </li>
        </ul>
        <h3 className="text-2xl hidden font-bold">
          <i className="ri-bar-chart-horizontal-line"></i>
        </h3>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/feed" element={<Feed />} />
      </Routes>
    </div>
  );
}

export default App;
