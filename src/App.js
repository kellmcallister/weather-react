import "./App.css";
import Search from "./Search";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <h1>✨Explore Weather✨</h1>
          <div className="card">
            <div className="card-body">
              <div className="search-row">
                <Search />
              </div>
            </div>
          </div>
        </div>
        <div className="github-link">
          Coded by Kelly McAllister - check out my projects on
          <a
            href="https://github.com/kellmcallister"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            GitHub!
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;
