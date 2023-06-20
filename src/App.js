import Search from "./Search";
import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>✨Weather App✨</h1>{" "}
      </header>{" "}
      <div className="container">
        <div className="card">
          <div className="card-body">
            <div className="search-row">
              <Search defaultCity="Austin" />
            </div>
          </div>
        </div>
      </div>
      <div className="github-link">
        Coded by{" "}
        <a
          href="https://www.kellmcallister.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Kelly McAllister
        </a>{" "}
        - check out my projects on
        <a
          href="https://github.com/kellmcallister"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          GitHub!
        </a>
      </div>
    </div>
  );
}

export default App;
