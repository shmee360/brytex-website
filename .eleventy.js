const { EleventyRenderPlugin } = require("@11ty/eleventy");

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("img");
    eleventyConfig.addPassthroughCopy("robots.txt");
    eleventyConfig.addLayoutAlias("default", "layouts/default.liquid");
    eleventyConfig.addWatchTarget("./_assets/css/");
    eleventyConfig.addWatchTarget("./_assets/js/");
    eleventyConfig.addPlugin(EleventyRenderPlugin);
};
