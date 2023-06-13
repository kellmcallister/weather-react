import "./App.css";
import Search from "./Search";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>✨Explore Weather✨</h1>{" "}
      </header>{" "}
      <div className="container">
        <div className="card">
          <div className="card-body">
            <div className="search-row">
              <Search />
            </div>
          </div>
        </div>
      </div>
      <div className="github-link">
        Coded by{" "}
        <a
          href="https://www.kellmcallister.com"
          target="_blank"
          rel="noreferrer"
        >
          Kelly McAllister
        </a>{" "}
        - check out my projects on
        <a
          href="https://github.com/kellmcallister"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          GitHub!
        </a>
      </div>
    </div>
  );
}

export default App;
