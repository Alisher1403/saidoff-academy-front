module.exports = {
  i18n: {
    defaultLocale: "uz",
    locales: ["ru", "uz"],
    localeDetection: false,
  },
  debug: true,
  reloadOnPrerender: true,
  localePath:
    typeof window === "undefined"
      ? require("path").resolve("./public/locales")
      : "/public/locales",
};
