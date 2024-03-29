import colors from "vuetify/es5/util/colors.js"

export default {
  env: { NODE_ENV: "dev" },
  name: "SANDBOX",
  repo: "IEA-Paris/SANDBOX",
  domain: "sandbox", //> sandbox.pias.science
  full_name:
    "Sandbox of the Proceedings of the Institutes for Advanced Studies", // set to false if there is none
  full_name_html:
    "Sandbox of the Proceedings of the&nbsp;Institutes<br> for Advanced&nbsp;Studies", // set to false if there is none
  address: "17, Quai d'Anjou 75004 PARIS - FRANCE",
  phone: "+33(0)1 56 81 00 52",
  email: "publications@paris-iea.fr",
  subtitle: "Open source publishing platform for open science.",
  logo: "icon.png",
  logo_alt: "icon_w.png",
  description: "Open source publishing platform for open science.",
  splash_title: "Open source publishing platform for open science.",
  recaptcha: "6Lc_xuUUAAAAALwowUq0cC0wFtFnZ2NCi3UH4i1j",
  acm_certificate_arn:
    "arn:aws:acm:us-east-1:720928668014:certificate/af936a71-516a-40fc-8187-121807242a41",
  location: {
    origin:
      "https://www.openstreetmap.org/export/embed.html?bbox=2.356580793857575%2C48.850586483414915%2C2.361644804477692%2C48.85278204589751&amp;layer=mapnik&amp;marker=48.851684276691216%2C2.359112799167633",
    target:
      "https://www.openstreetmap.org/?mlat=48.85168&amp;mlon=2.35911#map=19/48.85168/2.35911",
  },
  // graphqlEndpoint:
  //   'https://mz3e6z5nlngvdls3zh3possona.appsync-api.eu-west-2.amazonaws.com/graphql',
  // graphqlApiKey: 'da2-eb5bkfhsvbdz3mexfykmkwjka4',
  keywords: "open source, open science, science, vuejs, nuxt, vuetify, vuex",
  url: "https://sandbox.pias.science",
  lang: {
    default: "en",
    locales: [
      {
        code: "fr",
        iso: "fr-FR",
        name: "French",
        file: "fr.json",
        dir: "ltr",
      },
      {
        code: "en",
        iso: "en-US",
        name: "English",
        file: "en.json",
        dir: "ltr",
      },
    ],
  },
  // TODO declare the features that should be enabled to customize the website & enforce them
  features: {
    generate: {
      pdf: true,
      thumbnails: true,
      tableOfContent: true,
      bibliography: true,
    },
    disseminate: {
      Zenodo: false,
    },
  },
  theme: {
    loading: "red",
    dark: false,
    themes: {
      light: {
        primary: "#2196f3",
        secondary: "#424242",
        accent: "#82B1FF",
        error: "#FF5252",
        info: "#2196F3",
        success: "#4CAF50",
        warning: "#FFC107",
      },
      dark: {
        primary: "#2196f3",
        secondary: "#424242",
        accent: "#82B1FF",
        error: "#FF5252",
        info: "#2196F3",
        success: "#4CAF50",
        warning: "#FFC107",
      },
    },
  },
  identifier: {
    ISSN: "2826-2832",
  },
  modules: {
    sentry: {
      dsn: "https://8a33f349628442338114e41535dc1f28@sentry.paris-ias.io/27",
    },
    ackee: {
      domain: "b0bb38eb-db88-4416-a097-eb5f7a01deff0",
      server: "https://ackee.paris-ias.io/",
    },
    zenodo: {
      token: process.env.ZENODO_TOKEN,
      sandboxToken: process.env.ZENODO_SANDBOX_TOKEN,
      sandbox: true,
      community: "proceedings-of-the-insitutes-for-advanced-studies",
    },
    image: {
      domains: [
        "https://picsum.photos",
        // snipcart.nuxtjs.org',
        "source.unsplash.com",
      ],
    },
    deepl: {
      key: process.env.DEEPL_KEY,
    },
    fonts: {
      families: {
        "Bodoni Moda": [500, 700],
        "Open Sans": [500, 700],
      },
    },
    bibliography: {
      defaultStyle: "APA",
      styles: [],
    },
  },
}
