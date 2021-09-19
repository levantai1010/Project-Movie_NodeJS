const { buildSchema } = require("graphql");

const graphqlSchema = buildSchema(`
    type User {
    id: Int!
    name: String!
    email: String!
    password: String!
    age: Int!
    phone: String!
    role: String!
    avatar: String!
    }

    input InputUser{
        name: String!
        email: String!
        password: String!
        age: Int!
        phone: String!
        role: String!
        avatar: String!
    }
    type rootQuery {
        user(id: Int) : User!
        users: [User]!  
    }

    type rootMutation {
        createUser(inputUser:InputUser ): User!
        updateUser(id: Int,inputUser:InputUser): User!
        deleteUser(id: Int): User!
       
    }
    schema {
        query: rootQuery
        mutation: rootMutation
    }

`);
module.exports = {
    graphqlSchema,
}