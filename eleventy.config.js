import { DateTime } from "luxon";

export default function (eleventyConfig) {
  eleventyConfig.setDataDeepMerge(true);
  eleventyConfig.addFilter("date", (date, format, options) =>
    DateTime.fromJSDate(date, { zone: "utc" }).toFormat(format, options)
  );
  eleventyConfig.addPassthroughCopy("src/CNAME");
  eleventyConfig.addPassthroughCopy("node_modules/@fontsource/playpen-sans");

  eleventyConfig.addPassthroughCopy("src/icfp25/index.html");
  eleventyConfig.addPassthroughCopy("src/icfp25/editor.bundle.min.js");
  eleventyConfig.addPassthroughCopy("src/icfp25/editor.bundle.min.js.map");
  eleventyConfig.addPassthroughCopy("src/icfp25/agda/Agda.css");
  eleventyConfig.addPassthroughCopy("src/icfp25/Multi-Stage Programming with Splice Variables.pdf");
  eleventyConfig.addPassthroughCopy("node_modules/water.css");
  eleventyConfig.addPassthroughCopy("node_modules/@fontsource/fira-code");

  eleventyConfig.addPassthroughCopy("src/masters-thesis/agda/Agda.css");
  eleventyConfig.addPassthroughCopy("src/masters-thesis/thesis.pdf");
  eleventyConfig.addPassthroughCopy("fonts");

  return {
    dir: {
      input: "src",
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
};
