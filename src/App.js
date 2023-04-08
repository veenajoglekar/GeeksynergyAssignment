import logo from "./logo.svg";
import "./App.css";
import Applayout from "./routes/Applayout";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Applayout />
      </BrowserRouter>
    </div>
  );
}

export default App;
