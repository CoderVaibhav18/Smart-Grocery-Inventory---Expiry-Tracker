import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Feed from "./pages/feed";
import "./App.css";
import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="h-screen w-screen ">
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-5">
            {/* Logo */}
            <h3 className="text-2xl font-semibold">Grocery Inventory</h3>

            {/* Desktop Menu */}
            <ul className=" hidden md:flex items-center gap-8">
              <li className="text-xl font-medium hover:text-green-600">
                <Link to="/">Home</Link>
              </li>
              <li className="text-xl font-medium hover:text-green-600">
                <Link to="/feed">Feed</Link>
              </li>
            </ul>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-3xl focus:outline-none"
            >
              <i className="ri-menu-line"></i>
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <ul className="md:hidden flex fixed mt-5 text-center  w-full bg-white flex-col gap-4 pb-4">
              <li className="text-lg font-medium hover:text-green-600">
                <Link to="/" onClick={() => setIsOpen(false)}>
                  Home
                </Link>
              </li>
              <li className="text-lg font-medium hover:text-green-600">
                <Link to="/feed" onClick={() => setIsOpen(false)}>
                  Feed
                </Link>
              </li>
            </ul>
          )}
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/feed" element={<Feed />} />
      </Routes>
    </div>
  );
}

export default App;
