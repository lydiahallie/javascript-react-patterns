const theme = {
  titleSuffix: " | JavaScript Patterns",
  search: true,
  unstable_flexsearch: true,
  unstable_staticImage: true,
  floatTOC: true,
  font: false,
  // github: "https://github.com/lydiahallie/javascript-react-patterns",
  // projectLink: "https://github.com/lydiahallie/javascript-react-patterns",
  logo: () => (
    <>
      <img
        src="/logo.svg"
        height="25"
        width="25"
        style={{ marginRight: "1em" }}
      />
      <h1>
        JavaScript Patterns <span style={{ opacity: 0.2 }}></span>
      </h1>
    </>
  ),
  head: function Head(props) {
    return (
      <>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="apple-touch-icon" sizes="180x180" href="/javascript.svg" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/javascript.svg"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/javascript.svg"
        />
        <link rel="mask-icon" href="/javascript.svg" color="#000000" />
        <link rel="shortcut icon" href="/javascript.svg" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="theme-color" content="#000" />

        <meta
          property="og:image"
          content="https://javascriptpatterns.vercel.app/og-image2.png"
        />
        <meta
          property="og:title"
          content={`${props.title} | JavaScript Patterns`}
        />
        <meta
          property="og:description"
          content="Website created for the FrontendMasters course on JavaScript Patterns by Lydia Hallie"
          key="description"
        />
        <meta
          property="og:url"
          content="https://javascriptpatterns.vercel.app"
        />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Website for the FrontendMasters course on JavaScript Patterns by Lydia Hallie"
        />
        <meta name="author" content="Lydia Hallie" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@lydiahallie" />
        <meta name="twitter:creator" content="@lydiahallie" />
        <meta
          name="twitter:title"
          content={`${props.title} | JavaScript Patterns`}
        />
        <meta
          name="twitter:description"
          content="Website created for the FrontendMasters course on JavaScript Patterns by Lydia Hallie"
        />
        <meta
          name="twitter:image"
          content="https://javascriptpatterns.vercel.app/og-image2.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="692" />
      </>
    );
  },
  darkMode: true,
  footerText: `${new Date().getFullYear()} © Lydia Hallie`,
  nextThemes: {
    defaultTheme: "dark",
  },
};
export default theme;
