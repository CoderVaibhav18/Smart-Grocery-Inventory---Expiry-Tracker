import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Feed from "./pages/feed";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/feed" element={<Feed />} />
    </Routes>
  );
}

export default App;
