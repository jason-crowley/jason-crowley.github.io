module.exports = {
  siteMetadata: {
    title: `Jason Crowley | Portfolio`,
    description: `A portfolio of projects written in React, JavaScript, Python and more, developed by Jason Crowley`,
    author: `Jason Crowley`,
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
        name: `Jason Crowley Developer Portfolio`,
        short_name: `Jason C. Portfolio`,
        start_url: `/`,
        background_color: `#1e90ff`,
        theme_color: `#1e90ff`,
        display: `standalone`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-fontawesome-css`,
  ],
}
