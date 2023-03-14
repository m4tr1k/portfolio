const path = require("path");

const LANGUAGES = ["en", "pt"];
// if it is the server, then the full path, if the client, then the relative path.
const localePath =
  typeof window === "undefined"
    ? path.resolve("public", "locales")
    : "/public/locales";

module.exports = {
  i18n: {
    defaultLocale: "en",
    locales: LANGUAGES,
    localeDetection: false,
  },
};
