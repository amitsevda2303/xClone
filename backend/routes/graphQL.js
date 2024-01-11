const {ApolloServer} = require("@apollo/server")
const dotenv = require('dotenv');
const User = require("../model/User");
const jwt = require('jsonwebtoken')
// const { eventNames } = require("../model/User");

dotenv.config()
const SECERET = process.env.JWTSECERET
const server = new ApolloServer({
  typeDefs: `
  type User {
    _id: ID!
    name: String!
    mobile: String
    email: String
    dob: String!
    password: String!
  }
       type Query{
        getdetails(token:String):User
       }
    `,
  resolvers: {
    Query: {
     getdetails:async(_, req) => {
      try {
          const {token}=req;
    console.log(token)

          // Verify the token
          const decoded = jwt.verify(token, SECERET);

          // Get user details from the database using the decoded user ID
          const user = await User.findById(decoded._id);

          if (!user) {
            throw new Error('User not found');
          }

          return user;
        } catch (error) {
          console.log(error)
          throw new Error('Invalid token');
        }
     }
  },}
});

module.exports = server;