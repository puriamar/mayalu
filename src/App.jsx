import sampleLogo from "./assets/sample.svg";
import "./App.css";
import Countdown from "./components/countdown";

function App() {
  const targetDate = "August 23, 2024 10:00:00 PST";

  return (
    <>
      <div>
        <a
          style={{ fontSize: "0.1em", marginRight: "0.5em" }}
          href="https://www.freepik.com/free-photo/funny-german-shepherd-dog-3d-illustration_13880097.htm#fromView=search&page=1&position=7&uuid=4444a24b-693b-48b7-a98e-848ba92a5b11"
        >
          Image by julos on Freepik
        </a>
        <a target="_blank">
          <img src={sampleLogo} className="logo react" alt="React logo" />
        </a>

        <Countdown targetDate={targetDate} />
      </div>
    </>
  );
}

export default App;
