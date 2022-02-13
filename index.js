var express = require("express");
const graphql = require("graphql");
var { graphqlHTTP } = require("express-graphql");
const schema = require("./Schemas");

// const schema = new GraphQLSchema({
//   query: RootQuery,
//   mutation: Mutation,
// });

var app = express();
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);

app.listen(4000, () => {
  console.log("Running a GraphQL API server at http://localhost:4000/graphql");
});
