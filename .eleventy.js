const { EleventyRenderPlugin } = require("@11ty/eleventy");
const lazyImagesPlugin = require('eleventy-plugin-lazyimages');

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("img");
    eleventyConfig.addLayoutAlias("default", "layouts/default.liquid");
    eleventyConfig.addWatchTarget("./_assets/css/");
    eleventyConfig.addPlugin(EleventyRenderPlugin);
    eleventyConfig.addPlugin(lazyImagesPlugin);
};
