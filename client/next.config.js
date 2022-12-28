const path = require("path");
// const withSass = require("@zeit/next-sass");

module.exports = {
  sassOptions: {
    includePaths: [path.resolve(__dirname, "./pages")],
  },
};

// module.exports = withSass();
