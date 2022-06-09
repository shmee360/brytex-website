const fs = require("fs");
const filesize = require("file-size");

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("img");
    eleventyConfig.addLayoutAlias('default', 'layouts/default.liquid');
    eleventyConfig.addFilter("filesize", (path) => (
        fs.statSync(path) ?
            filesize(fs.statSync(path).size).human() :
            ""));
};