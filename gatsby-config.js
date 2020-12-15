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
    {
      resolve: `gatsby-theme-timeline`,
      options: {
        tweetTypeName: ["TweetsJson", "twitterStatusesUserTimelineMyTweet"],
      },
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
