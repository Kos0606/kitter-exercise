import "./styles.css";
import meows from "./meows.json";
import Timeline from "./components/Timeline";


export default function App() {
  return (
    <div className="App">
      <h1>Kitter</h1>
      <Timeline meows = {meows}/>
    </div>
  );
}
