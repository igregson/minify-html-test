This is a minimal test case to demonstrate a hanging-process in the `@minify-html/js` package when requiring the package within a long-running Node process.

After cloning, run `npm install`.

**To test the wiring**

`node ./watch` OR `npm run watch`

This creates a Chokidar watcher that will watch `./index-src.html` for changes and, on change, copy it to `./index-dist.html`.

**To reproduce the bug**

`node ./watch --minify` OR `npm run watchAndMinify`

This does the same as above, except that it minifies the HTML as well. The bug is that the process hangs. 

If running it directly via Node (i.e. `node ./watch --minify`), it's impossible to quite the process via the command line (i.e. `ctrl` + `c`). 

If running it via NPM (i.e. `npm run watchAndMinify`), it *is* possible to quite the NPM task on the command line, but the actual CPU process remains running.