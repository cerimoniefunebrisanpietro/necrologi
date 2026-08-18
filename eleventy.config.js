const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addPassthroughCopy({ "src/admin": "admin" });

  function toDateTime(value) {
    if (!value) return null;

    if (value instanceof Date) {
      return DateTime.fromJSDate(value, { zone: "Europe/Rome" });
    }

    const str = String(value).trim();

    let dt = DateTime.fromISO(str, { zone: "Europe/Rome" });
    if (dt.isValid) return dt;

    const jsDate = new Date(str);
    if (!Number.isNaN(jsDate.getTime())) {
      return DateTime.fromJSDate(jsDate, { zone: "Europe/Rome" });
    }

    return null;
  }

  eleventyConfig.addFilter("dateIt", (value) => {
    const dt = toDateTime(value);
    return dt && dt.isValid
      ? dt.setLocale("it").toFormat("dd LLLL yyyy")
      : "";
  });

  eleventyConfig.addFilter("dateTimeIt", (value) => {
    const dt = toDateTime(value);
    return dt && dt.isValid
      ? dt.setLocale("it").toFormat("dd LLLL yyyy 'alle' HH:mm")
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

