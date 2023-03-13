import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const div = document.getElementById("root");
const root = ReactDOM.createRoot(div);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
