import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import HeaderPage from "./Components/Header_Page";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
const header = ReactDOM.createRoot(document.getElementById("header"));
header.render(
  <React.StrictMode>
    <HeaderPage />
  </React.StrictMode>
);
reportWebVitals();
