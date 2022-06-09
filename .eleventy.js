module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("img");
    eleventyConfig.addLayoutAlias('default', 'layouts/default.njk');
};