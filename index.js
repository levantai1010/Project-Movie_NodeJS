const express = require("express");
const { rootRouter } = require("./routers/root.router");
const path = require("path");
const app = express();
const cors = require("cors");
//set up cors
app.use(cors())
// set up graphQL
const { graphqlHTTP } = require("express-graphql");
const { graphqlSchema } = require("./graphql/schema");
const { graphqlResolvers } = require("./graphql/resolvers");
app.use("/graphql", graphqlHTTP({
    schema: graphqlSchema,
    rootValue: graphqlResolvers,
    graphiql: true, // bat tool de dung
}))
// setup static file
const pathPublicDirectory = path.join(__dirname, "./public");
// http://localhost:7000 => đi vào thư mục public
app.use("/public", express.static(pathPublicDirectory));

// setup app sử dụng dạng JSON
app.use(express.json());

app.use("/api", rootRouter);

app.get('/', (req, res) => {
    res.send('Hello world 123');



});

// create api user management

const port = 7000;
app.listen(port, () => {
    console.log(`App listening in port ${port} !!`);
});