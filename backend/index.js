const express = require('express')
const connectToMongo = require('./db')
const cors = require('cors')
const dotenv = require('dotenv')

dotenv.config()
connectToMongo()

const app = express()
const PORT = process.env.PORT;
app.use(cors())

app.use(express.json())

app.use('/', require('./routes/userRoute'))

app.get('/hello',(req,res)=>res.send("hello"))
app.listen(PORT,()=>{
    console.log("Example is listening on port:", PORT)
})