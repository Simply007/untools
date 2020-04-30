module.exports = {
  siteMetadata: {
    title: `Untools`,
    description: `Collection of tools for better thinking.`,
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
          deliveryClientConfig: {
            projectId: `c6e42f10-0ed4-0062-585c-b740aa1ad46c`
          },
          languageCodenames: [
                    `default`
          ]
      }
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        custom: {
          families: ['Inter:n4,n9'],
          urls: ['https://rsms.me/inter/inter.css']

        }
      }
    },
    {
      resolve: 'gatsby-plugin-preload-fonts',
    }
    
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
