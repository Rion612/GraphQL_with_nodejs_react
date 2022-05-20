const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { schema } = require('./Schemas/schema');
const app = express();
const PORT = 5000;

app.use('/graphql',graphqlHTTP({
    schema: schema,
    graphiql: true
}))
app.listen(PORT, ()=>{
    console.log(`Server is running at port ${PORT}`);
})