import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  console.log("testts");
  return (
    <div>
      <h1>Hello, React</h1>
      <p>This is a simple React component</p>
    </div>
  );
}

function Test() {
  return (
    <>
      <p>This is from the test function.</p>
      <video src="https://www.amazon.in/Lenovo-i5-12450HX-39-6cm-300Nits-83GS00CKIN/dp/B0D8L6R3T3/ref=sr_1_3?crid=2IOTJADMW3V3X&dib=eyJ2IjoiMSJ9.7epuzCvP__VoJJehbxKINXQglosE1hd2G2ETgDEWm8WcV7S751D2KhYGn5Q5I8ryz_dy1SoAdsvSHzNVgcFFm2iL-Eqv-ahqsFr3sITx1uXod1nTGm82febxAryTxLGdhID9tS-8Gp9xM_aNhrMb0fbNX03ZKSyPNHSKccExOnMC78CSPyKpPDquJH__6Z-DUlD_7uzmSgd3meX5X_HntqEd6PFx4BjXbduuxAW_yiw.6KfH2qY62XZnec_4thpLHKB3YeiNy3DqBB9-6wxrUGU&dib_tag=se&keywords=lenovo+loq&nsdOptOutParam=true&qid=1735750488&sprefix=lenovo+loq%2Caps%2C259&sr=8-3
      
      "></video>
    </>
  );
}

// Parent Component
function ParentComponent() {
  return (
    <div>
      <App />
      <Test />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ParentComponent />);
