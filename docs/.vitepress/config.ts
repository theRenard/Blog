import { defineConfig } from 'vitepress';

export default defineConfig({
  base: '/',
  lang: 'en-US',
  title: 'Shall we play a game?',
  description: 'Just playing around with javascript',

  lastUpdated: true,

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Blog', link: '/articles/' },
    ],
    footer: {
      // message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present Daniele Tabanella'
    },
    editLink: {
      pattern: 'https://github.com/theRenard/blog/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/theRenard' },
      { icon: 'mastodon', link: 'https://mastodon.social/@monsieurLeRenard' }
    ],
  },
  head: [
    ['meta', { name: 'theme-color', content: '#3c8772' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }]
  ]
});