import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ApiProvier } from "./api/ApiContext.jsx";
import "./index.css";
import "./reset.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ApiProvier>
      <App />
    </ApiProvier>
  </React.StrictMode>
);
