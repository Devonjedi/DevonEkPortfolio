module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://devonek.com/`,
    // Your Name
    name: 'Devon Ek',
    // Main Site Title
    title: `Devon Ek | Drupal Developer`,
    // Description that goes under your name in main bio
    description: `Drupal Developer from the Twin-Cities`,
    // Optional: Twitter account handle
    //author: `@rfitzio`,
    // Optional: Github account URL
    github: `https://github.com/Devonjedi`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/devon-ek/`,
    // Content of the About Me section
    about: `I'm a motivated Drupal Developer who has experience with theming, module development, and site-building. I'm also passionate about open-source contributions and always open to learning something new`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'Devfolio',
        description:
          'This website was built using a template created by Ryan Fitzgerald. A zero-config and blazing fast personal site + blog built with GatsbyJs and TailwindCSS',
        link: 'https://github.com/RyanFitzgerald/devfolio',
      },
     /*  {
        name: 'ChromeExtensionKit',
        description:
          'Kit to jump-start your Chrome extension projects with a variety of battle-tested starter templates',
        link: 'https://chromeextensionkit.com/?ref=devfolio',
      },
      {
        name: 'Another Cool Project',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit ducimus perferendis',
        link: 'https://github.com/RyanFitzgerald/devfolio',
      }, */
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'Kanopi Studios',
        description: 'Junior Drupal Developer, July 2022 - Present',
        link: 'https://kanopi.com/about-us/',
      }/* ,
      {
        name: 'Globex Corp',
        description: 'Full-Stack Developer, December 2017 - February 2020',
        link: 'https://github.com/RyanFitzgerald/devfolio',
      }, */
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages & Frameworks',
        description:
          'JavaScript (ES6+), PHP, HTML5, CSS3, SASS',
      },
      {
        name: 'Databases',
        description: 'MySQL',
      },
      {
        name: 'Other',
        description:
          'Docker DDEV, Drupal, Git, Drush, Composer',
      },
    ],
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    //`gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
