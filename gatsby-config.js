require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: `Untools`,
    description: `Collection of thinking tools and frameworks to help you solve problems, make decisions and understand systems.`,
    author: `Adam Amran, @amrancz`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#323537`,
        theme_color: `#323537`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `@kentico/gatsby-source-kontent`,
      options: {
        projectId: process.env.KONTENT_PROJECT_ID, // Fill in your Project ID
        // if false used authorization key for secured API
        usePreviewUrl: process.env.KONTENT_PREVIEW_ENABLED && process.env.KONTENT_PREVIEW_ENABLED.toLowerCase() === 'true',
        authorizationKey: process.env.KONTENT_PREVIEW_ENABLED && process.env.KONTENT_PREVIEW_ENABLED.toLowerCase() === 'true'
          ? process.env.KONTENT_PREVIEW_KEY
          : undefined,
        languageCodenames: process.env.KONTENT_LANGUAGE_CODENAMES.split(',').map(lang => lang.trim()),
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        custom: {
          families: ['Inter:n4,i4,n9'],
          urls: ['https://rsms.me/inter/inter.css']
        }
      }
    },
    {
      resolve: 'gatsby-plugin-preload-fonts',
      options: {
        crossOrigin: `anonymous`,
      }
    }

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
