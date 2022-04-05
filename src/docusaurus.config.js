// const lightCodeTheme = require("prism-react-renderer/themes/github");
// const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {


  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      announcementBar: {
        id: 'support_us',
        content:
          '<a target="_blank" rel="noopener noreferrer" href="https://opensource.fb.com/support-ukraine" style="padding-right: 50px;">Support Ukraine 🇺🇦</a>Help Provide Humanitarian Aid to Ukraine',
        backgroundColor: '#0B0B45',
        textColor: '#FFFFFF',
        isCloseable: false,

      },
      // algolia: {
      //   // The application ID provided by Algolia
      //   appId: "YOUR_APP_ID",

      //   // Public API key: it is safe to commit it
      //   apiKey: "YOUR_SEARCH_API_KEY",

      //   indexName: "YOUR_INDEX_NAME",

      //   // Optional: see doc section below
      //   contextualSearch: true,

      //   // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
      //   externalUrlRegex: "external\\.com|domain\\.com",

      //   // Optional: Algolia search parameters
      //   searchParameters: {},

      //   //... other Algolia params
      // },
    }),
};

module.exports = config;

export default config;
