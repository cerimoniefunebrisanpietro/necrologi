const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {

  eleventyConfig.addPassthroughCopy({
    "src/assets": "assets"
  });

  eleventyConfig.addPassthroughCopy({
    "src/admin": "admin"
  });

  function convertiData(value) {
    if (!value) return null;

    // Se YAML/Eleventy ha già trasformato la data in JavaScript Date
    if (
      Object.prototype.toString.call(value) === "[object Date]" &&
      !isNaN(value.getTime())
    ) {
      return DateTime.fromJSDate(value, { zone: "utc" })
        .setZone("Europe/Rome");
    }

    // Se arriva come stringa ISO
    const testo = String(value);

    let dt = DateTime.fromISO(testo, {
      zone: "Europe/Rome"
    });

    // Ultimo tentativo per eventuali stringhe JavaScript/GMT
    if (!dt.isValid) {
      const jsDate = new Date(value);

      if (!isNaN(jsDate.getTime())) {
        dt = DateTime.fromJSDate(jsDate, { zone: "utc" })
          .setZone("Europe/Rome");
      }
    }

    return dt.isValid ? dt : null;
  }

  eleventyConfig.addFilter("dateIt", (value) => {
    const dt = convertiData(value);

    if (!dt) return "";

    return dt
      .setLocale("it")
      .toFormat("d LLLL yyyy");
  });

  eleventyConfig.addFilter("dateTimeIt", (value) => {
    const dt = convertiData(value);

    if (!dt) return "";

    return dt
      .setLocale("it")
      .toFormat("d LLLL yyyy 'alle' HH:mm");
  });

  function getNecrologi(collectionApi) {
    return collectionApi
      .getFilteredByGlob("src/necrologi/*.md")
      .filter((item) => item.data.pubblicato !== false)
      .sort((a, b) => {
        const dataA = new Date(a.data.data_decesso || a.date);
        const dataB = new Date(b.data.data_decesso || b.date);

        return dataB - dataA;
      });
  }

  eleventyConfig.addCollection("necrologi", getNecrologi);

  eleventyConfig.addCollection(
    "necrologiAttivi",
    (collectionApi) =>
      getNecrologi(collectionApi).filter(
        (item) => item.data.archiviato !== true
      )
  );

  eleventyConfig.addCollection(
    "necrologiArchiviati",
    (collectionApi) =>
      getNecrologi(collectionApi).filter(
        (item) => item.data.archiviato === true
      )
  );

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
