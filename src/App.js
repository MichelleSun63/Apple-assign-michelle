import "./styles.css";
import logo from "./Netflix_2015_logo.svg";
import Display from "./components/Display";
export default function App() {
  return (
    <div className="App">
      <div>
        <img className="logo" src={logo} alt="netflix logo" />
      </div>
      <Display />
    </div>
  );
}
