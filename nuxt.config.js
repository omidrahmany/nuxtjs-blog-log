let crossorigin;
export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,


  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'blog-log-app',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: ''},
      {name: 'format-detection', content: 'telephone=no'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },

  /** Customize the progress-bar color */
  loading: {color: "#078d01", height: '4px', duration: 3000},
  loadingIndicator: {
    name: "circle",
    color: "blue"
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/styles/main.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["~/plugins/core-component.js",
    "~/plugins/date-filter.js"],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build', '@nuxtjs/google-fonts'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios'],

  axios: {
    baseURL: process.env.BASE_URL || "http://localhost:9090"
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  // font-family: 'Roboto Mono', monospace;
// font-family: 'Square Peg', cursive;

  transition: {
    name: "fade",
    mode: "out-in"
  },

  router: {
    middleware: "log",
    base: "/",
  },


  dev: true,


}
