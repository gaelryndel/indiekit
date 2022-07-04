module.exports = {
  application: {
    url: "https://gaelryndel.herokuapp.com",
    mongodbUrl: process.env.MONGO_URL,
  },
  plugins: [
    "@indiekit/preset-jekyll",
    "@indiekit/store-github",
    "@indiekit/syndicator-mastodon",
    "@indiekit/syndicator-twitter",
  ],
  publication: {
    tokenEndpoint: "https://tokens.indieauth.com/token",
    categories: "https://gaelryndel.xyz/categories/index.json",
    locale: "en-GB",
    me: "https://gaelryndel.xyz",
    postTypes: [{
      type: "note",
      name: "Note",
      post: {
        path: "src/notes/{t}.md",
        url: "notes/{t}/"
      }
    }, {
      type: "photo",
      name: "Photo",
      post: {
        path: "src/photos/{t}.md",
        url: "photos/{t}/"
      },
      media: {
        path: "src/media/{t}.{ext}",
        url: "media/{t}.{ext}"
      }
    }, {
      type: "reply",
      name: "Reply",
      post: {
        path: "src/replies/{t}.md",
        url: "replies/{t}/"
      }
    }],
    slugSeparator: "_",
    timeZone: "Europe/Sofia",
  },
  "@indiekit/store-github": {
    user: "gaelryndel",
    repo: "gaelryndel.xyz"
  },
  "@indiekit/syndicator-mastodon": {
    checked: true,
    forced: true,
    url: "https://mastodon.social",
    user: "gaelryndel",
  },
  "@indiekit/syndicator-twitter": {
    checked: true,
    forced: true,
    user: "gaelryndel",
  },
};