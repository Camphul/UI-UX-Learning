import NuxtConfiguration from '@nuxt/config'
const config: NuxtConfiguration = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  devModules: [
    '@nuxtjs/vuetify'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios'
  ],

  axios: {
    prefix: '/api/',
    retry: { retries: 3 },
    proxy: true,
    debug: true
  },

  proxy: {
    '/api/': {
      target: 'http://localhost:8080',
      pathRewrite: { '^/api/': '' }
    }
  },

  /*
  ** Build configuration
  */
  build: {
  }
}

export default config
