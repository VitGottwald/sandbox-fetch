import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import fetchSomething from "./fetchSomething";

function App() {
  const [response, setResponse] = useState(null);
  useEffect(() => {
    fetchSomething()
      .then(response => response.json())
      .then(json => JSON.stringify(json, null, 4))
      .then(setResponse);
  }, []);

  return (
    <div className="App">
      <h2>Query Response</h2>
      <pre>{response}</pre>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
