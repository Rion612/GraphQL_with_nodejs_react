const { GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLID, GraphQLList} = require('graphql');
const { books, authors } = require('../../Data/Data');


const BookType = new GraphQLObjectType({
    name:'Book',
    fields: ()=>({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        genre: { type: GraphQLString },
        author: {
            type: AuthorType,
            resolve(parent,args){
                return authors.find((x)=> x.id == parent.authorId)
            }
        }
    })
})
const AuthorType = new GraphQLObjectType({
    name:'Author',
    fields: ()=>({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        age: { type: GraphQLInt },
        books:{
            type: new GraphQLList(BookType),
            resolve(parent,args){
                return books.filter((x)=> x.authorId == parent.id)
            }
        }
    })
})

module.exports = { BookType, AuthorType }