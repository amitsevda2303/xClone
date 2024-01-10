const express = require('express')
const connectToMongo = require('./db')
const cors = require('cors')
const dotenv = require('dotenv')
const { expressMiddleware } = require("@apollo/server/express4")
const server = require("./routes/graphQL")

dotenv.config()
const startServer = async() =>{
    await connectToMongo()
    await server.start();

const app = express()
const PORT = process.env.PORT;
app.use(cors())

app.use(express.json())


app.use("/graphql", expressMiddleware(server))
app.use('/', require('./routes/userRoute'))

app.get('/hello',(req,res)=>res.send("hello"))
app.listen(PORT,()=>{
    console.log("Example is listening on port:", PORT)
})
}

startServer();