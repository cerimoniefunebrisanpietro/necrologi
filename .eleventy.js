const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy({
    "src/assets": "assets"
  });

  eleventyConfig.addPassthroughCopy({
    "src/admin": "admin"
  });

  eleventyConfig.addFilter("dateIt", value => {
    if (!value) return "";

    const dt = DateTime.fromISO(String(value), {
      zone: "Europe/Rome"
    });

    return dt.isValid
      ? dt.setLocale("it").toFormat("d LLLL yyyy")
      : value;
  });

  eleventyConfig.addFilter("dateTimeIt", value => {
    if (!value) return "";

    const dt = DateTime.fromISO(String(value), {
      zone: "Europe/Rome"
    });

    return dt.isValid
      ? dt.setLocale("it").toFormat("d LLLL yyyy, HH:mm")
      : value;
  });

  eleventyConfig.addCollection("necrologi", collectionApi => {
    return collectionApi
      .getFilteredByGlob("src/necrologi/*.md")
      .filter(item => item.data.pubblicato !== false)
      .sort(
        (a, b) =>
          new Date(b.data.data_decesso || b.date) -
          new Date(a.data.data_decesso || a.date)
      );
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};
