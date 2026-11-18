// Protezione degli annunci non ancora autorizzati o approvati dal personale.
module.exports = {
  eleventyComputed: {
    permalink(data) {
      if (data.pubblicato !== true || data.autorizzazione_famiglia !== true) return false;
      return "/anniversari/" + data.page.fileSlug + "/index.html";
    }
  }
};
