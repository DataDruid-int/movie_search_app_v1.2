import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import { App } from "App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/movie_search_app_v1.2">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
