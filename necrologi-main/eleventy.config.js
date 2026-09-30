const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({
    "src/assets": "assets",
  });

  eleventyConfig.addPassthroughCopy({
    "src/admin": "admin",
  });

  function parseDate(value) {
    if (!value) return null;
    if (DateTime.isDateTime(value)) return value;
    if (value instanceof Date) return DateTime.fromJSDate(value, { zone: "utc" });
    const iso = DateTime.fromISO(String(value), { zone: "Europe/Rome" });
    return iso.isValid ? iso : null;
  }

  eleventyConfig.addFilter("dateIt", (value) => {
    const dt = parseDate(value);
    return dt ? dt.setLocale("it").toFormat("d LLLL yyyy") : "";
  });

  eleventyConfig.addFilter("dateTimeIt", (value) => {
    const dt = parseDate(value);
    return dt ? dt.setZone("Europe/Rome").setLocale("it").toFormat("d LLLL yyyy, HH:mm") : "";
  });

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

  eleventyConfig.addCollection("necrologi", getNecrologi);

  eleventyConfig.addCollection("necrologiAttivi", (collectionApi) =>
    getNecrologi(collectionApi).filter(
      (item) => item.data.archiviato !== true
    )
  );

  eleventyConfig.addCollection("necrologiArchiviati", (collectionApi) =>
    getNecrologi(collectionApi).filter(
      (item) => item.data.archiviato === true
    )
  );

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
