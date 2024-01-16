import logo from "./logo.svg";
import "./App.css";
import Introduction from "./Components/Introduction";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <h2 className="privacy-policy">
          <span className="privacy">Privacy</span> <span className="policy">Policy</span>
        </h2>
      </div>

      <div className="content-holder">
      <Introduction />
      </div>
    </div>
  );
}

export default App;
