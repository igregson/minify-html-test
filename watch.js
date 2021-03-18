const chokidar = require("chokidar");
const args = process.argv.slice(2);
const copyOnly = require("./copyOnly");

function watcher() {
  const htmlWatcher = chokidar.watch(`index-src.html`);

  // The test case, demonstrating that requiring minify-html (i.e. `require("@minify-html/js")`)
  // prevents the process from exiting and leaves a hanging process.
  if (args.includes("--minify")) {
    console.log("Watching (will minify) 👍");
    const copyAndMinify = require("./copyAndMinify");
    htmlWatcher.on("change", copyAndMinify);
  }

  // The base test case to test that the general wiring here works properly.
  else {
    console.log("Watching (copy only) 👍");
    htmlWatcher.on("change", copyOnly);
  }
}

module.exports = watcher();
