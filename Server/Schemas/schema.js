const { GraphQLObjectType, GraphQLSchema, GraphQLString} = require("graphql");


const RootQuery = new GraphQLObjectType({
    name: 'RootQuery',
    fields: {
        test: {
            type: GraphQLString,
            resolve(){
                return 'Hello world'
            }
        }
    }
})

const schema = new GraphQLSchema({
    query:RootQuery
})

module.exports = { schema }