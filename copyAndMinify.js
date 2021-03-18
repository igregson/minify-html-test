const minifyHtml = require("@minify-html/js");
const fs = require("fs");

const copyAndMinify = () => {
  const minifyConfig = minifyHtml.createConfiguration({
    minifyCss: true,
    minifyJs: true,
  });

  try {
    const htmlSrc = fs.readFileSync("./index-src.html", "utf8");
    const minified = minifyHtml.minify(htmlSrc, minifyConfig);
    fs.writeFileSync("index-dist.html", minified);
    console.log("Copied and minified index-dist.html");
  } catch (error) {
    console.error(error);
  }
};

module.exports = copyAndMinify;
