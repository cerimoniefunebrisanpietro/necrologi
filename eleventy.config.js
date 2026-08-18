const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {

  eleventyConfig.addPassthroughCopy({
    "src/assets": "assets",
  });

  eleventyConfig.addPassthroughCopy({
    "src/admin": "admin",
  });

  // DATA ITALIANA: 10 ottobre 1940
  eleventyConfig.addFilter("dateIt", (value) => {
    if (!value) return "";

    let dt;

    if (value instanceof Date) {
      dt = DateTime.fromJSDate(value, { zone: "Europe/Rome" });
    } else {
      dt = DateTime.fromISO(String(value), { zone: "Europe/Rome" });
    }

    return dt.isValid
      ? dt.setLocale("it").toFormat("d LLLL yyyy")
      : "";
  });

  // DATA + ORA ITALIANA: 18 agosto 2026 alle 19:14
  eleventyConfig.addFilter("dateTimeIt", (value) => {
    if (!value) return "";

    let dt;

    if (value instanceof Date) {
      dt = DateTime.fromJSDate(value, { zone: "Europe/Rome" });
    } else {
      dt = DateTime.fromISO(String(value), {
        zone: "Europe/Rome",
      });
    }

    return dt.isValid
      ? dt.setLocale("it").toFormat("d LLLL yyyy 'alle' HH:mm")
      : "";
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
