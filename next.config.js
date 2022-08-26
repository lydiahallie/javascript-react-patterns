const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.js",
  unstable_flexsearch: true,
  unstable_staticImage: true,
});

module.exports = withNextra({
  // reactStrictMode: true,
  experiments: {
    esmExternals: true,
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/patterns',
        permanent: true,
      },
    ]
  },
});
