import { defineConfig } from "vitepress";

export default defineConfig({
  base: "/",
  lang: "en-US",
  title: "Shall we play a game?",
  description: "Just playing around with javascript",
  appearance: 'dark',
  lastUpdated: true,

  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Cocos Creator Basics", link: "/articles/cocos-creator/basics/five-ways-to-move-in-cocos-creator/" },
      { text: "Shoot 'em up in CC", link: "/articles/cocos-creator/shoot-em-up-in-cocos-creator/" },
    ],
    sidebar: [
      {
        text: "Basics",
        items: [
          {
            text: "🏃‍♂️ 5 ways to move in CC",
            link: "/articles/cocos-creator/basics/five-ways-to-move-in-cocos-creator/",
          },
        ],
      },
      {
        text: "Shoot 'em up in CC",
        collapsible: true,
        items: [
          {
            text: `🕹️ The Game`,
            link: "/articles/cocos-creator/shoot-em-up-in-cocos-creator/",
          },
          {
            text: `🚀 The Player`,
            link: "/articles/cocos-creator/shoot-em-up-in-cocos-creator/the_player",
          },
          {
            text: `👾 The Enemies`,
            link: "/articles/cocos-creator/shoot-em-up-in-cocos-creator/the_enemies",
          },
          {
            text: `📺 The UI`,
            link: "/articles/cocos-creator/shoot-em-up-in-cocos-creator/the_ui",
          },
        ],
      },
      // { text: 'Articles 2', link: '/articles/2' },
    ],
    footer: {
      // message: 'Released under the MIT License.',
      copyright: "Copyright © 2022-present Daniele Tabanella",
    },
    editLink: {
      pattern: "https://github.com/theRenard/blog/edit/main/docs/:path",
      text: "Edit this page on GitHub",
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/theRenard" },
      { icon: "mastodon", link: "https://mastodon.social/@monsieurLeRenard" },
      {
        icon: "linkedin",
        link: "https://www.linkedin.com/in/danieletabanella/",
      },
    ],
  },
  head: [
    ["meta", { name: "theme-color", content: "#d648d5" }],
    [
      "link",
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
    ],
    [
      'script',
      { async: 'true', src: 'https://www.googletagmanager.com/gtag/js?id=G-71Q57ZLBY9' }
    ],
    [
      'script',
      {},
      "window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'G-71Q57ZLBY9');"
    ]
  ],
});
