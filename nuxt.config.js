import metaUtils from './commons/meta-utils'
import linkUtils from './commons/link-utils'
import * as pwaUtils from './commons/pwa-utils'

export default {
  target: 'static',

  ssr: true,

  env: {
    siteURL: process.env.SITE_URL, // Add site url in .env folder
  },

  generate: {
    fallback: true,
  },

  head: {
    meta: [...metaUtils()],
    link: [...linkUtils()],
    script: [
      {
        src: '/js/jquery-3.5.1.min.js',
        type: 'text/javascript',
        body: true,
      },
      {
        src: '/js/override-alert.js',
        type: 'text/javascript',
        body: true,
      },
      {
        src: '/js/webflow.js',
        type: 'text/javascript',
        body: true,
      },
    ],
  },

  plugins: [
    '@/plugins/mixins',
    { src: '@/plugins/animation', ssr: false },
    { src: '@/plugins/locomotive', ssr: false },
    { src: '@/plugins/splitting', ssr: false },
    { src: '@/plugins/typeform', ssr: false },
  ],

  components: [
    '@/components/global',
    '@/components/includes/home',
    '@/components/includes/about',
    '@/components/includes/portfolio',
    '@/components/includes/capabilities',
    '@/components/includes/careers',
  ],

  buildModules: ['@nuxtjs/eslint-module'],

  modules: ['@nuxtjs/axios', '@nuxtjs/pwa'],

  axios: {
    baseURL: '/',
  },

  pwa: { manifest: pwaUtils.getManifest() },

  pageTransition: 'transition-page',

  build: {},
}
