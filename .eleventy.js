const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
  eleventyConfig.setDataDeepMerge(true);
  eleventyConfig.addFilter("date", (date, format, options) =>
    DateTime.fromJSDate(date, { zone: "utc" }).toFormat(format, options)
  );
  eleventyConfig.addPassthroughCopy("src/CNAME");
  eleventyConfig.addPassthroughCopy("node_modules/@fontsource/playpen-sans");
  eleventyConfig.addPassthroughCopy("src/masters-thesis/agda/Agda.css");
  return {
    dir: {
      input: "src",
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
};
