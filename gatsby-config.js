require("dotenv").config()
module.exports = {
  plugins: [
    // {
    //   resolve: `gatsby-source-twitter`,
    //   options: {
    //     credentials: {
    //       consumer_key: process.env.TWITTER_CONSUMER_KEY,
    //       consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    //       access_token_key: process.env.TWITTER_ACCESS_TOKEN,
    //       access_token_secret: process.env.TWITTER_ACCESS_SECRET,
    //     },
    //     queries: {
    //       MyTweet: {
    //         endpoint: "statuses/user_timeline",
    //         params: {
    //           screen_name: "TheOwenYoung",
    //           include_rts: true,
    //           tweet_mode: "extended",
    //         },
    //       },
    //     },
    //   },
    // },
    // {
    //   resolve: `@theowenyoung/gatsby-source-instagram`,
    //   options: {
    //     access_token: process.env.INSTAGRAM_ACCESS_TOKEN,
    //     paginate: 100,
    //     maxPosts: 1000,
    //   },
    // },

    {
      resolve: `gatsby-theme-timeline`,
      options: {
        // postsPerPage: 20,
        tweetTypeName: ["TweetsJson", "twitterStatusesUserTimelineMyTweet"],
        instagramTypeName: ["InstagramJson", "InstaNode"],
        // disqus: {
        //   shortname: "gatsby-theme-timeline",
        // },
        utterances: {
          repo: "theowenyoung/gatsby-theme-timeline",
          label: "comment",
        },
        // shouldTransformImage: false,
        // basePath: "/test",
        // postsFilter: {
        //   tags: {
        //     in: ["tweet"],
        //   },
        // },
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
    },
  ],
  // Customize your site metadata:
  siteMetadata: {
    title: `My Blog Title`,
    author: `My Name`,
    description: `My site description...`,
    keywords: ["Blog"],
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/gatsbyjs`,
      },
      {
        name: `github`,
        url: `https://github.com/gatsbyjs`,
      },
    ],
  },
}
