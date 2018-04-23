const { GraphQLServer } = require('graphql-yoga')
const typeDefs = require('./types')
const { getSearch } = require('./api.js')

const resolvers = {
  Query: {
    search: (_, { search }) => getSearch(search).then(data => data)
  }
}

const server = new GraphQLServer({ typeDefs, resolvers })
server.start(() => console.log(`Server is running at http://localhost:4000`))
