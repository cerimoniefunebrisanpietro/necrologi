const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({
    "src/assets": "assets",
  });

  eleventyConfig.addPassthroughCopy({
    "src/admin": "admin",
  });

  eleventyConfig.addFilter("dateIt", (value) => {
    if (!value) return "";

    const dt = DateTime.fromISO(String(value), {
      zone: "Europe/Rome",
    });

    return dt.isValid
      ? dt.setLocale("it").toFormat("d LLLL yyyy")
      : value;
  });

  eleventyConfig.addFilter("dateTimeIt", (value) => {
    if (!value) return "";

    const dt = DateTime.fromISO(String(value), {
      zone: "Europe/Rome",
    });

    return dt.isValid
      ? dt.setLocale("it").toFormat("d LLLL yyyy, HH:mm")
      : value;
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
