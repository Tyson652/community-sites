module.exports = {
  plugins: [
    {
      resolve: `gatsby-community-theme`,
      options: {}
    },
    `gatsby-plugin-theme-ui`,
    `gatsby-transformer-json`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-yaml`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-theme-ui`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data/member.yaml`,
        name: `members`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data/sponsor.yaml`,
        name: `sponsors`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data/location.yaml`,
        name: `locations`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data/site.yaml`,
        name: `site`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/events`,
        name: `events`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: `pages`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/mdxPages`,
        name: `mdxPages`
      }
    },
    {
      resolve: `gatsby-plugin-web-font-loader`,
      options: {
        google: {
          families: ["Source Sans Pro:300,400,600"]
        }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `ElixirSydney`,
        start_url: `/`,
        icon: `src/img/favicon.png`
      }
    }
  ]
};
