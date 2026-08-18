const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {

  // Copia assets nel sito finale
  eleventyConfig.addPassthroughCopy({
    "src/assets": "assets",
  });

  // Copia pannello amministratore
  eleventyConfig.addPassthroughCopy({
    "src/admin": "admin",
  });

  // Formato data italiano
  eleventyConfig.addFilter("dateIt", (value) => {
    if (!value) return "";

    const dt = DateTime.fromISO(String(value), {
      zone: "Europe/Rome",
    });

    return dt.isValid
      ? dt.setLocale("it").toFormat("d LLLL yyyy")
      : value;
  });

  // Formato data e ora italiano
  eleventyConfig.addFilter("dateTimeIt", (value) => {
    if (!value) return "";

    const dt = DateTime.fromISO(String(value), {
      zone: "Europe/Rome",
    });

    return dt.isValid
      ? dt.setLocale("it").toFormat("d LLLL yyyy, HH:mm")
      : value;
  });

  // Tutti i necrologi pubblicati
  function getNecrologi(collectionApi) {
    return collectionApi
      .getFilteredByGlob("src/necrologi/*.md")
      .filter((item) => item.data.pubblicato !== false)
      .sort(
        (a, b) =>
          new Date(b.data.data_decesso || b.date) -
          new Date(a.data.data_decesso || a.date)
      );
  }

  // Raccolta completa
  eleventyConfig.addCollection("necrologi", getNecrologi);

  // Necrologi attivi
  eleventyConfig.addCollection("necrologiAttivi", (collectionApi) => {
    return getNecrologi(collectionApi).filter(
      (item) => item.data.archiviato !== true
    );
  });

  // Necrologi archiviati
  eleventyConfig.addCollection("necrologiArchiviati", (collectionApi) => {
    return getNecrologi(collectionApi).filter(
      (item) => item.data.archiviato === true
    );
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site",
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
};
