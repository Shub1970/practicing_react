import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Component } from "react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// function NonStateClock() {
//   const time = new Date();
//   const currentDate = time.getDate();
//   const currentTime = time.toLocaleTimeString();
//   console.log(time);
//   const element = (
//     <>
//       <h3>{currentDate}</h3>
//       <h3>{currentTime}</h3>
//     </>
//   );
//   root.render(element);
// }

// setInterval(NonStateClock, 1000);
