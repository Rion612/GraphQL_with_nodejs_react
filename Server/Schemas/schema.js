const { GraphQLObjectType, GraphQLSchema, GraphQLString, GraphQLInt, GraphQLID} = require("graphql");
const { books, authors } = require("../Data/Data");
const {BookType, AuthorType} = require('./TypeDefs/BookType')

const RootQuery = new GraphQLObjectType({
    name: 'RootQuery',
    fields: {
        book: {
            type: BookType,
            args: { id: { type: GraphQLID }},
            resolve(parent, args){
                const b = books.find((x)=> x.id == args.id)
                return b;
            }
        },
        author: {
            type: AuthorType,
            args: { id: { type: GraphQLID }},
            resolve(parent,args){
                const a = authors.find((x)=> x.id == args.id);
                return a;
            }
        }
    }
})

const schema = new GraphQLSchema({
    query:RootQuery
})

module.exports = { schema }