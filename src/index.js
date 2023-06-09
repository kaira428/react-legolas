import React from "react";
import ReactDOM from "react-dom/client";
import "./custom.scss";

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import MainLayout from "./ui/MainLayout";
import { Provider } from "react-redux";
import { store } from "./store/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <MainLayout>
        <Provider store={store}>
          <App />
        </Provider>
      </MainLayout>
    </BrowserRouter>
  </React.StrictMode>
);
