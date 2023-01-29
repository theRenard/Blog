import { defineConfig } from "vitepress";

export default defineConfig({
  base: "/",
  lang: "en-US",
  title: "🌲 Renard Land 🌲",
  titleTemplate: "Gamedev with Cocos Creator",
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
      { text: "About Me 🦊", link: "/pages/about-me" },
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
    ["meta", { property: "twitter:domain", content: "renard.land" }],
    ["meta", { property: "twitter:url", content: "https://renard.land" }],
    ["meta", { name: "twitter:title", content: "🌲 Renard Land 🌲" }],
    ["meta", { name: "twitter:description", content: "Gamedev with Cocos Creator" }],
    ["meta", { name: "twitter:image", content: "https://renard.land/images/social.png?v=1" }],
    ["meta", { property: "og:url", content: "https://renard.land" }],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:title", content: "🌲 Renard Land 🌲" }],
    ["meta", { property: "og:description", content: "Gamedev with Cocos Creator" }],
    ["meta", { property: "og:image", content: "https://renard.land/images/social.png?v=1" }],
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
    // tag manager
    [
      'script',
      {},
      "(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\nnew Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\nj=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=\n'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);\n})(window,document,'script','dataLayer','GTM-5PGDNZR');"
    ],
    // <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png?v=1">
    // <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png?v=1">
    // <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png?v=1">
    // <link rel="manifest" href="/site.webmanifest">
    // <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5">
    // <meta name="msapplication-TileColor" content="#da532c">
    // <meta name="theme-color" content="#ffffff">
    ["link", { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png?v=1" }],
    ["link", { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png?v=1" }],
    ["link", { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png?v=1" }],
    ["link", { rel: "manifest", href: "/site.webmanifest" }],
    ["link", { rel: "mask-icon", href: "/safari-pinned-tab.svg?v=1", color: "#da532c" }],
    ["meta", { name: "msapplication-TileColor", content: "#da532c" }],

  ],
});




