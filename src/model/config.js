const {
  TWITTER_CONSUMER_KEY,
  TWITTER_CONSUMER_SECRET,
  TWITTER_ACCESS_TOKEN,
  TWITTER_ACCESS_TOKEN_SECRET,
} = process.env

class Config {
  get twitterCredentials() {
    return {
      consumer_key: TWITTER_CONSUMER_KEY,
      consumer_secret: TWITTER_CONSUMER_SECRET,
      access_token: TWITTER_ACCESS_TOKEN,
      access_token_secret: TWITTER_ACCESS_TOKEN_SECRET,
    }
  }
}

module.exports = Config