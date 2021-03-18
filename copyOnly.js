const fs = require("fs");

const copyOnly = () => {
  try {
    const htmlSrc = fs.readFileSync("./index-src.html", "utf8");
    fs.writeFileSync("index-dist.html", htmlSrc);
    console.log("Copied index-src to index-dist.html");
  } catch (error) {
    console.error(error);
  }
};

module.exports = copyOnly;
