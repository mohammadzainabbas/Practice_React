import * as Sentry from "@sentry/browser";

const init = () => {
  Sentry.init({
    dsn: "https://d84fa15d83fe47589cef9b8b45223c0c@sentry.io/1472091"
  });
};

const log = error => {
  Sentry.captureException(error);
};

export default {
  init,
  log
};
