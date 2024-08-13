import ClockHeading from "./components/ClockHeading";
import ClockSlogan from "./components/ClockSlogan";
import CurrentTime from "./components/CurrentTime";
import Fooditems from "./components/Fooditems";

function App() {
  return (
    <>
      <center>
        <div className="centered-content">
          <ClockHeading></ClockHeading>
          <Fooditems></Fooditems>
          <ClockSlogan></ClockSlogan>
          <CurrentTime></CurrentTime>
        </div>
      </center>
    </>
  );
}

export default App;
