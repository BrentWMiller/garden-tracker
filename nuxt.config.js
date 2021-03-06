import GT_CONFIG from "./gt.config";

export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: "spa",
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: "static",
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: GT_CONFIG.site_name,
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  /*
   ** Global CSS
   */
  css: ["@/assets/css/scaffolding.css", "@/assets/css/buttons.css"],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: ["@/plugins/vuelidate.js"],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    "@nuxtjs/tailwindcss"
  ],
  /*
   ** Nuxt.js modules
   */
  modules: ["@nuxtjs/pwa", "nuxt-webfontloader", "@nuxtjs/firebase"],
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    postcss: {
      // Add plugin names as key and arguments as value
      // Install them before as dependencies with npm or yarn
      plugins: {
        // Disable a plugin by passing false as value
        "postcss-nested": {}
      }
    }
  },
  router: {
    middleware: "auth-guard"
  },
  webfontloader: {
    google: {
      families: ["Nunito:500,600,600i,700,700i,800,800i,900,900i"]
    }
  },
  firebase: {
    config: GT_CONFIG.firebase.config,
    services: {
      firestore: true,
      auth: {
        initialize: {
          onAuthStateChangedAction: "user/onAuthStateChangedAction"
        }
      }
    },
    pwa: {
      meta: false,
      manifest: {
        name: GT_CONFIG.site_name,
        short_name: GT_CONFIG.site_name,
        description: GT_CONFIG.description,
        theme_color: "#ffffff",
        background_color: "#ffffff",
        lang: "en"
      }
    }
  }
};
