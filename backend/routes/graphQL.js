const {ApolloServer} = require("@apollo/server")
const dotenv = require('dotenv');
const User = require("../model/User");
// const { eventNames } = require("../model/User");

dotenv.config()
const SECERET = process.env.SECERET
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
        getdetails:User
       }
    `,
  resolvers: {
    Query: {
     getdetails:async (_, context)=>{
       
       try {
          const token = req.headers;
          console.log(context)
          // Verify the token
          const decoded = jwt.verify(token, SECERET);

          // Get user details from the database using the decoded user ID
          const user = await User.findById(decoded.userId);

          if (!user) {
            throw new AuthenticationError('User not found');
          }

          return user;
        } catch (error) {
          throw new AuthenticationError('Invalid token');
        }
     }
  },}
});

module.exports = server;