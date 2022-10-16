import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDumbbell } from "@fortawesome/free-solid-svg-icons";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="App">
      <div className="w-[200px] h-[50px] flex items-center pl-10 py-10">
        <FontAwesomeIcon className="text-4xl text-green-600" icon={faDumbbell} />
        <h1 className="text-2xl font-sans font-bold ml-2 text-green-600">WorkOut</h1>
      </div>
        <Home />
    </div>
  );
}

export default App;
