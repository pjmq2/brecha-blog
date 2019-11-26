module.exports = {
  siteMetadata: {
    title: "Brecha by Pablo Madrigal",
    author: "Pablo Madrigal",
    description: "Pagina/Blog de mi brecha y tiempo de formación"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/brecha-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}
