import React from "react";
import ReactDOM from "react-dom/client";
import { Settings } from "./settings";

console.log("r", React);
const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <Settings />
  </React.StrictMode>,
);

console.log(React);
