// Home.js
import React from "react";
import Countdown from "./countdown";
import { Link } from "react-router-dom";

function Home() {
  const targetDate = "August 23, 2024 10:00:00 PST";
  return (
    <div>
      <Countdown targetDate={targetDate} />
      <br />
      <Link to="/puzzle">
        <button>Solve Puzzle</button>
      </Link>
    </div>
  );
}

export default Home;
