import React from "react";
import ReactDOM from "react-dom/client";
import "./CSS/index.css";
import "./CSS/global.css";
import "./CSS/normalize.css";
import "./CSS/all.min.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
