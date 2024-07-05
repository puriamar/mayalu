import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Quiz from "./components/quiz";
import Moments from "./components/moments";

function App() {
  return (
    <Router basename="/mayalu/">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/moments" element={<Moments />} />
      </Routes>
    </Router>
  );
}

export default App;
