// Home.js
import React from "react";
import Countdown from "./countdown";
import { Link } from "react-router-dom";
import firstDate from "../assets/firstDate.svg";

function Home() {
  const targetDate = "August 23, 2024 16:00:00 PST";
  return (
    <div>
      <h2>I cannot wait to meet you Mayalu and recreate this moment</h2>
      <img src={firstDate} width={400} />
      <Countdown targetDate={targetDate} />
      <br />
      <Link to="/quiz">
        <button style={{ margin: "5px" }}>Wanna play quiz?</button>
      </Link>
      <Link to="/moments">
        <button style={{ margin: "5px" }}>Check some moments</button>
      </Link>
    </div>
  );
}

export default Home;
