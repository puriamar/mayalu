import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Puzzle from "./components/puzzle";

function App() {
  return (
    <Router basename="/mayalu/">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/puzzle" element={<Puzzle />} />
      </Routes>
    </Router>
  );
}

export default App;
