module.exports = {
  title: "HydraDX Docs",
  tagline: "Let's learn this",
  url: "https://docs.hydradx.io",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.png",
  organizationName: "galacticcouncil", // Usually your GitHub org/user name.
  projectName: "HydraDX-docs", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "HydraDX Documentation",
      logo: {
        alt: "HydraDX logo",
        src: "img/logo.svg",
      },
      items: [
        {
          to: "/",
          activeBasePath: "/",
          label: "Docs",
          position: "left",
        },
        {
          href: "https://hydradx.io",
          label: "HydraDX Homepage",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Community",
          items: [
            {
              label: "Discord",
              href: "https://discord.gg/HDNPFFrcnW",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/hydra_dx",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Intergalactic, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "/",
          editUrl: "https://github.com/galacticcouncil/HydraDX-docs/edit/main/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
