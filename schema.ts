const schema = `#graphql

  type Tweet {
    content: String! 
  }

  type Profile {
    username: String!
  }

  union searchResult = Tweet | Profile

  interface Character {
    name: String!
    outfit: String
    strengthStat: Int!
  }

  type Person implements Character {
    name: String!
    outfit: String!
    strengthStat: Int!

    backgroundStory: String!
  }

  type Alien implements Character {
    name: String!
    outfit: String!
    strengthStat: Int!

    homeWorld: String!
  }

  type Query {
    me: Person!
    characters: [Character!]!
    search: [searchResult!]!
  }
`

export default schema
