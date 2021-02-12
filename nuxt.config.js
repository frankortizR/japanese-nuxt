export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'hiragana',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'google-site-verification',
        name: 'google-site-verification',
        content: 'PWUwfUXGXLWzgbAmL4JWJqePXenLj8g9q5FjLh6JT0k'
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/google-analytics',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/sitemap',
  ],

  //analytics
  googleAnalytics: {
    id: 'G-STM6LDF2PH'
  },

  //sitemap
  sitemap: {
    hostname: 'http://www.leshima.online',
    gzip: true,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config, ctx) {
      config.module.rules.push({
        test: /\.(ogg|mp3|wav|mpe?g)$/i,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]'
        }
      })
    },
    loaders: {
      vue: {
        transformAssetUrls: {
          audio: 'src'
        }
      }
    }
  },
  /*
   **
   */

}
