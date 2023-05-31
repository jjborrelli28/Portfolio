const withTM = require("next-transpile-modules")(["@space-ui"]);

module.exports = withTM({
  reactStrictMode: true,
  images: {
    domains: ["images.ctfassets.net"],
    loader: "imgix",
    path: "https:",
    deviceSizes: [600, 640, 750, 828, 1080, 1200, 1920],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
});
