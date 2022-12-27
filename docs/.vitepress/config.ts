import { defineConfig } from 'vitepress';

export default defineConfig({
  base: '/',
  lang: 'en-US',
  title: 'The fox jumped over the lazy dog.',
  description: 'Just playing around.',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Blog', link: '/articles/' },
      { text: 'External', link: 'https://google.com' },
    ],
    footer: {
      // message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present Daniele Tabanella'
    },
    editLink: {
      pattern: 'https://github.com/theRenard/blog/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    }
  },
  head: [
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }]
  ]
});