const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/akbarisanto/projects/akbarisanto-new/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/home/akbarisanto/projects/akbarisanto-new/src/pages/404.js"))),
  "component---src-pages-index-tsx": hot(preferDefault(require("/home/akbarisanto/projects/akbarisanto-new/src/pages/index.tsx")))
}

