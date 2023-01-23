import { defineConfig } from "vitepress";

export default defineConfig({
  base: "/",
  lang: "en-US",
  title: "Shall we play a game?",
  titleTemplate: "A blog about gamedev",
  description: "A blog about gamedev with Cocos Creator",
  appearance: 'dark',
  lastUpdated: true,

  themeConfig: {
    nav: [
      {
        text: "Articles", items: [
          {
            text: "🏃‍♂️ 5 ways to move in CC",
            link: "/articles/cocos-creator/fundamentals/five-ways-to-move-in-cocos-creator/",
          },
          {
            text: "🕹️ Tiled and Collisions in CC",
            link: "/articles/cocos-creator/fundamentals/tiled-and-collisions/",
          },
          {
            text: "🧭 Pathfinding",
            link: "/articles/cocos-creator/pathfinding-2d/",
          },
          {
            text: `🕹️ Shoot 'em Up`,
            link: "/articles/cocos-creator/shoot-em-up-in-cocos-creator/",
          },
        ]
      },
      { text: "About Me", link: "/pages/about-me" },
      { text: "Links", link: "/articles/cocos-creator/links/" },
    ],
    sidebar: [
      {
        text: "Fundamentals",
        items: [
          {
            text: "🏃‍♂️ 5 ways to move in CC",
            link: "/articles/cocos-creator/fundamentals/five-ways-to-move-in-cocos-creator/",
          },
          {
            text: "🕹️ Tiled and Collisions in CC",
            link: "/articles/cocos-creator/fundamentals/tiled-and-collisions/",
          },
        ],
      },
      {
        text: "Pathfinding 2D in CC",
        collapsible: true,
        items: [
          {
            text: "🧭 Pathfinding",
            link: "/articles/cocos-creator/pathfinding-2d/",
          },
          {
            text: "👾 A* Algorithm",
            link: "/articles/cocos-creator/pathfinding-2d/a-star-algorithm",
          },
          {
            text: "🧱 Tiled",
            link: "/articles/cocos-creator/pathfinding-2d/tiled",
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
            text: `📽️ The Scenes`,
            link: "/articles/cocos-creator/shoot-em-up-in-cocos-creator/the_scenes",
          },
          {
            text: `🚀 The Player`,
            link: "/articles/cocos-creator/shoot-em-up-in-cocos-creator/the_player",
          },
          {
            text: `👾 The Enemies`,
            link: "/articles/cocos-creator/shoot-em-up-in-cocos-creator/the_enemies",
          },
        ],
      },
      {
        text: "Resources",
        collapsible: true,
        items: [
          {
            text: `Links`,
            link: "/articles/cocos-creator/links/",
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
    ["meta", { name: "twitter:card", content: "summary_large_image" }],
    ["meta", { property: "twitter:domain", content: "blog.tabanella.me" }],
    ["meta", { property: "twitter:url", content: "https://blog.tabanella.me" }],
    ["meta", { name: "twitter:title", content: "Shall we play a game?" }],
    ["meta", { name: "twitter:description", content: "Just playing around with javascript" }],
    ["meta", { name: "twitter:image", content: "https://blog.tabanella.me/images/social.png" }],
    ["meta", { property: "og:url", content: "https://blog.tabanella.me" }],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:title", content: "Shall we play a game?" }],
    ["meta", { property: "og:description", content: "Just playing around with Cocos Creator" }],
    ["meta", { property: "og:image", content: "https://blog.tabanella.me/images/social.png" }],
    [
      "link",
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
    ],
    [
      'script',
      { async: 'true', src: 'https://www.googletagmanager.com/gtag/js?id=G-X8Y4V0KCB3' }
    ],
    [
      'script',
      {},
      "window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'G-X8Y4V0KCB3');"
    ],
    // favicon
    [
      "link",
      { rel: "icon", type: "image/png", href: "/favicon.png" },
    ]
  ],
});




