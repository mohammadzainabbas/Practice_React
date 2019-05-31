import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import * as Sentry from "@sentry/browser";

Sentry.init({
  dsn: "https://d84fa15d83fe47589cef9b8b45223c0c@sentry.io/1472091"
});

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
