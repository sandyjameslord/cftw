// const URL = 'localhost:3000';
// const devURL = 'http://localhost:3000';
const URL = "https://cftw.herokuapp.com"


export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Code For The World',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '/css/all.css' },
      { rel: 'stylesheet', href: '/css/default.css' },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com" },
      { href: "https://fonts.googleapis.com/css2?family=Nunito:wght@400;700;900&family=Poppins&display=swap", rel: "stylesheet" }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/auth',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
      // proxy: true,
      baseURL: URL,
      https: true,
      // debug: true
  },

  // Proxy configuration
  proxy: {
    "/api": URL
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  serverMiddleware: [
    "~/server/server.js"
  ],

  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {propertyName: "token"},
          logout: true
        }
      }
    }
  }
}
