module.exports = {
  siteMetadata: {
    title: `All About Ridho Akbarisanto`,
    description: `All About Ridho Akbarisanto`,
    author: `@convyusboy`
  },
  plugins: [
    { resolve: `gatsby-plugin-emotion` },
    'gatsby-plugin-use-query-params',
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-react-leaflet',
      options: {
        linkStyles: true // (default: true) Enable/disable loading stylesheets via CDN
      }
    }
  ]
}
