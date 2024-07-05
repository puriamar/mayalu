import "./App.css";
import Countdown from "./components/countdown";

function App() {
  const targetDate = "August 23, 2024 10:00:00 PST";

  return (
    <>
      <div>
        <Countdown targetDate={targetDate} />
      </div>
    </>
  );
}

export default App;
