import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  console.log("testts");
  return (
    <div>
      <h1>Hello, React</h1>
      <p>This is a simple React component.</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
